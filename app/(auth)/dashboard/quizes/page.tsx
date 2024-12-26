import { getQuizs } from "@/lib/actions";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import QuizContent from "@/components/quiz-content";
import { Card, CardHeader } from "@/components/ui/card";

const page = async () => {
  const data = await getQuizs();

  const formattedData = data.map((item, index) => ({
    id: item.id,
    index: index + 1,
    topic: item.topic,
    questions: item.questions.length,
    createdAt: item.createdAt,
    updatedAt: item.updatedAt,
  }));

  return (
    <section>
      <h1 className="text-2xl font-medium">Quizes</h1>
      <div className="flex w-full justify-end">
        <Link href="/dashboard/quizes/new">
          <Button>
            <Plus></Plus>Create New
          </Button>
        </Link>
      </div>
      <div className="w-full mt-2">
        <DataTable columns={columns} data={formattedData}></DataTable>
      </div>
    </section>
  );
};

export default page;
