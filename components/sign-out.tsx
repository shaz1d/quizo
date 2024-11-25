import { signOut } from "@/auth";
import { Button } from "./ui/button";

export default function SignOut() {
  return (
    <form
      className="w-full"
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button className="w-full" type="submit">
        Sign Out
      </Button>
    </form>
  );
}
