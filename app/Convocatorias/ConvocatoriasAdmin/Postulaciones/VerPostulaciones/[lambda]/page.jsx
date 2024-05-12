"use client";

//import CardPostulation from '@/components/ChooseWinners/CardPostulation';
import { adminPostulacion } from "@/app/api/ConvocatoriasAdmin/Postulaciones/CardPostulacion";
import CardPostulacion from "@/components/ChooseWinner/CardPostulacion";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react"


function VerPostulaciones({ params }) {
  // Pendiente: Agregar protección de ruta.

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  const token = session?.access;
  const id = params.lambda;

  useEffect(() => {
    adminPostulacion
      .getPostulacionGeneral(null, id, null, token)
      .then((response) => {
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
    console.log(data);
    

    if(!data.student_id){
      data.student_id= null
    }

    if(!data.state_documents){
      data.state_documents= null
    }
    adminPostulacion
      .getPostulacionGeneral(data.student_id, id, data.state_documents, token)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
  });


  if (!session) {
    return(
      <div>{status} ...</div>
    );
  } else {
    return (
      <>
        <div className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 flex flex-col justify-center items-center w-full rounded-lg shadow-lg p-6">
          <form className="w-full" onSubmit={mySubmit}>
            {/** */}

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
              {/**Active */}
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

              {/*Id Estudiante */}
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

              {/*

            
            <div className="flex flex-col justify-start items-left gap-1">
              <label htmlFor="deadline" className="font-semibold">
                Fecha de Postulación
              </label>
              <input
                id="deadline"
                type="date"
                placeholder=""
                className="bg-white border-gray-300 border rounded-md outline-none"
              />
            </div>

           
            <div className="flex flex-col justify-start items-left gap-1">
              <label htmlFor="study_level" className="font-semibold">
                Nivel de Estudios
              </label>
              <select
                id="study_level"
                className="border-gray-300 border rounded-md outline-none bg-white"
                placeholder="value 0"
              >
                <option value="">Selección...</option>
                <option value="PRE">Pregrado</option>
                <option value="POS">Maestría</option>
                <option value="DOC">Doctorado</option>
              </select>
            </div>

            
            <div className="flex flex-col justify-start items-left gap-1">
              <label htmlFor="year" className="font-semibold">
                Año de la movilidad
              </label>
              <input
                id="year"
                type="text"
                placeholder="año-semestre"
                className="bg-white border-gray-300 border rounded-md outline-none"
              />
            </div>

            
            <div className="flex flex-col justify-start items-left gap-1">
              <label htmlFor="semester" className="font-semibold">
                Semestre de la movilidad
              </label>
              <select
                id="semester"
                className="border-gray-300 border rounded-md outline-none bg-white"
                placeholder=""
              >
                <option value="">Selección...</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            */}
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
            <CardPostulacion EstadoConv={1}></CardPostulacion>

            <CardPostulacion EstadoConv={2}></CardPostulacion>

            <CardPostulacion EstadoConv={3}></CardPostulacion>

            <CardPostulacion EstadoConv={4}></CardPostulacion>
          </div>


          {/*
          <div className="fixed bottom-0 right-0 p-4">
            <button className="w-full font-semibold bg-figma_blue border-2 rounded-2xl border-figma_blue text-white py-4 px-2">
              Ver Resultados Postulantes
            </button>
          </div>
          */}
        </main>
      </>
    );
  }
}
export default VerPostulaciones;
