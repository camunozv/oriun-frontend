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

          console.log("successfully gotten user tokens");

          // Safecly keep user tokens in local storage.
          if (typeof window !== "undefined") {
            localStorage.setItem("access", user_tokens.data.access);
            localStorage.setItem("refresh", user_tokens.data.refresh);
          }

          console.log(user_tokens.data.type_user);
          return user_tokens;
          
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],

  // callbacks : {
  //   // For persisting the role on the server side
  //   // async jwt ({token, user}){
  //   //   if (user) {
  //   //    token.role = user.role
  //   //   }
  //   //   return token
  //   // }
  // }
};

// After getting the user data we get the access & refresh tokens
// which should be used to:

// 1. the access token should be used to put it on the headers of our requests such that
// the server knows we are authenticated.
// 2. the refresh token should be used to put it on the request which allows us to get a new
// access token for continuing using the application

// It is worthwhile knowing that next js also has its own tokens.
// 1. next-auth.sesion-token : which allows accessing session data and knowing if the user is still logged
// in in a browser, client side session management.
// 2. next-auth.csfr-token: which protect us from cross side scripting attacks.
