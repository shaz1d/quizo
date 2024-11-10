import { signIn } from "@/auth";
import Image from "next/image";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        type="submit"
      >
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        Signin with GitHub
      </button>
    </form>
  );
}
