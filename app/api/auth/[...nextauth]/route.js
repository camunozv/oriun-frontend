import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginAPI } from "../../loginForm";

// notes about .env.local:
// environment variables which are not uploaded for security reasons shoudl be there
// then we should expescif them when we deploy our application in our host.

export const handler = NextAuth({
  pages: {
    signIn: "/ConvocatoriasAdmin",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        entered_name: {
          label: "entered_name",
          type: "text",
          placeholder: "no_user"
        },
        entered_password: {
          label: "entered_password",
          type: "password",
          placeholder: "000000"
        },
      },
      async authorize(credentials) {
        try {
          // look for the user
          const user_tokens = await loginAPI.postUser(
            credentials.entered_name,
            credentials.entered_password
          );
          // return access tokens O9AwCbV9DchBx8qv+EJidnfp9069gQcriBXdskFUbas=
          console.log("successfully gotten user tokens");
          console.log(user_tokens);
          console.log(user_tokens.data.type_user);
          return user_tokens;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
});

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
