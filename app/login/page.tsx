import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SignInGithub from "@/components/sign-in-github";
import SignInGoogle from "@/components/sign-in-google";
import { Icons } from "@/components/icons";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await auth();
  if (session?.user) {
    return redirect("/");
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="max-w-xl">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2 mb-6">
            <Icons.logo className=" size-5" /> Quizo
          </CardTitle>
          <CardTitle className="text-lg">Sign In</CardTitle>
          <CardDescription>
            Sign in to the app usign github or google
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <SignInGithub />
            <SignInGoogle />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
