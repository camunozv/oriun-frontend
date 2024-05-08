"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useForm, useFieldArray, control} from "react-hook-form";
import Link from "next/link";

//Es donde verifico el inicio de seccion y donde coloco ruta dinaminca
//de aucerdo al id de la convocatoria
//tener en cuenta que debo poner aqui la verificacion del usuario si puede postularse o no segun
//numero de convocatorias postulado menor a dos, cumplir porcentaje  de avance, papa, estar matriculado
//obtener info del usuario para comparar con info de la convocatoria
//Convocatorias/ConvEstudi/postulacion128384 (api)
import React from 'react'


function VerPostulacionDatos({ params }) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/Convocatorias");
    },
  });

  const token = session?.access;
  const id = params.lambda;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      materias: [{ nombreunal: "", codigounal: 0, nombredestino: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "materias",
    control,
  });

  console.log(errors);


  return (
      <div className="p-10">
        <h1 className="px-6 text-black font-bold text-[35px]">
          Informacion de la Postulacion: {id}
        </h1>
        <br />
        <p className="text-2xl text-justify pl-8 pr-10">
          En esta sección se mostraran los datos diligenciados por el estudiante que realiza la postulación.
          En la siguiente sección se mostraran los documentos que el estudiante adjuntó a su solicitud.
        </p>
        <br/>
        <div>
        <Link href="\Convocatorias\ConvocatoriasAdmin\Postulaciones\VerPostulacionDocumentos">
            <button className={ "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2" }>
                  Revisar Documentos Adjuntos
            </button>
          </Link>
        </div>
        <br />
        <h1 className="text-black font-bold text-[25px] pl-6">
          Información de Contacto
        </h1>
        <br />

        {/**Contactos */}
        <div
          id="Contacts"
          className="px-6 py-3 grid grid-cols-3 justify-center items-center w-full gap-3"
        >
          <div className="flex flex-col justify-start items-left gap-1">
            <p className="font-bold">Nombre:</p>
            <div className="border border-gray-300 rounded-md p-2">formData.nombre</div>
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <p className="font-bold">Apellido:</p>
            <div className="border border-gray-300 rounded-md p-2">formData.apellido</div>
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <p className="font-bold">Email del Contacto:</p>
            <div className="border border-gray-300 rounded-md p-2">formData.emailcontacto</div>
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <p className="font-bold">Relación con el Estudiante:</p>
            <div className="border border-gray-300 rounded-md p-2">formData.relacion</div>
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <p className="font-bold">Teléfono:</p>
            <div className="border border-gray-300 rounded-md p-2">formData.telefono</div>
          </div>
        </div>



        <br />
        <h1 className="text-black font-bold text-[25px] pl-6">
          Información de Salud
        </h1>



        <br />
        <div
          id="Health information"
          className="px-6 py-3 grid grid-cols-3 justify-center items-center w-full gap-3"
        >
          <div className="flex flex-col justify-start items-left gap-1">
            <p className="font-bold">Medicinas:</p>
            <div className="border border-gray-300 rounded-md p-2">formData.medicinas</div>
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <p className="font-bold">Enfermedades:</p>
            <div className="border border-gray-300 rounded-md p-2">formData.enfermedades</div>
          </div>
        </div>




        <br />
        <h1 className="text-black font-bold text-[25px] pl-6">
          Información de la Movilidad
        </h1>

        <br />
        <div
          id="Call information"
          className="px-6 py-3 grid grid-cols-3 justify-center items-center w-full gap-3"
        >
          <div className="flex flex-col justify-start items-left gap-1">
            <p className="font-bold">Fecha de Inicio:</p>
            <div className="border border-gray-300 rounded-md p-2">formData.fechadeinicio</div>
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <p className="font-bold">Nombre Coordinador del Destino:</p>
            <div className="border border-gray-300 rounded-md p-2">formData.nombrecoordinadordestino</div>
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <p className="font-bold">Email Coordinador del Destino:</p>
            <div className="border border-gray-300 rounded-md p-2">formData.emailcoordinador</div>
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <p className="font-bold">Teléfono Coordinador del Destino:</p>
            <div className="border border-gray-300 rounded-md p-2">formData.telefonocoordinador</div>
          </div>
        </div>

        <br />
        <h1 className="text-black font-bold text-[25px] pl-6">
          Materias a ver
        </h1>

        <br />
        {fields.map((field, index) => {
          return (
            <section key={field.id}>
              <div className="px-6 py-3 grid grid-cols-4 justify-center items-center w-full gap-3">
                <div className="flex flex-col justify-start items-left gap-1">
                  <p className="font-bold">Nombre Unal:</p>
                  <div className="border border-gray-300 rounded-md p-2">formData.nombreunal</div>
                </div>
                <div className="flex flex-col justify-start items-left gap-1">
                  <p className="font-bold">Código Unal:</p>
                  <div className="border border-gray-300 rounded-md p-2">formData.codigounal</div>
                </div>
                <div className="flex flex-col justify-start items-left gap-1">
                  <p className="font-bold">Nombre Destino:</p>
                  <div className="border border-gray-300 rounded-md p-2">formData.nombredestino</div>
                </div>
              </div>
              <br />
            </section>
          );
        })}
        <br />


        
        <br />
          <div>
          <Link href="\Convocatorias\ConvocatoriasAdmin\Postulaciones\VerPostulacionDocumentos">
            <button
              type="submit"
              className={
                "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
              }
            >
              Continuar
            </button>
          </Link>
          </div>
        </div>
  );
}

export default VerPostulacionDatos