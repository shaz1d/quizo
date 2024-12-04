import { MessageCircleQuestion, Play } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";

type Props = {
  quizes: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    topic: string;
    questions: {
      id: string;
    }[];
  }[];
};

const QuizContent = ({ quizes }: Props) => {
  return (
    <ScrollArea className="px-6  h-64">
      <div className="flex flex-col gap-5">
        {quizes.map((quiz) => {
          return (
            <div
              key={quiz.id}
              className="flex items-start justify-between gap-4 space-x-4 rounded-md"
            >
              <div className="flex gap-2">
                <MessageCircleQuestion className="size-6" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">
                    {quiz.topic}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Contains {quiz.questions.length} questions
                  </p>
                </div>
              </div>
              <Link href={`/play/${quiz.id}`}>
                <Button>
                  <Play /> Play
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
};

export default QuizContent;
