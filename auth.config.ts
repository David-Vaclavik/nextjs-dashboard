import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    // Redirect users to the login page when they need to sign in
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      // Debug logging
      // console.log("=== AUTH DEBUG ===");
      // console.log("Path:", nextUrl.pathname);
      // console.log("Is Logged In:", isLoggedIn);
      // console.log("Auth object:", auth);
      // console.log("User:", auth?.user);
      // console.log("Is On Dashboard:", isOnDashboard);
      // console.log("================");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
        // redirect is configured in pages.signIn in authConfig
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [], // Empty because middleware doesn't need them
  // You want to keep the heavy lifting of providers and authentication logic out of this file
  // to avoid unnecessary overhead on every request.
} satisfies NextAuthConfig;

// Where do we read cookies in this file? We don't, NextAuth does that for us under the hood.
// The auth callback receives an `auth` object that contains the user information
// if the user is authenticated. We can use this `auth` object to determine
// if the user is logged in or not and redirect accordingly.
