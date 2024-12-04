import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Icons } from "./icons";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import SignOut from "./sign-out";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Navbar = async () => {
  const session = await auth();

  if (!session?.user) {
    return redirect("/login");
  }
  return (
    <header className="w-full flex justify-between items-center gap-5 max-w-xl sticky top-0">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Icons.newLogo className="size-8" /> Quizo
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={session.user.image as string} />
            <AvatarFallback>{session.user.name?.charAt(0)}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Profile Info</DropdownMenuLabel>
          <DropdownMenuItem>
            <SignOut />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Navbar;
