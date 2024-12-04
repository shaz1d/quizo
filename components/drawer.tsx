"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CreateQuizForm } from "./create-quiz-form";
import { useDrawer } from "@/hooks/globalStates";

export function DrawerQuiz() {
  const { isOpen, open, close } = useDrawer();
  return (
    <Drawer open={isOpen} onClose={() => close()}>
      <DrawerTrigger asChild>
        <Button variant="outline" onClick={() => open()}>
          Create Quiz
        </Button>
      </DrawerTrigger>
      <DrawerContent className="font-[family-name:var(--font-geist-sans)]">
        <div className="mx-auto w-full max-w-lg">
          <DrawerHeader>
            <DrawerTitle>Create A New Quiz</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>

          <DrawerFooter className="pt-1">
            <CreateQuizForm />
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
