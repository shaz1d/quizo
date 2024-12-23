import { auth } from "@/auth";
import { db } from "@/lib/db";
import { Question } from "@prisma/client";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { quizId: string } }
) {
  const { title, questions } = await req.json();
  const session = await auth();

  const isAdmin = session?.user.isAdmin;
  if (!isAdmin) {
    return NextResponse.json({
      success: false,
      error: "You must be an admin to create a quiz",
    });
  }

  try {
    // Quiz update logic
    const quizId = params.quizId;

    const existingQuiz = await db.quiz.findUnique({
      where: { id: quizId },
      include: { questions: true },
    });

    if (!existingQuiz) {
      return NextResponse.json({
        success: false,
        error: "Quiz not found",
      });
    }

    const updatedQuiz = await db.quiz.update({
      where: { id: quizId },
      data: { topic: title },
    });

    const existingQuestionIds = questions.map((q: Question) => q.id);

    const questionsToDelete = existingQuiz.questions.filter(
      (q) => !existingQuestionIds.includes(q.id)
    );

    await Promise.all(
      questionsToDelete.map((q) => db.question.delete({ where: { id: q.id } }))
    );

    await Promise.all(
      questions.map((question: Question) => {
        const options = [...question.options, question.answer].sort(
          () => Math.random() - 0.5
        );

        if (question.id) {
          return db.question.update({
            where: { id: question.id },
            data: {
              question: question.question,
              answer: question.answer,
              options,
            },
          });
        } else {
          return db.question.create({
            data: {
              question: question.question,
              answer: question.answer,
              quizId,
              options,
            },
          });
        }
      })
    );

    return NextResponse.json({ success: true, data: updatedQuiz });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { quizId: string } }
) {
  const session = await auth();

  const isAdmin = session?.user.isAdmin;
  if (!isAdmin) {
    return NextResponse.json({
      success: false,
      error: "You must be an admin to create a quiz",
    });
  }
  try {
    const { quizId } = params;

    console.log(quizId);
    // Check if the quiz exists
    const existingQuiz = await db.quiz.findUnique({
      where: { id: quizId },
    });
    if (!existingQuiz) {
      return NextResponse.json({
        success: false,
        error: "Quiz not found",
      });
    }

    const quiz = await db.quiz.delete({
      where: { id: quizId },
    });
    return NextResponse.json({ success: true, quiz });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
