"use client";
import { z } from "zod";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

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
import { Plus, Trash } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Question } from "@prisma/client";

type Props = {
  initialData: {
    questions: Question[];
  } & {
    id: string;
    topic: string;
    createdAt: Date;
    updatedAt: Date;
  };
};

const quizSchema = z.object({
  title: z.string().min(1),
  questions: z
    .array(
      z.object({
        question: z.string().min(1),
        options: z.array(z.string().min(1)).min(3).max(3),
        answer: z.string().min(1),
      })
    )
    .min(1),
});

export function UpdateQuizForm({ initialData }: Props) {
  const { topic, questions } = initialData;
  const router = useRouter();
  const form = useForm<z.infer<typeof quizSchema>>({
    resolver: zodResolver(quizSchema),
    defaultValues: {
      title: topic,
      questions: questions,
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "questions",
    control: form.control,
  });

  async function onSubmit(values: z.infer<typeof quizSchema>) {
    const res = await axios.patch(`/api/quiz/${initialData.id}`, values);

    form.reset();

    close();
    router.push("/");
    if (res.data.success) {
      toast.success("Quiz has been updated.");
    } else {
      toast.error("Failed to update quiz.");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full ">
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
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Quiz Questions
            </span>
          </div>
        </div>

        <div>
          {fields.map((field, index) => (
            <div className="mb-4" key={field.id}>
              <div className="flex justify-between items-center">
                <h5 className="font-semibold">Question {index + 1}</h5>
                <Button
                  onClick={() => remove(index)}
                  type="button"
                  variant="outline"
                  size="icon"
                >
                  <Trash className="size-4" />
                </Button>
              </div>

              <FormField
                control={form.control}
                name={`questions.${index}.question`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the question" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-x-3 mt-1 gap-y-1">
                {field.options.map((_option, i) => (
                  <FormField
                    key={i}
                    control={form.control}
                    name={`questions.${index}.options.${i}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Option {i + 1}</FormLabel>
                        <FormControl>
                          <Input placeholder={`Option ${i + 1}`} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
                <FormField
                  control={form.control}
                  name={`questions.${index}.answer`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Answer</FormLabel>
                      <FormControl>
                        <Input placeholder="Answer" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          ))}
        </div>
        <Button
          type="button"
          variant="outline"
          className="w-full mb-4"
          onClick={() =>
            append({
              question: "",
              options: ["", "", ""],
              answer: "",
            })
          }
        >
          <Plus className="size-5" /> Add Question
        </Button>
        <div className="w-full flex justify-between items-center gap-5 mt-2 mb-6">
          <Link href="/dashboard/quizes">
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </Link>
          <Button type="submit">Update Quiz</Button>
        </div>
      </form>
    </Form>
  );
}
