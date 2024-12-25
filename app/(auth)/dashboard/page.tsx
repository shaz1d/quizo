import Leaderboard from "@/components/leaderboard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getQuestions, getQuizs, getUsers } from "@/lib/actions";

const page = async () => {
  const quizes = await getQuizs();
  const questions = await getQuestions();
  const users = await getUsers();
  return (
    <section>
      <h1 className="text-2xl font-medium">Welcome, Admin</h1>
      <div className="grid grid-cols-3 gap-5 mt-10">
        <Card>
          <CardHeader>
            <CardTitle>Total Quiz</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-8xl text-center">{quizes.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Questions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-8xl text-center">{questions.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-8xl text-center">{users.length}</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <Card>
          <CardHeader>
            <CardTitle>Leaderboard</CardTitle>
          </CardHeader>
          <CardContent>
            <Leaderboard />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-5">
              {users.map((user) => {
                return (
                  <div
                    key={user.id}
                    className="flex items-center justify-between p-3 rounded-lg shadow-sm"
                  >
                    <div className="flex gap-3 items-center">
                      <Avatar>
                        <AvatarImage src={user.image as string} />
                        <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-md font-medium ">{user.name}</p>
                        <p className="text-xs text-gray-500"> {user.email}</p>
                      </div>
                    </div>
                    <p>{user.isAdmin ? "Admin" : "User"}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default page;
