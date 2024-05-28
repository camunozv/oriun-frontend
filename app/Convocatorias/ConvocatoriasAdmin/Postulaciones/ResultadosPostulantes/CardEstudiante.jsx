import React from 'react';
import { useState } from 'react';

function CardEstudiante({ idEstudiante, nombreEstudiante, papa, avance, sedes, idioma, pbm }) {
  const [isGanador, setIsGanador] = useState(false);

  const handleButtonClick = () => {
    setIsGanador(!isGanador);
  };

  return (
    <div className="flex items-center justify-between p-4 border border-gray-300 rounded-xl shadow-sm px-20 py-5 mx-5 my-5">
      <div className="flex gap-2">
        <div className="flex items-center justify-center border-2 rounded-lg px-4 py-2 font-semibold text-gray-700">
          {idEstudiante}
        </div>
        <div className="flex items-center justify-center border-2 rounded-lg px-4 py-2 font-semibold text-gray-700">
          {nombreEstudiante}
        </div>
        <div className="flex items-center justify-center border-2 rounded-lg px-4 py-2 font-semibold text-gray-700">
          {papa}
        </div>
        <div className="flex items-center justify-center border-2 rounded-lg px-4 py-2 font-semibold text-gray-700">
          {avance}
        </div>
        <div className="flex items-center justify-center border-2 rounded-lg px-4 py-2 font-semibold text-gray-700">
          {sedes}
        </div>
        <div className="flex items-center justify-center border-2 rounded-lg px-4 py-2 font-semibold text-gray-700">
          {idioma}
        </div>
        <div className="flex items-center justify-center border-2 rounded-lg px-4 py-2 font-semibold text-gray-700">
          {pbm}
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={handleButtonClick}
          className={`flex transition-all items-center justify-center gap-3 border-2 rounded-full px-4 py-2 font-semibold hover:text-figma_blue hover:bg-white ${isGanador ? 'bg-gray-600 border-gray-600 text-white' : 'bg-blue-600 border-blue-600 text-white'}`}
        >
          {isGanador ? 'Quitar Ganador' : 'Asignar Ganador'}
        </button>
      </div>
    </div>
    
  );
}

export default CardEstudiante;
