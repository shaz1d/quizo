import { CreateQuizForm } from "@/components/create-quiz-form";

const page = () => {
  return (
    <section>
      <h1 className="text-2xl font-medium mb-10">Create New Quiz</h1>
      <CreateQuizForm />
    </section>
  );
};

export default page;
