import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import prisma from "./db";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const defaultUsername = process.env.ADMIN_USERNAME || "admin";
        const defaultPassword = process.env.ADMIN_PASSWORD || "RankNex@2024";

        // Master Credentials Check
        if (
          credentials.username === defaultUsername &&
          credentials.password === defaultPassword
        ) {
          try {
            const user = await prisma.adminUser.findUnique({
              where: { username: defaultUsername },
            });

            if (!user) {
              const hashedPassword = await bcrypt.hash(defaultPassword, 12);
              const created = await prisma.adminUser.create({
                data: {
                  username: defaultUsername,
                  email: "admin@ranknexai.com",
                  password: hashedPassword,
                  name: "RankNex Admin",
                },
              });
              return {
                id: created.id,
                name: created.name,
                email: created.email,
              };
            }

            return {
              id: user.id,
              name: user.name,
              email: user.email,
            };
          } catch {
            return {
              id: "admin-master",
              name: "RankNex Admin",
              email: "admin@ranknexai.com",
            };
          }
        }

        // Database lookup for other custom admin accounts
        try {
          const user = await prisma.adminUser.findUnique({
            where: { username: credentials.username },
          });

          if (!user) return null;

          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isValid) return null;

          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: "/admin/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as Record<string, unknown>).id = token.id;
      }
      return session;
    },
  },
  secret:
    process.env.NEXTAUTH_SECRET ||
    "ranknex-ai-super-secure-nextauth-secret-key-2025",
};
