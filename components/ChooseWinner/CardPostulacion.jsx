"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

function CardPostulacion({
  call_id,
  EstadoConv,
  StudentName,
  StudentId,
  Country,
  University,
  major,
}) {
  let imagenSrc;

  switch (EstadoConv) {
    case "Documentos no revisados":
      imagenSrc = "/images/CirculoGris.png";
      break;
    case "Modificación de los documentos solicitada":
      imagenSrc = "/images/CirculoAmarillo.png";
      break;
    case "Documentos aprobados":
      imagenSrc = "/images/CirculoVerde.png";
      break;
    case "Modificado por estudiante":
      imagenSrc = "/images/CampanaRoja.png";
      break;
    default:
      imagenSrc = "/images/CirculoRojo.png"; // Por defecto, mostrar la primera imagen
      break;
  }
  {
    return (
      <>
        <div className="flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-xl p-6 w-full h-full">
          <div className="relative flex justify-center items-center flex-col gap-3 bg-white -lg rounded-xl p-6 w-full h-full">
            <h6 className="font-bold">Conv No. {call_id}</h6>

            {/* Agrega la imagen en la esquina superior derecha 
            <div className="absolute top-0 right-0 w-12 h-12">
              <Image src="/images/CirculoVerde.png" width={50} height={50} alt="Logo" />
            </div>           
            El metodo de abajo tiene una mejor calidad de imagen*/}

            <img
              src={imagenSrc} // Reemplaza esta ruta con la ruta de tu imagen
              alt="Logo"
              className="absolute top-0 right-0 w-12 h-12" // Estilos para posicionar la imagen en la esquina superior derecha
            />
          </div>

          <div className="w-[95%] h-45 bg-figma_grey text-black rounded-lg">
            Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag
            Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
            Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag
            Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
            Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag
            Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
            Flag Here Flag Here Flag Here Flag Here Flag Here
          </div>

          <p className="font-semibold">{StudentId}</p>
          <p className="font-semibold">
            {StudentName} - {major}
          </p>
          <p className="font-semibold">{University}</p>
          <p className="font-semibold">{Country}</p>

          <div className="flex justify-between items-center w-96">
            <div className="w-full p-2">
              <button
                type="button"
                className="w-full text-base font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-1"
              >
                Seleccionar como Ganador
              </button>
            </div>
            <div className="w-full p-2">
              <Link
                href={`/Convocatorias/ConvocatoriasAdmin/Postulaciones/VerPostulacionDocumentos/${call_id}/${StudentId}`}
              >
                <button
                  type="button"
                  className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-4"
                >
                  Ver detalles
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardPostulacion;
