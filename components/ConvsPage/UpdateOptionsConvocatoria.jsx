import React from "react";

function UpdateOptionsConvocatoria() {
  return (
    <div className="flex flex-col justify-center items-center w-full rounded-lg shadow-lg p-6">
      <form className="w-full">
        <div className="w-full flex flex-col items-start justify-start gap-3">
          <label
            htmlFor="actualization_div"
            className="font-semibold text-[20px] block"
          >
            Actualizar convocatoria
          </label>
        </div>

        <div
          id="actualization_div"
          className="p-6 flex justify-between items-center w-full gap-3"
        >
          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="id_call" className="font-semibold">
              Digite id para modificar
            </label>
            <input
              id="id_call"
              type="text"
              placeholder="año-semestre"
              className="border-gray-300 border rounded-md outline-none"
            />
          </div>
          <button
            type="button"
            className="w-40 font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateOptionsConvocatoria;
