"use client";
import React from "react";
import { redirect } from "next/navigation";
import CardConvocatorias from "@/components/ConvsPage/CardConvocatorias";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { apiFilterClosedCalls } from "@/app/api/ConvocatoriasEstudiante/filterClosedCalls";

function ConvocatoriasCerradasEstudiantePage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/Ingreso");
    },
  });

  if (!session) {
    const [my_calls, set_my_calls] = useState([]);
    const convocatoria_pais = useRef();
    const convocatoria_idioma = useRef();
    const convocatoria_universidad = useRef();
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        {status}...
      </main>
    );
  }

  const [my_calls, set_my_calls] = useState([]);
  const token = session.access;

  const convocatoria_pais = useRef();
  const convocatoria_idioma = useRef();
  const convocatoria_universidad = useRef();

  async function handleFilterSumbit(event) {
    event.preventDefault();

    const conv_pais = convocatoria_pais.current.value;
    const conv_idioma = convocatoria_idioma.current.value;
    const conv_universidad = convocatoria_universidad.current.value;

    try {
      const fetched_calls = await apiFilterClosedCalls.getFilterClosedCalls(
        conv_pais,
        conv_idioma,
        conv_universidad,
        token
      );

      set_my_calls(fetched_calls.data);
    } catch (error) {
      console.log(error);
    }
    // const conv_universidad_request = conv_universidad.replace(/ /g, "%20");
    // console.log(conv_universidad_request);
  }

  return (
    <>
      <form
        onSubmit={handleFilterSumbit}
        className="overflow-hidden flex items-center justify-between mx-auto max-w-[1580px] max-h-[1024px] border-2 border-gray-10 p-5 shadow-lg rounded-xl"
      >
        <h2 className="block font-bold">Buscar Convocatorias Cerradas:</h2>
        <div className="flex items-center justify-between gap-3">
          <input
            ref={convocatoria_pais}
            type="text"
            placeholder="País"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
          />

          <input
            ref={convocatoria_universidad}
            type="text"
            placeholder="Nombre universidad"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
          />

          <select
            ref={convocatoria_idioma}
            id="language"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1 bg-white"
            placeholder=""
          >
            <option value="">Selección...</option>
            <option value="en">Inglés</option>
            <option value="es">Español</option>
            <option value="fr">Francés</option>
            <option value="pt">Portugués</option>
            <option value="de">Alemán</option>
            <option value="it">Italiano</option>
            <option value="ko">Coreano</option>
            <option value="ru">Ruso</option>
            <option value="zh">Chino</option>
            <option value="xx">Otro</option>
          </select>
        </div>

        <div className="w-40">
          <button
            type="submit"
            className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
          >
            Buscar
          </button>
        </div>
      </form>

      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <div className="grid grid-cols-3 w-full gap-6">
          {my_calls?.map((call) => (
            <CardConvocatorias
              id={call.id}
              admin={false}
              university_name={call.university_name}
              language={call.language}
              country={call.country}
              deadline={call.deadline}
              open="Cerradas"
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default ConvocatoriasCerradasEstudiantePage;
