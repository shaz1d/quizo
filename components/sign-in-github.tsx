import { signIn } from "@/auth";
import { Button } from "./ui/button";
import { Icons } from "./icons";

export default function SignInGithub() {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/" });
      }}
    >
      <Button size="lg" className="w-full">
        <Icons.gitHub className="mr-2 h-4 w-4" />
        Github
      </Button>
    </form>
  );
}
