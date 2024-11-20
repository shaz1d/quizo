"use client";

import axios from "axios";
import { FormEvent, useState } from "react";

const CreateQuizForm = () => {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    { title: "", options: ["", "", ""], answer: "" },
  ]);

  const handleQuestionChange = (
    index: number,
    field: string,
    value: string,
    optionIndex?: number
  ) => {
    const updatedQuestions = [...questions];
    if (field === "options" && optionIndex !== undefined) {
      updatedQuestions[index].options[optionIndex] = value;
    } else {
      updatedQuestions[index][field as "title" | "answer"] = value;
    }
    setQuestions(updatedQuestions);
  };
  const addQuestion = () => {
    setQuestions([
      ...questions,
      { title: "", options: ["", "", ""], answer: "" },
    ]);
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/quiz", { title, questions });
      console.log(res.data);
      setTitle("");
    } catch (error) {
      console.log("Error Submitting from", error);
    }
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label>Quiz Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-black"
        />
        <h2>Add Questions:</h2>
        {questions.map((question, index) => (
          <div key={index}>
            <h3>Question {index + 1}</h3>
            <label>
              Title:
              <input
                type="text"
                value={question.title}
                onChange={(e) =>
                  handleQuestionChange(index, "title", e.target.value)
                }
                required
              />
            </label>
            <div className="options">
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex}>
                  Option {optionIndex + 1}:
                  <input
                    type="text"
                    value={option}
                    onChange={(e) =>
                      handleQuestionChange(
                        index,
                        "options",
                        e.target.value,
                        optionIndex
                      )
                    }
                    required
                  />
                </label>
              ))}
            </div>
            <label>
              Answer:
              <input
                type="text"
                value={question.answer}
                onChange={(e) =>
                  handleQuestionChange(index, "answer", e.target.value)
                }
                required
              />
            </label>
          </div>
        ))}
        <button type="button" onClick={addQuestion}>
          Add More Questions
        </button>
        <button
          type="submit"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Create
        </button>
      </form>
    </>
  );
};

export default CreateQuizForm;
