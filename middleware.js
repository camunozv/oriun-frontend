// Without a defined matcher this line applies next auth to the entire project.
// export { default } from "next-auth/middleware";

// Middleware allows running code before a request is completed.
// Then whith the incoming response we can modify it in different ways.
// Basically it runs before cached content and routes are matched.

// Middleware will be applied to every route in our project. Therefore it's crucial
// to have well written the matchers, & take into account the directory hierechy
// to which the matchers apply.

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// Augments requests with user tokens
export default withAuth(
  function middleware(request) {
    console.log(request.nextUrl.pathname, 'my path');
    console.log(request.nextauth.token, 'my token');

    if (
      request.nextUrl.pathname.startsWith("/ConvocatoriasAdmin") &&
      request.nextauth.token?.type_user !== "employee"
    ) {
      return NextResponse.rewrite(
        new URL("/ConvocatoriasEstudiante", request.url)
      );
    }

    if (
      request.nextUrl.pathname.startsWith("/ConvocatoriasEstudiante") &&
      request.nextauth.token?.type_user !== "student"
    ) {
      return NextResponse.rewrite(new URL("/ConvocatoriasAdmin", request.url));
    }
  },

  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);