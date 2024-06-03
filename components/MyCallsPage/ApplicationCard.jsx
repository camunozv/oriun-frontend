import React from "react";
import Link from "next/link";
import Image from "next/image";

function ApplicationCard({
  call,
  university_name,
  university_country,
  state_documents,
  approved,
  imageLink
}) {
  let k = approved;
  if (k === false) {
    k = "NO";
  } else {
    k = "SI";
  }

  let finalState = state_documents;

  if (finalState === 0) {
    finalState = "Sin revisar";
  } else if (finalState === 1) {
    finalState = "Modificaciones solicitadas";
  } else {
    finalState = "Aprobados";
  }

  let StateAprove="Revision";
  let imagenSrc;
  switch (StateAprove) {
    case "Aprobados":
      imagenSrc = "/images/Aprobada.jpeg";
      break;
    case "No aprobado":
      imagenSrc = "/images/NoAprobada.jpeg";
     
      break;
    case "Modificaciones Solicitadas":
      imagenSrc = "/images/ModificacionSolicitada.jpeg";
      break;
    default:
      imagenSrc = "/images/Pendiente.jpeg"; // Por defecto, mostrar pendientes revision
      break;
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-xl p-6 w-full h-full">
        <div className="relative flex justify-center items-center flex-col gap-3 bg-white -lg rounded-xl p-6 w-full h-full">
            <h6 className="font-bold">{call}</h6>
            <img
              src={imagenSrc} // Reemplaza esta ruta con la ruta de tu imagen
              alt="Logo"
              className="absolute top-0 right-0 w-12 h-12" // Estilos para posicionar la imagen en la esquina superior derecha
            />
        </div>
        <img
          className="w-[95%] h-45 w-45 rounded-md border-2 border-grey-1000"
          src={imageLink}
          alt="flag"
        ></img>
        <p className="font-semibold">{university_name}</p>
        <p className="font-semibold">Estado de documentos: {finalState}</p>
        <div className="grid grid-cols-2 gap-3 p-1">
          <p className="font-semibold">País: {university_country}</p>
          <p className="font-semibold">Aprobado: {k}</p>
        </div>

        <div className="flex justify-between items-center w-96">
        <div className="w-full p-2">
            <Link href={`/Convocatorias/ConvocatoriasEstudiante/MisConvocatorias/Resultados/${call}`}>
              <button
                type="button"
                className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-2"
              >
                Resultados
              </button>
            </Link>
          </div>
          <div className="w-full p-2">
            <Link
              href={`/Convocatorias/ConvocatoriasEstudiante/MisConvocatorias/${call}`}
            >
              <button
                type="button"
                className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-2"
              >
                Revisar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplicationCard;
