import { UpdateQuizForm } from "@/components/update-quiz-form";
import { db } from "@/lib/db";

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
    <section>
      <h1 className="text-2xl font-medium mb-10">Update Quiz</h1>
      <UpdateQuizForm initialData={filteredQuiz} />
    </section>
  );
};

export default page;
