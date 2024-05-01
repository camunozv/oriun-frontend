"use client";

import React from 'react'
import Link from "next/link";

function CardPostulacion({
  // Aqui se agregan las variables necesarias para la carta de postulacion.
  // students open & closed
 //* shared characteristics

  // admin open & closed

}) {
    return (
      <>
        <div className="flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-xl p-6 w-full h-full">
          <h6 className="font-bold">Conv No. 0001-2024</h6>
          <div className="w-[95%] h-45 bg-figma_grey text-black rounded-lg">
            Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag
            Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
            Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag
            Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
            Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag
            Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
            Flag Here Flag Here Flag Here Flag Here Flag Here
          </div>

          <p className="font-semibold">
            ID Estudiante
          </p>
          <p className="font-semibold">Nombre Estudiante</p>
          <p className="font-semibold">Nombre Universidad</p>
          <p className="font-semibold">País</p>

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
                <button
                  type="button"
                  className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-4"
                >
                  Ver Detalles
                </button>
            </div>
          </div>
        </div>
      </>
    );
  }

export default CardPostulacion