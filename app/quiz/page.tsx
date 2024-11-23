import axios from "axios";
import Link from "next/link";

type QuizProps = {
  id: number;
  topic: string;
};
const page = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await axios.get(`${baseUrl}/api/quiz`);
  const { quizes } = res.data;
  console.log(quizes);
  return (
    <>
      <h1>Quiz Page</h1>
      {quizes.map((quiz: QuizProps) => (
        <Link href={`/quiz/${quiz.id}`} key={quiz.id}>
          {quiz.topic}
        </Link>
      ))}
    </>
  );
};

export default page;
