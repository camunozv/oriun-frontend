"use client"; // MODULE COMPLETED
// Main dependencies
import React, { useEffect } from "react";
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
      redirect("/api/auth/signin");
    },
  });

  const token = session?.access;
  const user_type = session?.type_user;

  const [available_calls, set_available_calls] = useState([]);
  const convocatoria_pais = useRef();
  const convocatoria_idioma = useRef();
  const convocatoria_universidad = useRef();

  async function handleFilterSumbit(event) {
    event.preventDefault();

    const conv_pais = convocatoria_pais.current.value;
    const conv_idioma = convocatoria_idioma.current.value;
    const conv_universidad = convocatoria_universidad.current.value;

    try {
      const fetched_calls = await apiFilterOpenCalls.getFilterOpenCalls(
        conv_pais,
        conv_idioma,
        conv_universidad,
        token
      );
      set_available_calls(fetched_calls.data);
      console.log(available_calls)

      if (available_calls.length() === 0) {
        alert(
          "ninguna convocatoria abierta durante el momento con los filtros ingresados, y que se tiene que estar pendiende de los correos de la ORI y la DRE para saber cuando saldrá alguna."
        );
      }
    } catch (error) {
      console.log(error, "Error while fetching student open calls");
    }
  }

  useEffect(() => {
    apiFilterOpenCalls
      .getFilterOpenCalls(null, null, null, token)
      .then((response) => {
        set_available_calls(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  if (!token) {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        {status}...
      </main>
    );
  } else if (user_type === "employee") {
    redirect("/Convocatorias");
  } else {
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
            {available_calls?.map((call) => (
              <CardConvocatorias
                key={call.id}
                imageLink={call.flag_image_url}
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
}

export default ConvocatoriasAbiertasEstudiantePage;
