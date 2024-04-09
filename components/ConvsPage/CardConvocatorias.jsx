"use client";
import React, { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";

function CardConvocatorias({
  id,
  admin,
  university_name,
  country,
  language,
  deadline,
  open,
}) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  if (admin === true) {
    return (
      <>
        <Modal
          isVisible={isVisibleModal}
          onClose={() => {
            setIsVisibleModal(false);
          }}
        />
        <div className="flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-xl p-6 w-full h-full">
          <h6 className="font-bold">{id}</h6>
          <div className="w-[95%] h-45 bg-figma_grey text-black rounded-lg">
            Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag
            Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
            Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag
            Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
            Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag
            Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
            Flag Here Flag Here Flag Here Flag Here Flag Here
          </div>

          {/* <p className="font-semibold">{description}</p>
          <p className="font-semibold">{university_id}</p>
          <p className="font-semibold">{available_slots}</p> */}

          <div className="flex justify-between items-center w-96">
            <div className="w-full p-2">
              <Link href={`./ConvocatoriasAdmin/${id}`}>
                <button
                  type="button"
                  className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-2"
                >
                  Actualizar
                </button>
              </Link>
            </div>
            <div className="w-full p-2">
              <button
                type="button"
                className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-2"
                onClick={() => {
                  setIsVisibleModal(true);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else if (open == "Abiertas") {
    return (
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

        <p className="font-semibold">{university_name}</p>
        <p className="font-semibold">{country}</p>
        <p className="font-semibold">{language}</p>
        <p className="font-semibold">{deadline}</p>

        <div className="flex justify-between items-center w-96">
          <div className="w-full p-2">
            <Link
              href={`/Convocatorias/ConvocatoriasEstudiante/Convocatorias${open}/${id}`}
            >
              <button
                type="button"
                className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-2"
              >
                Ver detalles
              </button>
            </Link>
          </div>
          <div className="w-full p-2">
            <button
              type="button"
              className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-2"
            >
              Postularme
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
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

        <p className="font-semibold">{university_name}</p>
        <p className="font-semibold">{country}</p>
        <p className="font-semibold">{language}</p>
        <p className="font-semibold">{deadline}</p>

        <div className="flex justify-between items-center w-96">
          <div className="w-full p-2">
            <Link
              href={`/Convocatorias/ConvocatoriasEstudiante/Convocatorias${open}/${id}`}
            >
              <button
                type="button"
                className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-2"
              >
                Ver detalles
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CardConvocatorias;
