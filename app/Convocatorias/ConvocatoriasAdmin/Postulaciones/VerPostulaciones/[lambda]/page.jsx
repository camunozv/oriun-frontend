"use client";
import { adminApplications } from "@/app/api/ConvocatoriasAdmin/adminApplications";
import CardPostulacion from "@/components/ChooseWinner/CardPostulacion";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function VerPostulaciones({ params }) {

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const mySubmit = handleSubmit((data) => {
    if (!data.student_id) {
      data.student_id = null;
    }

    if (!data.state_documents) {
      data.state_documents = null;
    }
    adminApplications
      .getGeneralApplications(data.student_id, id, data.state_documents, token)
      .then((response) => {
        setApplcations(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
  });

  let Key = 0;

  if (!session) {
    return <div>{status} ...</div>;
  } else if (user_type === "student") {
    redirect("/Convocatorias");
  } else {
    return (
      <>
        <div className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 flex flex-col justify-center items-center w-full rounded-lg shadow-lg p-6">
          <form className="w-full" onSubmit={mySubmit}>
            <div className="w-full flex flex-col items-start justify-start gap-3">
              <label
                htmlFor="information_grid"
                className="font-semibold text-[20px] block"
              >
                A continuacion se muestran las postulaciones de la convocatoria
                seleccionada
              </label>
            </div>

            <div
              id="information_grid"
              className="p-6 grid grid-cols-3 justify-center items-center w-full gap-3"
            >
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="active" className="font-semibold">
                  Estado de la Postulación
                </label>
                <select
                  id="active"
                  className="border-gray-300 border rounded-md outline-none bg-white"
                  {...register("state_documents")}
                  placeholder="value 0"
                >
                  <option value="">Selección...</option>
                  <option value="0">Sin Revisar</option>
                  <option value="1">Pendiente de Modificacion</option>
                  <option value="2">Aceptado</option>
                </select>
              </div>

              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="student_id" className="font-semibold">
                  id Estudiante
                </label>
                <input
                  id="student_id"
                  type="text"
                  placeholder="código universidad /un número"
                  {...register("student_id")}
                  className="bg-white border-gray-300 border rounded-md outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full block font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            >
              Buscar
            </button>
          </form>
        </div>

        <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
          <div className="bg-white border-b-2 border-gray-400">
            <div className="flex justify-center items-center p-4">
              <div className="flex items-center mr-4">
                <p className="mr-2">No Revisado</p>
                <img
                  src="/images/CirculoGris.png"
                  alt="Círculo Gris"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex items-center mr-4">
                <p className="mr-2">Modificación solicitada</p>
                <img
                  src="/images/CirculoAmarillo.png"
                  alt="Círculo Amarillo"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex items-center mr-4">
                <p className="mr-2">Documentos aceptados</p>
                <img
                  src="/images/CirculoVerde.png"
                  alt="Círculo Verde"
                  className="w-12 h-12"
                />
              </div>
              <div className="flex items-center">
                <p className="mr-2">Modificación del Estudiante</p>
                <img
                  src="/images/CampanaRoja.png"
                  alt="Campana Roja"
                  className="w-12 h-12"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 w-full gap-6">
            {applications?.map((application, index) => (
              <CardPostulacion
                key={index}
                call_id={application.call}
                StudentId={application.student_id}
                major={application.student_major}
                StudentName={application.student_name}
                Country={application.university_country}
                EstadoConv={application.state_documents}
                University={application.university_name}

              />
            ))}
          </div>

          <div className="fixed bottom-0 right-0 p-4">
            
              <button className="w-full font-semibold bg-figma_blue border-2 rounded-2xl border-figma_blue text-white py-4 px-2">
                Ver Resultados Postulantes
              </button>
            
          </div>
        </main>
      </>
    );
  }
}
export default VerPostulaciones;
