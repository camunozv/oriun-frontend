import React from "react";
import Filter from "@/components/ConvsPage/Filter";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/credentials_options";
import { redirect } from "next/navigation";
import GridConvocatorias from "@/components/ConvsPage/GridConvocatorias";

async function ConvocatoriasAbiertasAdminPage() {
  // En esta parte debe ir el hook que realiza la petición a la api
  // en la parte donde están las CardConvocatorias debe ir un ciclo que recorra el
  // arreglo con los datos recibidos y renderize multiples card convocatorias.
  // Actualmente se probó con 6 componentes para ver como quedaba el maquetado.

  const session = await getServerSession(options);
  
  if (!session) {
    redirect("/Ingreso");
  }

  const token = session.access;
  
  return (
    <>
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
      <Filter token = {token}/>
        {/* <h1 className="text-[40px] font-bold">
          Conv grid in comments; endpoints pending to be implemented.
        </h1> */}
      </main>
    </>
  );
}

export default ConvocatoriasAbiertasAdminPage;
