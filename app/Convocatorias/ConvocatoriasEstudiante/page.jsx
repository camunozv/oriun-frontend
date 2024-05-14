import { options } from "@/app/api/auth/[...nextauth]/credentials_options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

async function ConvocatoriasEstudiantePage() {
  const session = await getServerSession(options);
  const user_type = session?.type_user;

  if (user_type === "employee") {
    redirect("/Convocatorias");
  } else {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <h1 className="text-[40px] font-bold">
          ¡Bienvenido querido Estudiante!
        </h1>
        <h2 className="text-[20px]">
          Click en los links de arriba para usar la aplicación.
        </h2>
      </main>
    );
  }
}

export default ConvocatoriasEstudiantePage;
