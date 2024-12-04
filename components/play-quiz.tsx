"use client";

import { useEffect, useState } from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

type QuizProp = {
  quiz: {
    questions: {
      question: string;
      id: string;
      options: string[];
    }[];
  } & {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    topic: string;
  };
};

const PlayQuiz = ({ quiz }: QuizProp) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const [timeLeft, setTimeLeft] = useState(300);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionSelect = (questionId: string, option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: option,
    }));
    // Move to the next question
    if (currentQuestionIndex < quiz!.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      handleSubmit(); // Submit when the last question is answered
    }
  };

  const handleSubmit = async () => {
    console.log("Selected Answers:", selectedAnswers);
    // Send `selectedAnswers` to your API for validation

    alert("Quiz submitted!"); // Replace with proper navigation or feedback
  };

  const currentQuestion = quiz.questions[currentQuestionIndex];
  return (
    <div>
      <div className="flex justify-between items-start w-full">
        <h1>{quiz.topic}</h1>
        <p>
          Time Left:{Math.floor(timeLeft / 60)}:
          {String(timeLeft % 60).padStart(2, "0")}
        </p>
      </div>
      <Card>
        <CardHeader>
          <h2>
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </h2>
          <CardTitle>{currentQuestion.question}</CardTitle>
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
