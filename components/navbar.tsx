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
import { User } from "next-auth";
import SignOut from "./sign-out";

const Navbar = ({ user }: { user: User }) => {
  return (
    <header className="w-full flex justify-between items-center gap-5 max-w-xl">
      <Link href="/" className="flex items-center gap-2 font-semibold">
        <Icons.newLogo className="size-8" /> Quizo
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user.image as string} />
            <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
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
