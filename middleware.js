// Without a defined matcher this line applies next auth to the entire project.
export { default } from "next-auth/middleware";

// Middleware allows running code before a request is completed.
// Then whith the incoming response we can modify it in different ways.
// Basically it runs before cached content and routes are matched.

// Middleware will be applied to every route in our project. Therefore it's crucial
// to have well written the matchers, & take into account the directory hierechy
// to which the matchers apply.

export const config = {
  matcher: ["/", "/ConvocatoriasAdmin/:path*", "/ConvocatoriasEstudiante/:path*"],
};
