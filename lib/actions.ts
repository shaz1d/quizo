"use server";

import { db } from "./db";

export const getQuizs = async () => {
  try {
    const quizs = await db.quiz.findMany();
    return quizs;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch quizs");
  }
};
