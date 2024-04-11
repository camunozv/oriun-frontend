import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/credentials_options";
import { redirect } from "next/navigation";
import { signOut } from "next-auth/react";

async function ConvocatoriasPage() {
  const session = await getServerSession(options);
  
  if (session.type_user == "student") {
    redirect("/Convocatorias/ConvocatoriasEstudiante");
  } else if (session.type_user == "employee") {
    redirect("/Convocatorias/ConvocatoriasAdmin");
  } else {
    redirect("/");
    // signOut();
  }

  return <div>Usuario no autenticado</div>;
}

export default ConvocatoriasPage;
