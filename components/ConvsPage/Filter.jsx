import React from "react";
import Link from "next/link";

function Filter() {
  return (
    <div className="overflow-hidden flex items-center justify-between mx-auto max-w-[1580px] max-h-[1024px] border-2 border-gray-10 p-5 shadow-lg rounded-xl">
      <h2 className="block font-bold">Buscar Convocatorias:</h2>
      <div className="flex items-center justify-between gap-3">
        <input
          type="text"
          placeholder="País"
          className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
        ></input>
        <input
          type="text"
          placeholder="Nombre"
          className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
        ></input>
        <input
          type="text"
          placeholder="Alcance Geográfico"
          className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
        ></input>
        <input
          type="date"
          placeholder="Fecha"
          className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
        ></input>
      </div>

      <div className="w-40">
        <button
          type="button"
          className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}

export default Filter;
