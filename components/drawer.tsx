"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CreateQuizForm } from "./create-quiz-form";

export function DrawerQuiz() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Create Quiz</Button>
      </DrawerTrigger>
      <DrawerContent className="font-[family-name:var(--font-geist-sans)]">
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader>
            <DrawerTitle>Create A New Quiz</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>

          <div className="px-4">
            <CreateQuizForm />
          </div>
          <DrawerFooter className="pt-1">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
