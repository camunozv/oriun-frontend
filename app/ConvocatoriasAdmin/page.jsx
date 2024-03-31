// "use client";
import React from "react";
import CardConvocatorias from "@/components/ConvsPage/CardConvocatorias";
import Filter from "@/components/ConvsPage/Filter";
import { getCalls } from "@/lib/calls";
import GridConvocatorias from "@/components/ConvsPage/GridConvocatorias";

async function ConvocatoriasAdminPage() {
  // En esta parte debe ir el hook que realiza la petición a la api
  // en la parte donde están las CardConvocatorias debe ir un ciclo que recorra el
  // arreglo con los datos recibidos y renderize multiples card convocatorias.
  // Actualmente se probó con 6 componentes para ver como quedaba el maquetado.

  const calls = await getCalls();
   

  return (
    <>
      <Filter />
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <GridConvocatorias calls={calls} admin={true}/>
      </main>
    </>
  );
}

export default ConvocatoriasAdminPage;
