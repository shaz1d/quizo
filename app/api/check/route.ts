import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { quizId, userAnswers, timeTaken } = await req.json();
    const session = await auth();
    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    // Constants for scoring
    const BASE_POINTS = 10; // Points for each correct answer
    const TIME_PENALTY_RATE = 0.2; // Points deducted per second

    let userScore = 0;
    const quiz = await db.quiz.findUnique({
      where: {
        id: quizId,
      },
      include: {
        questions: {
          select: {
            id: true,
            answer: true,
          },
        },
      },
    });
    quiz?.questions.forEach((question) => {
      if (userAnswers[question.id] === question.answer) {
        userScore += BASE_POINTS;
      }
    });

    // Apply time penalty
    const timePenalty = timeTaken * TIME_PENALTY_RATE;
    userScore = Math.max(userScore - timePenalty, 0); // Ensure score doesn't go below 0

    const user = await db.user.findUnique({
      where: {
        email: session.user.email as string,
      },
      include: {
        hasPlayed: true,
      },
    });
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const hasPlayed = user.hasPlayed.filter((game) => game.quizId === quizId);

    if (hasPlayed?.length === 0) {
      const game = await db.playedQuiz.create({
        data: {
          quizId,
          userId: user.id,
          score: userScore,
          timeTaken,
        },
      });
      await db.user.update({
        where: {
          id: user.id,
        },
        data: {
          score: {
            increment: userScore,
          },
        },
      });
      return NextResponse.json({
        played: false,
        data: game,
      });
    } else {
      return NextResponse.json({
        played: true,
        data: hasPlayed,
        newScore: userScore,
        timeTaken,
      });
    }
  } catch (error) {
    console.log("[Answer Check POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
