import React from "react";
import Filter from "@/components/ConvsPage/Filter";
import GridConvocatorias from "@/components/ConvsPage/GridConvocatorias";

// async function shareMeal({ formData }) {
// "use-server"; // This creates a soggneante "server-action". Which is a function guaranteed to funciton on the server.
// also async keyword must be added to guarantee it's a server action
// & only there.

// the form submission will be guaranteed to occur in the server side.kf
//   const meals = {
//     title: formData.get("title"),
//     name: formData.get("name"),
//   };
// }

async function ConvocatoriasEstudiantePage() {
  // const calls = await getCalls();

  return (
    <>
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <h1 className="text-[40px] font-bold">
          ¡Bienvenido querido Estudiante!
        </h1>
        <h2 className="text-[20px]">
          Click en los links de arriba para empezar a consultar.
        </h2>
        <h2 className="text-[20px]">
          El módulo de mis convocatorias aún se encuentra en desarrollo.
        </h2>
      </main>
    </>
  );
}

export default ConvocatoriasEstudiantePage;
