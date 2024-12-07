import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { quizId, userAnswers } = await req.json();
    const session = await auth();
    if (!session?.user) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

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
    quiz?.questions.map((question) => {
      if (userAnswers[question.id] === question.answer) {
        userScore++;
      }
    });

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

    const hasPlayed = user?.hasPlayed.filter((game) => game.quizId === quizId);
    console.log(userScore);
    if (hasPlayed?.length === 0) {
      const game = await db.playedQuiz.create({
        data: {
          quizId,
          userId: user.id,
          score: userScore,
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
      });
    }
  } catch (error) {
    console.log("[Answer Check POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
