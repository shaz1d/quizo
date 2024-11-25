import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar user={session.user} />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Tabs defaultValue="quizes" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2 ">
            <TabsTrigger value="quizes">Quizes</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>
          <TabsContent value="quizes">
            <Card>
              <CardHeader>
                <CardTitle>Quizs</CardTitle>
                <CardDescription>Quiz List</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2"></CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="leaderboard">
            <Card>
              <CardHeader>
                <CardTitle>Leaderboard</CardTitle>
                <CardDescription>Player List</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2"></CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
