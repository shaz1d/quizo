import axios from "axios";

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
        <div key={quiz.id}>{quiz.topic}</div>
      ))}
    </>
  );
};

export default page;
