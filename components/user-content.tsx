import { auth } from "@/auth";
import SignOut from "./sign-out";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

const UserContent = async () => {
  const session = await auth();
  return (
    <>
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Profile Info</DropdownMenuLabel>
            <DropdownMenuItem>
              <SignOut />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </>
  );
};

export default UserContent;
