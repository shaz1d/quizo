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
      <section className="bg-[#FBF9F9] rounded-[32px] container mx-auto py-10   px-8 text-center">
        <p className=" max-w-3xl mx-auto">Topic</p>
        <h1 className="text-6xl max-w-[620px] leading-[120%] capitalize mx-auto font-medium">
          {quiz.topic}
        </h1>
      </section>
      <PlayQuiz quiz={quiz} />
    </>
  );
};

export default page;
