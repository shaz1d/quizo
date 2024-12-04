import Navbar from "@/components/navbar";
import PlayQuiz from "@/components/play-quiz";
import { db } from "@/lib/db";

type Props = {
  params: {
    quizId: string;
  };
};

const page = async ({ params: { quizId } }: Props) => {
  const quiz = await db.quiz.findUnique({
    where: { id: quizId },
    include: {
      questions: {
        select: {
          id: true,

          question: true,
          options: true,
        },
      },
    },
  });

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="w-full max-w-lg mx-auto">
        <PlayQuiz quiz={quiz} />
      </div>
    </>
  );
};

export default page;
