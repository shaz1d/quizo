import { auth } from "@/auth";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

type QuestionProps = {
  title: string;
  options: string[];
  answer: string;
};
export async function POST(req: Request) {
  const { title, questions } = await req.json();
  const session = await auth();
  if (!session) {
    return NextResponse.json({
      success: false,
      error: "You must be signed in to create a quiz",
    });
  }
  try {
    const quiz = await db.quiz.create({
      data: {
        topic: title,
      },
    });
    await Promise.all(
      questions.map(async (question: QuestionProps) => {
        let options = [...question.options, question.answer];
        options = options.sort(() => Math.random() - 0.5);
        await db.question.create({
          data: {
            question: question.title,
            answer: question.answer,
            quizId: quiz.id,
            options,
          },
        });
      })
    );

    return NextResponse.json({
      success: true,
      data: quiz,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error,
    });
  }
}
export async function GET() {
  try {
    const quizes = await db.quiz.findMany();
    return NextResponse.json({
      success: true,
      quizes,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error,
    });
  }
}
