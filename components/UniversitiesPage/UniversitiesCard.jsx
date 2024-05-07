
import Link from "next/link";
import React from "react";

function UniversitiesCard({id, name, webpage, region, country, city, academic_offer, exchange_info}) {

    // This component is intended to render an initial overview of the universities.
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-xl p-6 w-full h-full">
        <h6 className="font-bold">{id}</h6>
        <div className="w-[95%] h-45 bg-figma_grey text-black rounded-lg">
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here
        </div>

        <p className="font-semibold">
          {name} - {country}
        </p>
        <p className="font-semibold">{city}</p>
        <p className="font-semibold">{region}</p>
        <p className="font-semibold">Página web.</p>
        <p className="font-semibold">Oferta académica.</p>
        <p className="font-semibold">Información de intercambio</p>

        <div className="flex justify-between items-center w-96">
          <div className="w-full p-2">
            <Link href={`/Convocatorias/ConvocatoriasAdmin/${id}`}>
              <button
                type="button"
                className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-2"
              >
                Actualizar
              </button>
            </Link>
          </div>
          <div className="w-full p-2">
            <Link
              href={`/Convocatorias/ConvocatoriasAdmin/DetallesConvocatoria/${id}`}
            >
              <button
                type="button"
                className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-2"
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

export default UniversitiesCard;
