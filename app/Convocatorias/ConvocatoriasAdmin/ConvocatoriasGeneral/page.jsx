"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import CardConvocatorias from "@/components/ConvsPage/CardConvocatorias";
import { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import { apiAdminFilterCalls } from "@/app/api/ConvocatoriasAdmin/adminFilterCalls";
import { apiAdminCalls } from "@/app/api/ConvocatoriasAdmin/adminGeneralCalls";

function ConvocatoriasGeneralAdminPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/Ingreso");
    },
  });
  const [my_calls, set_my_calls] = useState([]);
  const token = session?.access;

  // When the page charges, we will see all the opened calls with this use effect
  useEffect(() => {
    apiAdminCalls
      .getAdminAllCalls(token)
      .then((response) => set_my_calls(response.data))
      .then(() => console.log(my_calls))
      .catch((error) => console.log(error));
  }, [token]);

  const active = useRef();
  const university_id = useRef();
  const university_name = useRef();
  const deadline = useRef();
  const format = useRef();
  const study_level = useRef();
  const year = useRef();
  const semester = useRef();
  const region = useRef();
  const country = useRef();
  const language = useRef();

  async function handleFilterSumbit(event) {
    event.preventDefault();

    const call_active = active.current.value;
    const call_university_id = university_id.current.value;
    const call_university_name = university_name.current.value;
    const call_deadline = deadline.current.value;
    const call_format = format.current.value;
    const call_study_level = study_level.current.value;
    const call_year = year.current.value;
    const call_semester = semester.current.value;
    const call_region = region.current.value;
    const call_country = country.current.value;
    const call_language = language.current.value;

    try {
      const fetched_calls = await apiAdminFilterCalls.getAdminFilterCalls(
        call_active,
        call_university_id,
        call_university_name,
        call_deadline,
        call_format,
        call_study_level,
        call_year,
        call_semester,
        call_region,
        call_country,
        call_language,
        token
      );

      set_my_calls(fetched_calls.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!token) {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        {status}...
      </main>
    );
  } else {
    return (
      <>
        <div className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 flex flex-col justify-center items-center w-full rounded-lg shadow-lg p-6">
          <form onSubmit={handleFilterSumbit} className="w-full">
            {/** */}

            <div className="w-full flex flex-col items-start justify-start gap-3">
              <label
                htmlFor="information_grid"
                className="font-semibold text-[20px] block"
              >
                Buscar convocatorias.
              </label>
            </div>

            <div
              id="information_grid"
              className="p-6 grid grid-cols-3 justify-center items-center w-full gap-3"
            >
              {/**Active */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="active" className="font-semibold">
                  Estado
                </label>
                <select
                  ref={active}
                  id="active"
                  className="border-gray-300 border rounded-md outline-none bg-white"
                  placeholder="value 0"
                >
                  <option value="">Selección...</option>
                  <option value={true}>Abierta</option>
                  <option value={false}>Cerrada</option>
                </select>
              </div>

              {/**university_id */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="university_id" className="font-semibold">
                  id Universidad
                </label>
                <input
                  ref={university_id}
                  id="university_id"
                  type="text"
                  placeholder="código universidad /un número"
                  className="bg-white border-gray-300 border rounded-md outline-none"
                />
              </div>

              {/**university_name */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="univeristy_name" className="font-semibold">
                  Nombre Universidad
                </label>
                <input
                  ref={university_name}
                  id="university_name"
                  type="text"
                  placeholder="universidad de destino"
                  className="bg-white border-gray-300 border rounded-md outline-none"
                />
              </div>

              {/**deadline */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="deadline" className="font-semibold">
                  Cierre
                </label>
                <input
                  ref={deadline}
                  id="deadline"
                  type="date"
                  placeholder=""
                  className="bg-white border-gray-300 border rounded-md outline-none"
                />
              </div>

              {/**format */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="format" className="font-semibold">
                  Formato
                </label>
                <select
                  ref={format}
                  id="format"
                  className="border-gray-300 border rounded-md outline-none bg-white"
                  placeholder="value 0"
                >
                  <option value="">Selección...</option>
                  <option value="presencial">Presencial</option>
                  <option value="virtual">Virtual</option>
                  <option value="mixed">Híbrido</option>
                </select>
              </div>

              {/**study_level */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="study_level" className="font-semibold">
                  Nivel de Estudios
                </label>
                <select
                  ref={study_level}
                  id="study_level"
                  className="border-gray-300 border rounded-md outline-none bg-white"
                  placeholder="value 0"
                >
                  <option value="">Selección...</option>
                  <option value="pre_pregrado">Pregrado</option>
                  <option value="pos_postgrado">Maestría</option>
                  <option value="doc_doctorado">Doctorado</option>
                </select>
              </div>

              {/**year */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="year" className="font-semibold">
                  Año
                </label>
                <input
                  ref={year}
                  id="year"
                  type="text"
                  placeholder="año-semestre"
                  className="bg-white border-gray-300 border rounded-md outline-none"
                />
              </div>

              {/**semester */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="semester" className="font-semibold">
                  Semestre
                </label>
                <select
                  ref={semester}
                  id="semester"
                  className="border-gray-300 border rounded-md outline-none bg-white"
                  placeholder=""
                >
                  <option value="">Selección...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

              {/**Región */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="region" className="font-semibold">
                  Región
                </label>
                <select
                  ref={region}
                  id="region"
                  className="border-gray-300 border rounded-md outline-none bg-white"
                  placeholder=""
                >
                  <option value="">Selección...</option>
                  <option value="NA">Norte América</option>
                  <option value="LA">Latinoamérica</option>
                  <option value="EU">Europa</option>
                  <option value="OC">Oceanía</option>
                  <option value="AN">Uniandes</option>
                  <option value="SG">Convenio Sigueme/Nacional</option>
                </select>
              </div>

              {/**Country */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="country" className="font-semibold">
                  País
                </label>
                <input
                  ref={country}
                  id="country"
                  type="text"
                  placeholder="País"
                  className="border-gray-300 border rounded-md outline-none"
                />
              </div>

              {/**language */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="language" className="font-semibold">
                  Idioma
                </label>

                <select
                  ref={language}
                  id="language"
                  className="border-gray-300 border rounded-md outline-none bg-white"
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
            </div>

            {/** */}

            <button
              type="submit"
              className="w-full block font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            >
              Buscar
            </button>
          </form>
        </div>

        <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
          <div className="grid grid-cols-3 w-full gap-6">
            {my_calls?.map((call) => (
              <CardConvocatorias
                key={call.id}
                id={call.id}
                semester={call.semester}
                year={call.year}
                language={call.language}
                admin={true}
                study_level={call.study_level}
              />
            ))}
          </div>
        </main>
      </>
    );
  }
}

export default ConvocatoriasGeneralAdminPage;

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

// const conv_universidad_request = conv_universidad.replace(/ /g, "%20");
// console.log(conv_universidad_request);
