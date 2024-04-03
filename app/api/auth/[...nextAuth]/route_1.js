// Here we use a catch all dynamic route. The reason for that is that "next-auth" package will
// display multiple routes when deploying the page, such that login could be performed from
// a lot of different places. We can still define our own api routes within the api folder
// as long as we do not override one of the built in routes next exposes.

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { verifyPassword } from "../auth";

// NextAuth is a function and when executed it returns a function
// To congifure its behavior we parse to it an object.

export default NextAuth({
  // Here the session object allows configuring how the session of a user will be managed.
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      // here we could configure/specify which credential we will have. However, this would generate automatically
      // an auth form for us, since we already have one, it is not necessary to do that. Thus here we need only to set up "authorize()"
      // which is a method next js calls for us when receives a incoming log in request.
      // credentials: {... dummy credential here}

      async authorize(credentials) { // "credentials" is an object with our auth information
        // here we bring our own authorization logic. Since we dont have a data base here (although i have a sql lite)
        // connection that could be used to simulate the process, that wouldn't ve productive, since we need to connect
        // to an api

        // In this part should be checked if we have a user stored with the correct email and a given password.
        const user_email = credentials.email;

        // verify that there is a user stored with this email/username
        // ... code here

        // if there is not a user then we throw an error

        // if (!user)
        // {
        //     throw new Error('No user registered.')
        // }

        // verify the passwords we got in our credentials
        const validUser = await verifyPassword(
          credentials.password,
          user.hashedPassword
        );

        if (!validUser) {
          throw new Error("Wrong password entered.");
        }

        return { user_name: credentials.email }; // By returning an object we let nextAuth know that the authentication went good. This object will be encoded
        // within the JWT
      },
    }),
  ],
});
