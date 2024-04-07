import React from "react";
import CreationFormConvocatorias from "@/components/ConvsPage/CreationFormConvocatorias";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/credentials_options";

async function CrearConvocatoria() {
  try {
    const session = await getServerSession(options);

    if (!session) {
      redirect("/Ingreso");
    }
  } catch (error) {
    console.log(error);
    console.log('Error de sesion en crear convocatoria admin.');
    redirect("/Ingreso");
  }
  return (
    <>
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <CreationFormConvocatorias />
      </main>
    </>
  );
}

export default CrearConvocatoria;
