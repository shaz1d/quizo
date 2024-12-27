import { auth } from "@/auth";
import SignOut from "./sign-out";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const UserContent = async () => {
  const session = await auth();
  return (
    <div className="flex items-center gap-2">
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={session.user.image as string} />
              <AvatarFallback>{session.user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" alignOffset={-4}>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={session.user.image as string}
                    alt={session.user.name as string}
                  />
                  <AvatarFallback className="rounded-lg">
                    {session.user.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    {session.user.name}
                  </span>
                  <span className="truncate text-xs">{session.user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <SignOut />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href="/login">
          <Button>Log in</Button>
        </Link>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden">
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" alignOffset={-4}>
          <DropdownMenuItem>
            <Link href="/quiz">Play Quiz</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/leaderboard">Leaderboard</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/contact">Contact</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserContent;
