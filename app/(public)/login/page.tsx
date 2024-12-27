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
    <section className="absolute inset-0">
      <div className="min-h-full flex items-center justify-center">
        <Card className="max-w-xl w-full">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl flex items-center justify-center gap-2 mb-6">
              <Icons.newLogo className=" size-5" /> Quizo
            </CardTitle>
            <CardTitle className="text-2xl">Welcome Back!</CardTitle>
            <CardDescription>
              Sign in to the app using github or google
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-2">
              <SignInGithub />
              <SignInGoogle />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default page;
