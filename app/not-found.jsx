import React from "react";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/credentials_options";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

async function notfound() {
  const session = await getServerSession(options);

  if (session) {
    redirect("/Convocatorias");
  } else {
    signOut();
  }
  return <div>not-found</div>;
}

export default notfound;
