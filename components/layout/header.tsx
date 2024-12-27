import Link from "next/link";
import { Icons } from "../icons";
import Nav from "../nav";
import UserContent from "../user-content";

const Header = () => {
  return (
    <header className="flex container mx-auto justify-between items-center h-20 px-5 md:px-0">
      <Link href="/" className="flex items-center gap-2 font-medium">
        <Icons.newLogo className="size-8" /> Quizo
      </Link>
      <Nav />
      <UserContent />
    </header>
  );
};

export default Header;
