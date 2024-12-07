"use client";

import { useCallback, useEffect, useState } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

type QuizProp = {
  quiz: {
    id: string;
    topic: string;
    questions: {
      question: string;
      id: string;
      options: string[];
    }[];
  };
};

const PlayQuiz = ({ quiz }: QuizProp) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const [timeLeft, setTimeLeft] = useState(120);
  const router = useRouter();

  const handleOptionSelect = (questionId: string, option: string) => {
    const updatedAnswers = {
      ...selectedAnswers,
      [questionId]: option,
    };
    setSelectedAnswers(updatedAnswers);
    // Move to the next question
    if (currentQuestionIndex < quiz!.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      handleSubmit(updatedAnswers);
    }
  };

  const handleSubmit = useCallback(
    async (answers?: Record<string, string>) => {
      const userAnswers = answers || selectedAnswers;
      const res = await axios.post("/api/check", {
        quizId: quiz.id,
        userAnswers,
      });
      console.log(res.data);
      if (res.data.played) {
        router.push(
          `/results/${res.data.data[0].id}?newScore=${res.data.newScore}`
        );
      } else {
        router.push(`/results/${res.data.data.id}`);
      }
    },
    [selectedAnswers, quiz.id, router]
  );
  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime < 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [handleSubmit]);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  return (
    <div>
      <h1 className="text-3xl text-center mb-5  font-semibold">{quiz.topic}</h1>
      <div className="flex justify-between items-end w-full mb-2">
        <p className="text-sm text-muted-foreground">
          Question {currentQuestionIndex + 1} of {quiz.questions.length}
        </p>
        <p>
          Time Left:{" "}
          <span className="px-3 py-1 rounded bg-primary text-white w-14 inline-flex items-center justify-center">
            {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, "0")}
          </span>
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            {currentQuestion.question}
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <div className="grid grid-cols-2 w-full gap-2">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                onClick={() => handleOptionSelect(currentQuestion.id, option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PlayQuiz;
