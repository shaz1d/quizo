import { MessageCircleQuestion, Play } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

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
    <>
      {quizes.map((quiz) => {
        return (
          <div
            key={quiz.id}
            className="-mx-2 flex items-start justify-between gap-4 space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground"
          >
            <div className="flex gap-2">
              <MessageCircleQuestion className="size-6" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{quiz.topic}</p>
                <p className="text-sm text-muted-foreground">
                  Contains {quiz.questions.length} questions
                </p>
              </div>
            </div>
            <Button>
              <Play /> Play
            </Button>
          </div>
        );
      })}
    </>
  );
};

export default QuizContent;
