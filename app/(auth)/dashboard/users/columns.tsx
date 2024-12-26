"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type User = {
  id: string;
  index: number;
  name: string | null;
  email: string | null;
  createdAt: string;
  role: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "index",
    header: "Index",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
];
