"use client";
import React from "react";
import { redirect } from "next/navigation";
import CardConvocatorias from "@/components/ConvsPage/CardConvocatorias";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { apiFilterOpenCalls } from "@/app/api/Convocatorias/filterOpenCalls";

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
    return <div>{status}</div>;
  }

  const [my_calls, set_my_calls] = useState([]);
  const token = session.access;
  console.log(token);

  const convocatoria_pais = useRef();
  const convocatoria_idioma = useRef();
  const convocatoria_universidad = useRef();

  async function handleFilterSumbit(event) {
    event.preventDefault();

    const conv_pais = convocatoria_pais.current.value;
    const conv_idioma = convocatoria_idioma.current.value;
    let conv_universidad = convocatoria_universidad.current.value;

    try {
      const callz = await apiFilterOpenCalls.getFilterOpenCalls(
        conv_pais,
        conv_idioma,
        conv_universidad,
        token
      );
      console.log(callz, "axios calls");
      set_my_calls(callz.data);
    } catch (error) {
      console.log(error);
    }

    const conv_universidad_request = conv_universidad.replace(/ /g, "%20");
    console.log(conv_universidad_request);
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
        {/* <GridConvocatorias admin={true} calls={my_calls}/> */}

        <div className="grid grid-cols-3 w-full gap-6">
          {my_calls?.map((call) => (
            <CardConvocatorias
              key={call.university_name}
              admin={true}
              id={call.university_name}
              available_slots={call.university_name}
              description={call.language}
              university_id={call.country}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default ConvocatoriasCerradasEstudiantePage;

// En esta parte debe ir el hook que realiza la petición a la api
// en la parte donde están las CardConvocatorias debe ir un ciclo que recorra el
// arreglo con los datos recibidos y renderize multiples card convocatorias.
// Actualmente se probó con 6 componentes para ver como quedaba el maquetado.

// fetch(`http://127.0.0.1:8000/call/open/${params}`, {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${token}`,
//   },
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Eroorrr");
//     }

//     set_my_calls(response.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// try {
//   const callz = await apiFilterOpenCalls.getFilterOpenCalls(
//     conv_pais,
//     conv_idioma,
//     conv_universidad
//   );
//   set_my_calls(callz);
// } catch (error) {
//   console.log(error);
// }

// console.log(params);

// const myHeaders = new Headers();
// myHeaders.append("Authorization", `Bearer ${token}`);

// const requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow",
// };

// const fetchUrl = "http://127.0.0.1:8000/";

// fetch(`${fetchUrl}/call/open/${params}`, requestOptions)
//   .then((response) => response.json())
//   .then((result) => set_my_calls(result))
//   .catch((error) => console.error(error));
