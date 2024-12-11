import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { cn, formatTime } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  params: {
    resultId: string;
    newScore?: string;
  };
  searchParams: { newScore: string; timeTaken: string };
};

type ResultItem = {
  id: string;
  correctAnswer: string;
  isCorrect: boolean;
  userAnswer: string | null;
};

const ResultPage = async ({ params, searchParams }: Props) => {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }

  const { newScore, timeTaken } = searchParams;
  const result = await db.playedQuiz.findUnique({
    where: { id: params.resultId },
  });

  if (!result) {
    return <div>No Resutl Found</div>;
  }
  const resultArray: ResultItem[] = result.result as ResultItem[];

  return (
    <div className="flex flex-col items-center gap-6 w-full max-w-xl mx-auto">
      <Navbar></Navbar>
      <h1 className="text-2xl font-semibold">
        {newScore
          ? "You have already played this quiz"
          : "You have completed the quiz"}
      </h1>
      {newScore && (
        <div className="text-center">
          <div className="grid grid-cols-2 gap-3 mt-3 mb-1">
            <div className="border p-4 rounded-lg">
              <p className="text-lg font-medium">Your new Score</p>
              <p className="text-4xl font-semibold">{newScore}</p>
            </div>
            <div className="border p-4 rounded-lg">
              <p className="text-lg font-medium">Time Taken</p>
              <p className="text-4xl font-semibold">{formatTime(timeTaken)}</p>
            </div>
          </div>

          <p className="text-muted-foreground text-xs">
            This score will not be added to your overall score
          </p>
        </div>
      )}
      <div className="text-center w-full">
        <p>{newScore ? "First Time Played Result" : "Here are your results"}</p>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="border p-4 rounded-lg">
            <p className="text-sm font-medium">Score</p>
            <p className="text-2xl font-semibold">{result.score}</p>
          </div>
          <div className="border p-4 rounded-lg">
            <p className="text-sm font-medium">Time Taken</p>
            <p className="text-2xl font-semibold">
              {formatTime(result.timeTaken)}
            </p>
          </div>
          <div className="border p-4 rounded-lg col-span-2 flex flex-col gap-3 text-sm text-left">
            <div className="w-full flex items-center gap-3 text-xl font-semibold mb-2">
              <div className="w-12"></div>
              <p className=" flex-1 ">Correct Answers</p>
              <p className="flex-1 ">Your Answers</p>
            </div>
            {resultArray.map((el, i) => {
              return (
                <div key={el.id} className="flex gap-3 items-center w-full">
                  <p className=" py-1 bg-primary text-white rounded-sm  w-12 flex items-center justify-center">
                    Q{i + 1}.
                  </p>
                  <p className="flex-1 text-lg">{el.correctAnswer}</p>
                  <p className="flex-1 text-lg">
                    {el.userAnswer ? el.userAnswer : "Skipped Answer"}
                    <span
                      className={cn(
                        el.isCorrect ? "bg-green-300" : "bg-red-300",
                        "px-2 py-1 rounded-sm ml-2 text-sm"
                      )}
                    >
                      {el.isCorrect ? "Correct" : "Incorrect"}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Link href="/">
        <Button>
          <ArrowLeft className="size-4" />
          Back to Quizes
        </Button>
      </Link>
    </div>
  );
};

export default ResultPage;
