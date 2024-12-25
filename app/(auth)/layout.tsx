import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { auth } from "@/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const isAdmin = session?.user.isAdmin;
  if (!isAdmin) {
    return (
      <main className="w-full min-h-screen py-10 flex items-center justify-center">
        <div className="p-8 rounded-3xl border border-muted text-center">
          <h1 className="text-7xl font-medium mb-10">Not Authorized</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </main>
    );
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-5 w-full">{children}</main>
    </SidebarProvider>
  );
}
