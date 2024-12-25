import { auth } from "@/auth";

import { Button } from "@/components/ui/button";

import { getQuizs } from "@/lib/actions";

import Link from "next/link";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }
  const quizes = await getQuizs();

  return (
    <>
      <section className="bg-slate-200 rounded-[32px] container mx-auto py-20  px-8 text-center">
        <h1 className="text-6xl max-w-[620px] leading-[120%] mx-auto font-medium">
          Explore Topics That Excite You!
        </h1>
        <p className="pt-2 pb-4 max-w-3xl mx-auto">
          Choose from a variety of categories to test your knowledge, learn new
          things, and have fun.
        </p>
      </section>
      <section className="container mx-auto py-20">
        <div className="grid grid-cols-4 gap-6">
          {quizes.map((quiz) => {
            return (
              <div
                key={quiz.id}
                className="p-8 border border-muted rounded-2xl"
              >
                <h4 className="text-2xl font-medium capitalize ">
                  {quiz.topic}
                </h4>
                <p className="text-muted-foreground mb-10 text-sm">
                  Contains {quiz.questions.length} questions
                </p>
                <Link href={`/play/${quiz.id}`}>
                  <Button size="lg" className="w-full">
                    Start Quiz
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default page;
