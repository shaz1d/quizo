"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-8">
      <Link
        className={cn(
          "transition-colors hover:text-foreground/80 font-medium text-md",
          pathname === "/quiz" ? "text-foreground" : "text-foreground/80"
        )}
        href="/quiz"
      >
        Play Quiz
      </Link>

      <Link
        href="/leaderboard"
        className={cn(
          "transition-colors hover:text-foreground/80 font-medium text-md",
          pathname === "/leaderboard" ? "text-foreground" : "text-foreground/80"
        )}
      >
        Leaderboard
      </Link>
      <Link
        href="/contact"
        className={cn(
          "transition-colors hover:text-foreground/80 font-medium text-md",
          pathname === "/contact" ? "text-foreground" : "text-foreground/80"
        )}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Nav;
