import { Calendar, Home, Inbox } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Icons } from "./icons";
import Link from "next/link";
import { NavUser } from "./nav-user";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Quizes",
    url: "/dashboard/quizes",
    icon: Home,
  },
  {
    title: "Questions",
    url: "/dashboard/questions",
    icon: Inbox,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: Calendar,
  },
];

export async function AppSidebar() {
  const session = await auth();
  if (!session) {
    return redirect("/");
  }
  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/dashboard" className="flex gap-3 items-center">
          <Icons.newLogo className="size-8" />
          Admin Panel
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {session.user && <NavUser user={session?.user} />}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
