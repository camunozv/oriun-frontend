import React from "react";

function CardConvocatorias({ admin, name, university, country }) {
  
  if (admin === true) {
    return (
      <div className="flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-xl p-6 w-full h-full">
        <h6 className="font-bold">Conv. 2024-01</h6>
        <div className="w-[95%] h-45 bg-figma_grey text-black rounded-lg">
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here
        </div>

        <p className="font-semibold">Nombre</p>
        <p className="font-semibold">Universidad</p>
        <p className="font-semibold">País</p>

        <div className="flex justify-between items-center w-96">
          <div className="w-full p-2">
            <button
              type="button"
              className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            >
              Opciones
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-xl p-6 w-full h-full">
        <h6 className="font-bold">Conv. 2024-01</h6>
        <div className="w-[95%] h-45 bg-figma_grey text-black rounded-lg">
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
          Flag Here Flag Here
        </div>

        <p className="font-semibold">Nombre</p> {/** Aqui debe ir prop name de la convocatoria */}
        <p className="font-semibold">Universidad</p> {/** Aqui debe ir prop university de la convocatoria */}
        <p className="font-semibold">País</p> {/** Aqui debe ir prop country de la convocatoria */}

        <div className="flex justify-between items-center w-96">
          <div className="w-full p-2">
            <button
              type="button"
              className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-2"
            >
              Ver detalles
            </button>
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
  }
}

export default CardConvocatorias;
