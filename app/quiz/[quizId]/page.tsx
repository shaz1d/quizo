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
  return (
    <>
      <h1>Single Quiz Page</h1>

      {quiz?.questions.map((question) => (
        <div key={question.id}>
          <h2>{question.question}</h2>
          <h3>Options:</h3>
          {question.options.map((option, i) => {
            return <p key={i}>{option}</p>;
          })}
        </div>
      ))}
    </>
  );
};

export default page;
