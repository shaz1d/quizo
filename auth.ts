import NextAuth, { DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt";

import { db } from "@/lib/db";

declare module "next-auth/jwt" {
  interface JWT {
    isAdmin: boolean | null;
  }
}
declare module "next-auth" {
  interface Session {
    user: {
      isAdmin?: boolean | null;
    } & DefaultSession["user"];
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  providers: [
    GitHub,
    Google({ authorization: { params: { prompt: "select_account" } } }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const dbUser = await db.user.findUnique({
          where: {
            email: user.email as string,
          },
        });
        if (dbUser) {
          token.isAdmin = dbUser.isAdmin;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token.isAdmin !== undefined) {
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
});
