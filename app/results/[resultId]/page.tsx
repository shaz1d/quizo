import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

type Props = {
  params: {
    resultId: string;
    newScore?: string;
  };
  searchParams: { newScore: string };
};

const ResultPage = async ({ params, searchParams }: Props) => {
  const session = await auth();
  if (!session?.user) {
    return redirect("/login");
  }
  const newScore = searchParams.newScore;
  const result = await db.playedQuiz.findUnique({
    where: { id: params.resultId },
  });
  if (!result) {
    return <div>No Resutl Found</div>;
  }

  return (
    <div className="flex flex-col items-center gap-8 w-full max-w-xl mx-auto">
      <Navbar></Navbar>
      <h1 className="text-2xl font-semibold">
        {newScore
          ? "You have already played this quiz"
          : "You have completed the quiz"}
      </h1>
      {newScore && (
        <div className="text-center">
          <p className="text-lg font-medium">Your new Score</p>
          <p className="text-4xl font-semibold">{newScore}</p>
          <p className="text-muted-foreground text-xs">
            This score will not be added to your overall score
          </p>
        </div>
      )}
      <div className="text-center w-full">
        <p>Here are your results</p>
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="border p-4 rounded-lg">
            <p className="text-sm font-medium">Score</p>
            <p>556</p>
          </div>
          <div className="border p-4 rounded-lg">
            <p className="text-sm font-medium">Time Taken</p>
            <p>65</p>
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
