import React from "react";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/credentials_options";
import { redirect } from "next/navigation";

async function ConvocatoriasPage() {
  const session = await getServerSession(options);

  console.log(session.type_user, 'my user type')
  if (!session) {
    <div>debe ingresar para inciciar uso</div>;
  } else if (session.type_user == "student") {
    redirect("/Convocatorias/ConvocatoriasEstudiante");
  } else {
    redirect("/Convocatorias/ConvocatoriasAdmin");
  }

  return <div>Usuario no autenticado</div>;
}

export default ConvocatoriasPage;
