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
  return <UpdateQuizForm initialData={quiz} />;
};

export default page;
