import NextAuth from "next-auth";
import { options } from "./credentials_options";

// notes about .env.local:
// environment variables which are not uploaded for security reasons shoudl be there
// then we should expescif them when we deploy our application in our host.

export const handler = NextAuth(options);

/*
pages: {
  signIn: '/auth/signin',
  signOut: '/auth/signout',
  error: '/auth/error', // Error code passed in query string as ?error=
  verifyRequest: '/auth/verify-request', // (used for check email message)
  newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
}

*/
export { handler as GET, handler as POST };
