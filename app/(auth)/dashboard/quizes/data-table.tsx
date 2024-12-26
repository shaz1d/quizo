"use client";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import { Edit, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";
import { AlertModal } from "@/components/alert-modal";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuizId, setCurrentQuizId] = useState("");
  const handleDelete = async (quizId: string) => {
    setIsLoading(true);
    const res = await axios.delete(`/api/quiz/${quizId}`);
    console.log(res);
    router.refresh();
    if (res.data.success) {
      toast.success("Quiz has been Deleted.");
    } else {
      toast.error("Failed to delete quiz.");
    }
    setIsLoading(false);
    setIsDeleteModalOpen(false);
    console.log(quizId + "quiz:" + res.data.quiz);
  };

  const updatedColumns = columns.map((column) => {
    if (column.id === "actions") {
      column.cell = ({ row }) => (
        <div className="flex justify-end gap-2">
          <Link href={`/dashboard/quizes/${row.original.id}`}>
            <Button variant="outline">
              <Edit />
              Edit
            </Button>
          </Link>
          <Button
            variant="destructive"
            onClick={() => {
              setCurrentQuizId(row.original.id);
              setIsDeleteModalOpen(true);
            }}
          >
            <Trash />
            Delete
          </Button>
        </div>
      );
    }
    return column;
  });
  const table = useReactTable({
    data,
    columns: updatedColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <AlertModal
        loading={isLoading}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={() => handleDelete(currentQuizId)}
        open={isDeleteModalOpen}
      />
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
