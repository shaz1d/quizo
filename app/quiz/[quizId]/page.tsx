import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { UpdateQuizForm } from "@/components/update-quiz-form";
import { db } from "@/lib/db";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type PageProps = {
  params: {
    quizId: string;
  };
};
const page = async ({ params }: PageProps) => {
  const quiz = await db.quiz.findUnique({
    where: {
      id: params.quizId,
    },
    include: {
      questions: true,
    },
  });

  if (!quiz) {
    return <div>Quiz not found</div>;
  }
  const filteredQuiz = {
    ...quiz,
    questions: quiz.questions.map((question) => {
      return {
        ...question,
        options: question.options.filter(
          (option: string) => option !== question.answer
        ),
      };
    }),
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-between items-center w-full max-w-xl">
        <h1 className="text-2xl font-semibold">Update Quiz</h1>
        <Link href="/">
          <Button variant="link">
            <ArrowLeft />
            Back to Quizes
          </Button>
        </Link>
      </div>
      <UpdateQuizForm initialData={filteredQuiz} />
    </>
  );
};

export default page;
