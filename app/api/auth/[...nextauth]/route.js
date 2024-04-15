import NextAuth from "next-auth";
import { options } from "./credentials_options";

export const handler = NextAuth(options);


export { handler as GET, handler as POST };
/**
 * MOCKUP OPTIONS OBJECT CONFIG
 * {
  pages: {
    signOut: "/PreguntasFrecuentes",
    newUser: "/Convocatorias",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        entered_name: {
          label: "Name",
          type: "text",
          placeholder: "your-username",
        },
        entered_password: {
          label: "Password",
          type: "password",
          placeholder: "your-password",
        },
      },
      // After retrieving the user object (which may contain user data) next js creates for us a session
      // object which is stored in a session cookie, where the user data is encrypted.
      async authorize(credentials) {
        try {
          // look for the user
          const user = await apiLogin.postUser(
            credentials.entered_name,
            credentials.entered_password
          );

          console.log("successfully gotten user tokens");
          console.log(user.data);

          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    // For persisting the role on the server side
    async jwt({ token, user }) {
      if (user) {
        token.access = user.data.access;
        token.refresh = user.data.refresh;
        token.type_user = user.data.type_user;
      }
      return token;
    },

    async session({ session, token }) {
      session.access = token.access;
      session.refresh = token.refresh;
      session.type_user = token.type_user;
      return session;
    },
  },
}
 */