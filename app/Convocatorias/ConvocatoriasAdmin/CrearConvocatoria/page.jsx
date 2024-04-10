import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "@/app/api/auth/[...nextauth]/credentials_options";
import CreationFormConvocatorias from "@/components/ConvsPage/CreationFormConvocatorias";

async function CrearConvocatoria() {

  const session = await getServerSession(options);
  if (!session) {
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
