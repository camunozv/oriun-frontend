import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginAPI } from "../../loginForm";

export const handler = NextAuth({
  pages: {
    signIn: "/ConvocatoriasAdmin",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          // look for the user
          const user_tokens = await loginAPI.postUser(
            credentials.entered_name,
            credentials.entered_password
          );
          // return access tokens
          console.log("successfully gotten user tokens");
          return user_tokens;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
