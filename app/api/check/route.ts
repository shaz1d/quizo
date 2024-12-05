import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { quizId, userAnswers } = await req.json();
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

  return NextResponse.json({
    success: true,
    message: "Quiz submitted successfully",
    userScore,
  });
}
