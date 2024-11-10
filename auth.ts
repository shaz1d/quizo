import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHub from "next-auth/providers/github";

import { db } from "@/lib/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt", // Use JWT for stateless sessions in MongoDB
  },
  providers: [GitHub],
});
