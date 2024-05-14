import React from "react";
import Link from "next/link";

function ApplicationCard({
  call,
  university_name,
  university_country,
  state_documents,
  approved,
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
    finalState = "No aprobados";
  } else {
    finalState = "Aprobados";
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-xl p-6 w-full h-full">
        <h6 className="font-bold">{call}</h6>
        <div className="w-[95%] h-45 bg-figma_grey text-black rounded-lg">
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here
        </div>
        <p className="font-semibold">{university_name}</p>
        <p className="font-semibold">Estado de documentos: {finalState}</p>
        <div className="grid grid-cols-2 gap-3 p-1">
          <p className="font-semibold">País: {university_country}</p>
          <p className="font-semibold">Aprovado: {k}</p>
        </div>

        <div className="flex justify-between items-center w-96">
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
