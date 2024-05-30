"use client";
import { adminApplications } from "@/app/api/ConvocatoriasAdmin/adminApplications";
import CardEstudiante from "./CardEstudiante";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";

function ResultadosPostulantes({ params }) {
  const [applications, setApplcations] = useState([]);

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  const token = session?.access;
  const user_type = session?.type_user;
  const id = params.lambda;

  useEffect(() => {
    adminApplications
      .getGeneralApplications(null, id, null, token)
      .then((response) => {
        setApplcations(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  if (!session) {
    return <div>{status} ...</div>;
  } else if (user_type === "student") {
    redirect("/Convocatorias");
  } else {
    return (
      <>
        <div className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 flex flex-col justify-center items-center w-full rounded-lg shadow-lg p-6">
          <div className="w-full flex flex-col items-start justify-start gap-3">
            <label
              htmlFor="information_grid"
              className="font text-[20px] block"
            >
              En esta sección se muestran las postulaciones de la convocatoria,
              con el siguiente menu podra filtrar las postulaciones por el
              parametro que se necesite para seleccionar los ganadores.
            </label>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-300 rounded-xl shadow-sm">
            <span className="text-black font-bold px-5">Ordene por:</span>
            <div className="flex gap-2">
              <button
                type="button"
                className="flex transition-all items-center justify-center gap-3 border-2 rounded-full  py-2 font-semibold bg-blue-600 border-blue-600 text-white px-5 mx-2 hover:text-figma_blue hover:bg-white"
              >
                General
              </button>

              <button
                type="button"
                className="flex transition-all items-center justify-center gap-3 border-2 rounded-full  py-2 font-semibold bg-blue-600 border-blue-600 text-white px-5 mx-2 hover:text-figma_blue hover:bg-white"
              >
                Estado docs
              </button>

              <button
                type="button"
                className="flex transition-all items-center justify-center gap-3 border-2 rounded-full  py-2 font-semibold bg-blue-600 border-blue-600 text-white px-5 mx-2 hover:text-figma_blue hover:bg-white"
              >
                PAPA
              </button>

              <button
                type="button"
                className="flex transition-all items-center justify-center gap-3 border-2 rounded-full  py-2 font-semibold bg-blue-600 border-blue-600 text-white px-5 mx-2 hover:text-figma_blue hover:bg-white"
              >
                Avance
              </button>

              <button
                type="button"
                className="flex transition-all items-center justify-center gap-3 border-2 rounded-full  py-2 font-semibold bg-blue-600 border-blue-600 text-white px-5 mx-2 hover:text-figma_blue hover:bg-white"
              >
                Idioma
              </button>

              <button
                type="button"
                className="flex transition-all items-center justify-center gap-3 border-2 rounded-full  py-2 font-semibold bg-blue-600 border-blue-600 text-white px-5 mx-2 hover:text-figma_blue hover:bg-white"
              >
                PBM
              </button>
            </div>
          </div>
        </div>

        <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
          <CardEstudiante
            idEstudiante="ID Estudiante"
            nombreEstudiante="Nombre Estudiante"
            papa="PAPA"
            avance="Avance"
            sedes="Sedes"
            idioma="Idioma"
            pbm="PBM"
          />
          <CardEstudiante
            idEstudiante="ID Estudiante"
            nombreEstudiante="Nombre Estudiante"
            papa="PAPA"
            avance="Avance"
            sedes="Sedes"
            idioma="Idioma"
            pbm="PBM"
          />
          <CardEstudiante
            idEstudiante="ID Estudiante"
            nombreEstudiante="Nombre Estudiante"
            papa="PAPA"
            avance="Avance"
            sedes="Sedes"
            idioma="Idioma"
            pbm="PBM"
          />
          <CardEstudiante
            idEstudiante="ID Estudiante"
            nombreEstudiante="Nombre Estudiante"
            papa="PAPA"
            avance="Avance"
            sedes="Sedes"
            idioma="Idioma"
            pbm="PBM"
          />
          <CardEstudiante
            idEstudiante="ID Estudiante"
            nombreEstudiante="Nombre Estudiante"
            papa="PAPA"
            avance="Avance"
            sedes="Sedes"
            idioma="Idioma"
            pbm="PBM"
          />
          <CardEstudiante
            idEstudiante="ID Estudiante"
            nombreEstudiante="Nombre Estudiante"
            papa="PAPA"
            avance="Avance"
            sedes="Sedes"
            idioma="Idioma"
            pbm="PBM"
          />
          <div className="flex">
            <button
              type="button"
              className="flex-1 mr-2 font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            >
              Volver
            </button>

            <button
              type="button"
              className="flex-1 ml-2 font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            >
              Guardar y volver
            </button>
          </div>
        </main>
      </>
    );
  }
}
export default ResultadosPostulantes;
