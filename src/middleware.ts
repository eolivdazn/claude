import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";

// Edge-safe auth middleware. The `authorized` callback in authConfig
// handles route protection and auth-page redirects.
export default NextAuth(authConfig).auth;

export const config = {
  // Run on everything except Next internals, static assets, and API routes.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
