import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt";
import { verifyPassword } from "@/lib/auth/hash";
import { prisma } from "@/lib/prisma";

type AuthUser = {
  id: string;
  username: string;
  name: string | null;
  email: string | null;
  role: string;
  permission: string;
  manageContent: string[];
  avatarURL: string | null;
};

type AuthToken = JWT & Partial<AuthUser>;

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        login: { label: "Username or Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials?.password) return null;

        // Find by email OR username
        const admin = await prisma.admin.findFirst({
          where: {
            OR: [
              { email: credentials.login.toLowerCase() },
              { username: credentials.login },
            ],
          },
        });

        if (!admin) return null;

        const isValid = await verifyPassword(
          credentials.password,
          admin.passwordHash,
        );
        if (!isValid) return null;

        return {
          id: admin.id,
          username: admin.username,
          name: admin.name,
          email: admin.email,
          role: admin.role,
          permission: admin.permission,
          manageContent: admin.manageContent,
          avatarURL: admin.avatarURL,
        } satisfies AuthUser;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const authToken = token as AuthToken;

      if (user) {
        const authUser = user as AuthUser;

        authToken.id = authUser.id;
        authToken.username = authUser.username;
        authToken.role = authUser.role;
        authToken.permission = authUser.permission;
        authToken.manageContent = authUser.manageContent;
        authToken.avatarURL = authUser.avatarURL;
      }

      return authToken;
    },
    async session({ session, token }) {
      const authToken = token as AuthToken;

      if (session.user) {
        session.user.id = authToken.id ?? session.user.id;
        session.user.username = authToken.username ?? session.user.username;
        session.user.role = authToken.role ?? session.user.role;
        session.user.permission =
          authToken.permission ?? session.user.permission;
        session.user.manageContent =
          authToken.manageContent ?? session.user.manageContent;
        session.user.avatarURL = authToken.avatarURL ?? session.user.avatarURL;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
