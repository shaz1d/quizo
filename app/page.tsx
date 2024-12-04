import { auth } from "@/auth";
import { DrawerQuiz } from "@/components/drawer";
import Leaderboard from "@/components/leaderboard";
import Navbar from "@/components/navbar";
import QuizContent from "@/components/quiz-content";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getQuizs, getUsers } from "@/lib/actions";
import { cn } from "@/lib/utils";

import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }
  const isAdmin = session.user.isAdmin;

  const quizes = await getQuizs();

  const users = await getUsers();

  return (
    <>
      {" "}
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Tabs defaultValue="quizes" className="w-[450px]">
          <TabsList
            className={cn(
              "w-full grid",
              isAdmin ? "grid-cols-3" : "grid-cols-2"
            )}
          >
            <TabsTrigger value="quizes">Quizes</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            {isAdmin && <TabsTrigger value="users">Users</TabsTrigger>}
          </TabsList>
          <TabsContent value="quizes">
            <Card>
              <CardHeader className="flex-row justify-between items-start space-y-0">
                <div className="space-y-1.5">
                  <CardTitle>Quizes</CardTitle>
                  <CardDescription>{quizes.length} Quizes</CardDescription>
                </div>
                {isAdmin && <DrawerQuiz />}
              </CardHeader>

              <CardContent className="space-y-2 px-0">
                <QuizContent quizes={quizes} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="leaderboard">
            <Card>
              <CardHeader>
                <CardTitle>Leaderboard</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 px-0">
                <Leaderboard />
              </CardContent>
            </Card>
          </TabsContent>
          {isAdmin && (
            <TabsContent value="users">
              <Card>
                <CardHeader>
                  <CardTitle>Users</CardTitle>
                  <CardDescription>Users List</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 flex flex-col gap-1">
                  {users &&
                    users.map((user) => {
                      return (
                        <div
                          key={user.id}
                          className="flex items-center justify-between space-x-4"
                        >
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarImage src={user.image as string} />
                              <AvatarFallback>
                                {user.name?.charAt(0)}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium leading-none">
                                {user.name}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {user.email}
                              </p>
                            </div>
                          </div>
                          <p>{user.isAdmin ? "admin" : "user"}</p>
                        </div>
                      );
                    })}
                </CardContent>
              </Card>
            </TabsContent>
          )}
        </Tabs>
      </main>
    </>
  );
}
