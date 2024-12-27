import { signIn } from "@/auth";
import { Button } from "./ui/button";
import { Icons } from "./icons";

export default function SignInGoogle() {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
    >
      <Button size="lg" className="w-full">
        <Icons.google className="mr-2 h-4 w-4" />
        Google
      </Button>
    </form>
  );
}
