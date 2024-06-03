import Link from "next/link";
import React from "react";

function UniversitiesCard({
  id,
  name,
  webpage,
  region,
  country,
  city,
  academic_offer,
  exchange_info,
  imageLink
}) {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-xl p-6 w-full h-full">
        <h6 className="font-bold">{id}</h6>
        <img
          className="w-[95%] h-45 w-45 rounded-md border-2 border-grey-1000"
          src={imageLink}
          alt="flag"
        ></img>

        <p className="font-semibold">
          {name} - {country}
        </p>
        <div className="grid grid-cols-2 gap-3 p-4">
          <p className="font-semibold">{city}</p>
          <p className="font-semibold">{region}</p>
          <Link href={`${webpage}`} target="_blank">
            <p className="font-semibold underline">Página web.</p>
          </Link>
          <Link href={`${academic_offer}`} target="_blank">
            <p className="font-semibold underline">Oferta académica.</p>
          </Link>
          <Link href={`${exchange_info}`} target="_blank">
            <p className="font-semibold underline">
              Información de intercambio
            </p>
          </Link>
        </div>

        <div className="flex justify-between items-center w-96">
          <div className="w-full p-2">
            <Link href={`/Universidades/${id}`}>
              <button
                type="button"
                className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-2"
              >
                Actualizar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UniversitiesCard;
