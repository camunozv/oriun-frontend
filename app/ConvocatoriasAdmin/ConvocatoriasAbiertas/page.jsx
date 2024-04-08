"use client";
import React from "react";
import { redirect } from "next/navigation";
import CardConvocatorias from "@/components/ConvsPage/CardConvocatorias";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";

function ConvocatoriasAbiertasAdminPage() {
  // En esta parte debe ir el hook que realiza la petición a la api
  // en la parte donde están las CardConvocatorias debe ir un ciclo que recorra el
  // arreglo con los datos recibidos y renderize multiples card convocatorias.
  // Actualmente se probó con 6 componentes para ver como quedaba el maquetado.

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/Ingreso");
    },
  });

  const [my_calls, set_my_calls] = useState([]);

  if (status == "loading") {
    return <div>loading...</div>;
  }

  // useEffect(() => {
  //   apiFilterOpenCalls.getFilterOpenCalls();
  // }, []);

  const token = session.access;
  console.log(token);

  const convocatoria_pais = useRef();
  const convocatoria_idioma = useRef();
  const convocatoria_universidad = useRef();

  async function handleFilterSumbit(event) {
    event.preventDefault();

    // const conv_nombre = convocatoria_nombre.current.value;
    const conv_pais = convocatoria_pais.current.value;
    const conv_idioma = convocatoria_idioma.current.value;
    const conv_universidad = convocatoria_universidad.current.value;

    // console.log(conv_nombre);
    console.log(conv_pais);
    console.log(conv_idioma);
    console.log(conv_universidad);
    /**
     * 987654321carlos */

    const params = new URLSearchParams({
      university_name: conv_universidad,
      country: conv_pais,
      language: conv_idioma,
    });

    fetch(`http://127.0.0.1:8000/call/open/${params}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Eroorrr");
        }

        set_my_calls(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <form
        onSubmit={handleFilterSumbit}
        className="overflow-hidden flex items-center justify-between mx-auto max-w-[1580px] max-h-[1024px] border-2 border-gray-10 p-5 shadow-lg rounded-xl"
      >
        <h2 className="block font-bold">Buscar Convocatorias:</h2>
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
        {/* <Filter token={token} />
        {/* <h1 className="text-[40px] font-bold">
          Conv grid in comments; endpoints pending to be implemented.
        </h1> */}

        <div className="grid grid-cols-3 w-full gap-6">
          {my_calls?.map((call) => (
            <CardConvocatorias
              key={call.university_name}
              admin={admin}
              id={call.university_name}
              available_slots={call.language}
              description={call.deadline}
              university_id={call.university_name}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default ConvocatoriasAbiertasAdminPage;
