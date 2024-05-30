"use client";
import { apiChooseWinner } from "@/app/api/ConvocatoriasAdmin/adminChooseWinner";
import React from "react";
import { useState } from "react";

function CardEstudiante({
  idEstudiante,
  idCall,
  nombreEstudiante,
  papa,
  estadoDocs,
  avance,
  sedes,
  idioma,
  pbm,
  token,
}) {
  const [isGanador, setIsGanador] = useState(false);

  const handleButtonClick = () => {
    setIsGanador(!isGanador);

    if (isGanador === true) {
      apiChooseWinner
        .postAssignNotWinner(idCall, idEstudiante, token)
        .then((response) => {
          alert(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      apiChooseWinner
        .postAssignWinner(idCall, idEstudiante, token)
        .then((response) => {
          alert(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-xl shadow-sm px-20 py-5 mx-5 my-5">
      <div className="flex gap-2">
        <div className="flex items-center justify-center border-2 rounded-lg px-4 py-2 font-semibold text-gray-700">
          <p className="text-[15px] underline mr-4">No Documento:</p>{" "}
          {idEstudiante}
        </div>
        <div className="flex items-center justify-center border-2 rounded-lg px-4 py-2 font-semibold text-gray-700">
          <p className="text-[15px] underline mr-4">Nombre:</p>{" "}
          {nombreEstudiante}
        </div>
        <div className="flex items-center justify-center border-2 rounded-lg px-4 py-2 font-semibold text-gray-700">
          <p className="text-[15px] underline mr-4">PAPPA:</p> {papa}
        </div>
        <div className="flex items-center justify-center border-2 rounded-lg px-4 py-2 font-semibold text-gray-700">
          <p className="text-[15px] underline mr-4">Avance:</p> {avance}
        </div>
        <div className="flex items-center justify-center border-2 rounded-lg px-4 py-2 font-semibold text-gray-700">
          <p className="text-[15px] underline mr-4">Sede:</p> {sedes}
        </div>
        {/* <div className="flex items-center justify-center border-2 rounded-lg px-4 py-2 font-semibold text-gray-700">
          {idioma}
        </div> */}
        <div className="flex items-center justify-center border-2 rounded-lg px-4 py-2 font-semibold text-gray-700">
          <p className="text-[15px] underline mr-4">PBM:</p> {pbm}
        </div>
      </div>

      <button
        type="button"
        onClick={handleButtonClick}
        className={`flex transition-all w-50 items-center ml-5 justify-center gap-3 border-2 rounded-full px-4 py-2 font-semibold hover:text-figma_blue hover:bg-white ${
          isGanador
            ? "bg-gray-600 border-gray-600 text-white"
            : "bg-blue-600 border-blue-600 text-white"
        }`}
      >
        {isGanador ? "Quitar Ganador" : "Asignar Ganador"}
      </button>
    </div>
  );
}

export default CardEstudiante;
