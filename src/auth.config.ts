import type { NextAuthConfig } from "next-auth";

const PROTECTED_PREFIXES = ["/discover", "/recommendations", "/dashboard"];
const AUTH_PAGES = ["/login", "/register"];

/**
 * Edge-safe Auth.js config (no Prisma / bcrypt). Used by `middleware.ts`
 * to gate routes, and spread into the full config in `auth.ts`.
 */
export const authConfig = {
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" },
  providers: [], // real providers are added in auth.ts (Node runtime)
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const { pathname } = nextUrl;

      const isProtected = PROTECTED_PREFIXES.some((p) =>
        pathname.startsWith(p),
      );
      const isAuthPage = AUTH_PAGES.some((p) => pathname.startsWith(p));

      if (isProtected) {
        // Returning false triggers a redirect to the signIn page.
        return isLoggedIn;
      }

      if (isAuthPage && isLoggedIn) {
        return Response.redirect(new URL("/discover", nextUrl));
      }

      return true;
    },
    jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    session({ session, token }) {
      if (token.id) session.user.id = token.id as string;
      return session;
    },
  },
} satisfies NextAuthConfig;
