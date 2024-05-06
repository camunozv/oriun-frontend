"use client";

import React from 'react'
import Link from "next/link";
import Image from 'next/image';

function CardPostulacion({
  // Aqui se agregan las variables necesarias para la carta de postulacion.
  EstadoConv,

  // students open & closed
 //* shared characteristics

  // admin open & closed

}) {  let imagenSrc;

  switch (EstadoConv) {
    case 1:
      imagenSrc = "/images/CirculoGris.png";
      break;
    case 2:
      imagenSrc = "/images/CirculoAmarillo.png";
      break;
    case 3:
      imagenSrc = "/images/CirculoVerde.png";
      break;
    case 4:
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
            <h6 className="font-bold">Conv No. 0001-2024</h6>

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
}

export default CardPostulacion