import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  // matcher option from Proxy to specify that it should run on specific paths.
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
