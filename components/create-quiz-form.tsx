"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const quizSchema = z.object({
  title: z.string(),
  questions: z.array(
    z.object({
      title: z.string(),
      options: z.array(z.string()).min(3).max(4),
      answer: z.string().min(1),
    })
  ),
});

export function CreateQuizForm() {
  const form = useForm<z.infer<typeof quizSchema>>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      title: "",
      questions: [{ title: "", options: ["", "", ""], answer: "" }],
    },
  });
  function onSubmit(values: z.infer<typeof quizSchema>) {
    console.log(values);
  }
  function addQuestion() {
    form.setValue("questions", [
      ...form.getValues("questions"),
      { title: "", options: ["", "", ""], answer: "" },
    ]);
  }

  const values = form.watch();
  console.log(values);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Quiz Title" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        {form.getValues("questions").map((question, i) => (
          <>
            <FormField
              control={form.control}
              name={`questions.${i}.title`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question</FormLabel>
                  <FormControl>
                    <Input placeholder="Question" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </>
        ))}
        <Button onClick={addQuestion}>Add Question</Button>
        <Button type="submit">Create Quiz</Button>
      </form>
    </Form>
  );
}
