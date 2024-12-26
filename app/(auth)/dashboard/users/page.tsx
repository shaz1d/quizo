import { getUsers } from "@/lib/actions";
import { columns } from "./columns";
import { DataTable } from "./data-table";

const page = async () => {
  const users = await getUsers();
  const formatedUsers = users.map((user, index) => ({
    id: user.id,
    index: index + 1,
    name: user.name,
    email: user.email,
    createdAt: new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(user.createdAt)),
    role: user.isAdmin ? "Admin" : "User",
  }));
  return (
    <section>
      <h1 className="text-2xl font-medium">Users</h1>
      <div className="w-full mt-2">
        <DataTable columns={columns} data={formatedUsers}></DataTable>
      </div>
    </section>
  );
};

export default page;
