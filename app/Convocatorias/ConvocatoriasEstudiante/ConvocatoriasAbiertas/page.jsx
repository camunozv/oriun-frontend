"use client";
// Main dependencies
import React from "react";
import { redirect } from "next/navigation";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { apiFilterOpenCalls } from "@/app/api/ConvocatoriasEstudiante/filterOpenCalls";

// Imported components
import CardConvocatorias from "@/components/ConvsPage/CardConvocatorias";

function ConvocatoriasAbiertasEstudiantePage() {
  // UseSession allows accessing user data retrived by JWT in a client component.
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/Ingreso");
    },
  });

  if (!session) {
    const [available_calls, set_available_calls] = useState([]);
    const convocatoria_pais = useRef();
    const convocatoria_idioma = useRef();
    const convocatoria_universidad = useRef();
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        {status}...
      </main>
    );
  }

  const [available_calls, set_available_calls] = useState([]);
  const token = session.access;

  const convocatoria_pais = useRef();
  const convocatoria_idioma = useRef();
  const convocatoria_universidad = useRef();

  async function handleFilterSumbit(event) {
    event.preventDefault();

    const conv_pais = convocatoria_pais.current.value;
    const conv_idioma = convocatoria_idioma.current.value;
    let conv_universidad = convocatoria_universidad.current.value;

    try {
      const fetched_calls = await apiFilterOpenCalls.getFilterOpenCalls(
        conv_pais,
        conv_idioma,
        conv_universidad,
        token
      );
      // console.log(fetched_calls, "Student open calls");
      set_available_calls(fetched_calls.data);
    } catch (error) {
      console.log(error, "Error while fetching student open calls");
    }
  }

  return (
    <>
      <form
        onSubmit={handleFilterSumbit}
        className="overflow-hidden flex items-center justify-between mx-auto max-w-[1580px] max-h-[1024px] border-2 border-gray-10 p-5 shadow-lg rounded-xl"
      >
        <h2 className="block font-bold">Buscar Convocatorias Abiertas:</h2>
        <div className="flex items-center justify-between gap-3">
          <input
            ref={convocatoria_pais}
            type="text"
            placeholder="País"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
          />

          <input
            ref={convocatoria_idioma}
            type="text"
            placeholder="Idioma"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
          />
          <input
            ref={convocatoria_universidad}
            type="text"
            placeholder="Nombre universidad"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
          />
        </div>

        <div className="w-40">
          <button
            type="submit"
            className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
          >
            Filtrar
          </button>
        </div>
      </form>

      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <div className="grid grid-cols-3 w-full gap-6">
          {available_calls?.map((call) => (
            <CardConvocatorias
              id={call.id}
              admin={false}
              university_name={call.university_name}
              language={call.language}
              country={call.country}
              deadline={call.deadline}
              open="Abiertas"
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default ConvocatoriasAbiertasEstudiantePage;
