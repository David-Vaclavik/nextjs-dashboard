import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

// The Proxy file allows us to run authentication on every request,
// which is useful for things like authentication and authorization.
// In this case, we're using it to protect our dashboard route
// and redirect unauthenticated users to the login page.

// 1. Default export: the middleware function
export default NextAuth(authConfig).auth;

// 2. Named export 'config': Next.js looks for this automatically
export const config = {
  // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
  // matcher option from Proxy to specify that it should run on specific paths.
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
  // This matcher pattern means:
  // - Run the middleware on all paths except:
  //   - Paths starting with /api (API routes)
  //   - Paths starting with /_next/static (Next.js static files)
  //   - Paths starting with /_next/image (Next.js image optimization)
  //   - Paths ending with .png (PNG images)
};

/*
Next.js automatically:

1. Looks for middleware.ts in your project root
2. Runs the default export (the middleware function) - export default NextAuth(authConfig).auth;
3. Reads the config export to know which routes to apply middleware to - export const config = {}
*/
