import CredentialsProvider from "next-auth/providers/credentials";
import { apiLogin } from "../../userLogin";

export const options = {
  pages: {
    signIn: "/Ingreso",
    signOut: "/Ingreso",
    newUser: "/ConvocatoriasAdmin",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        entered_name: {
          label: "entered_name",
          type: "text",
          placeholder: "no_user",
        },
        entered_password: {
          label: "entered_password",
          type: "password",
          placeholder: "000000",
        },
      },
      async authorize(credentials) {
        try {
          // look for the user
          const user_tokens = await apiLogin.postUser(
            credentials.entered_name,
            credentials.entered_password
          );
          // return access tokens
          console.log("successfully gotten user tokens");
          // console.log(user_tokens);
          // console.log(user_tokens.data.type_user);
          return user_tokens;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
};
