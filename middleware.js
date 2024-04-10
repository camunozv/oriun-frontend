import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request) {
    if (
      request.nextUrl.pathname.startsWith(
        "/Convocatorias/ConvocatoriasAdmin"
      ) &&
      request.nextauth.token.type_user === "student"
    ) {
      return NextResponse.rewrite(
        new URL("/Convocatorias/ConvocatoriasEstudiante", request.url)
      );
    }

    if (
      request.nextUrl.pathname.startsWith(
        "/Convocatorias/ConvocatoriasEstudiante"
      ) &&
      request.nextauth.token.type_user === "employee"
    ) {
      return NextResponse.rewrite(
        new URL("/Convocatorias/ConvocatoriasAdmin", request.url)
      );
    }

    if (
      request.nextUrl.pathname.startsWith(
        "/FAQ"
      ) &&
      request.nextauth.token.type_user == "employee"
    ) {
      return NextResponse.rewrite(
        new URL("/Convocatorias/ConvocatoriasAdmin", request.url)
      );
    }
  },

  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);
// NICE NOTES ABOUT WITHAUTH & MIDDLEWARE SPECIAL FILE:
// Without a defined matcher this line applies next auth to the entire project.
// export { default } from "next-auth/middleware";

// Middleware allows running code before a request is completed.
// Then whith the incoming response we can modify it in different ways.
// Basically it runs before cached content and routes are matched.

// Middleware will be applied to every route in our project. Therefore it's crucial
// to have well written the matchers, & take into account the directory hierechy
// to which the matchers apply.

// WITHAUTH:
// Augments page requests with user tokens.
