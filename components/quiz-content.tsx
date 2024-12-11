"use client";
import { Edit, MessageCircleQuestion, Play, Trash } from "lucide-react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertModal } from "./alert-modal";
import axios from "axios";
import { toast } from "sonner";

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
  const router = useRouter();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuizId, setCurrentQuizId] = useState("");
  const handleDelete = async (quizId: string) => {
    setIsLoading(true);
    const res = await axios.delete(`/api/quiz/${quizId}`);
    console.log(res);
    router.refresh();
    if (res.data.success) {
      toast.success("Quiz has been Deleted.");
    } else {
      toast.error("Failed to delete quiz.");
    }
    setIsLoading(false);
    setIsDeleteModalOpen(false);
    console.log(quizId + "quiz:" + res.data.quiz);
  };
  return (
    <>
      <AlertModal
        loading={isLoading}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => handleDelete(currentQuizId)}
        open={isDeleteModalOpen}
      />
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
                <div className="flex gap-1">
                  <Link href={`/play/${quiz.id}`}>
                    <Button>
                      <Play /> Play
                    </Button>
                  </Link>
                  <Link href={`/quiz/${quiz.id}`}>
                    <Button variant="outline">
                      <Edit />
                      Edit
                    </Button>
                  </Link>
                  <>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        setCurrentQuizId(quiz.id);
                        setIsDeleteModalOpen(true);
                      }}
                    >
                      <Trash />
                      Delete
                    </Button>
                  </>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </>
  );
};

export default QuizContent;
