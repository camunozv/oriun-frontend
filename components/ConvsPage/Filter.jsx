"use client";
import React, { useState } from "react";
import { useRef } from "react";

function Filter() {
  const convocatoria_nombre = useRef();
  const convocatoria_pais = useRef();
  const convocatoria_alcance_geografico = useRef();
  const convocatoria_estado = useRef();
  const convocatoria_fecha = useRef();

  function handleFilterSumbit(event) {
    event.preventDefault();

    const conv_nombre = convocatoria_nombre.current.value;
    const conv_pais = convocatoria_pais.current.value;
    const conv_alcance_geografico =
      convocatoria_alcance_geografico.current.value;
    const conv_fecha = convocatoria_fecha.current.value;
    const conv_estado = convocatoria_estado.current.value;

    console.log(conv_nombre);
    console.log(conv_pais);
    console.log(conv_alcance_geografico);
    console.log(conv_fecha);
    console.log(conv_estado);
  }

  return (
    <form
      onSubmit={handleFilterSumbit}
      className="overflow-hidden flex items-center justify-between mx-auto max-w-[1580px] max-h-[1024px] border-2 border-gray-10 p-5 shadow-lg rounded-xl"
    >
      <h2 className="block font-bold">Buscar Convocatorias:</h2>
      <div className="flex items-center justify-between gap-3">
        <input
          ref={convocatoria_nombre}
          type="text"
          placeholder="Nombre"
          className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
        />
        <input
          ref={convocatoria_pais}
          type="text"
          placeholder="País"
          className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
        />

        <input
          ref={convocatoria_alcance_geografico}
          type="text"
          placeholder="Alcance Geográfico"
          className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
        />

        <select
          ref={convocatoria_estado}
         
          placeholder="value 0"
          className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1 bg-white"
        >
          <option value="Null">Estado</option>
          <option value="Abierta">Abierta</option>
          <option value="Cerrada">Cerrada</option>
        </select>

        <input
          ref={convocatoria_fecha}
          type="date"
          placeholder="Fecha"
          className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
        />
      </div>

      <div className="w-40">
        <button
          type="submit"
          className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
        >
          Filtrar
        </button>
      </div>
    </form>
  );
}

export default Filter;
