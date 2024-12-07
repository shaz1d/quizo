import { CreateQuizForm } from "@/components/create-quiz-form";
import Navbar from "@/components/navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-2xl font-semibold">Create New Quiz</h1>
      </div>
      <CreateQuizForm />
    </>
  );
};

export default page;
