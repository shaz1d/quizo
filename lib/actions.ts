"use server";

import { db } from "./db";

export const getQuizs = async () => {
  try {
    const quizs = await db.quiz.findMany({
      include: {
        questions: {
          select: {
            id: true,
          },
        },
      },
    });
    return quizs;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch quizs");
  }
};

export const getUsers = async () => {
  try {
    const users = await db.user.findMany();
    return users;
  } catch (error) {
    console.log(error, "Failed to fetch users");
  }
};
export const getUserById = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });

    return user;
  } catch (error) {
    console.log(error, "Failed to fetch user");
  }
};

export const getTopPlayers = async () => {
  try {
    const topPlayers = await db.user.findMany({
      orderBy: {
        score: "desc",
      },
      take: 10,
      select: {
        id: true,
        name: true,
        image: true,
        score: true,
      },
    });

    return topPlayers;
  } catch (error) {
    console.log(error, "Failed to fetch top players");
    throw new Error("Failed to fetch top players");
  }
};
