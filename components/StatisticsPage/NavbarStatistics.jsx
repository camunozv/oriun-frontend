"use client"
import { useRouter } from "next/navigation";
import React from "react";

function NavbarStatistics() {
  const router = useRouter();

  const handleRedirect = (path) => {
    router.push(path);
  };

  return (
    <div className="flex gap-3 max-w-[1580px] mt-3 items-center justify-center">
      <button
        onClick={() => handleRedirect("/Statistics/admission_type")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Tipo de admisión
      </button>

      <button
        onClick={() => handleRedirect("/Statistics/advance")}
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Avance
      </button>

      <button
        onClick={() => handleRedirect("/Statistics/ethnicity")}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Etnia
      </button>

      <button
        onClick={() => handleRedirect("/Statistics/faculty")}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Facultad
      </button>

      <button
        onClick={() => handleRedirect("/Statistics/headquarters")}
        className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
      >
        Sede
      </button>

      <button
        onClick={() => handleRedirect("/Statistics/major")}
        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
      >
        Carrera
      </button>

      <button
        onClick={() => handleRedirect("/Statistics/papa")}
        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
      >
        PAPPA
      </button>

      <button
        onClick={() => handleRedirect("/Statistics/pbm")}
        className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
      >
        PBM
      </button>

      <button
        onClick={() => handleRedirect("/Statistics/sex")}
        className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        Sexo
      </button>

      <button
        onClick={() => handleRedirect("/Statistics/study_level")}
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
      >
        Nivel de estudios
      </button>
    </div>
  );
}

export default NavbarStatistics;
