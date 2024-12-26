"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Quiz = {
  id: string;
  index: number;
  topic: string;
  questions: number;
  createdAt: Date;
  updatedAt: Date;
};

export const columns: ColumnDef<Quiz>[] = [
  {
    accessorKey: "index",
    header: "Index",
  },
  {
    accessorKey: "topic",
    header: "Topic",
  },

  {
    accessorKey: "questions",
    header: "Questions",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const date = row.original.createdAt;
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(date));
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Updated At",
    cell: ({ row }) => {
      const date = row.original.updatedAt;
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date(date));
    },
  },
  {
    id: "actions",
  },
];
