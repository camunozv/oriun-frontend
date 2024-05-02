
//import CardPostulation from '@/components/ChooseWinners/CardPostulation';
import CardPostulacion from '@/components/ChooseWinner/CardPostulacion';
import Link from 'next/link';
import React from 'react'

function verPostulaciones() 
  {
    return (
      <>
        <div className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 flex flex-col justify-center items-center w-full rounded-lg shadow-lg p-6">
          <form className="w-full">
            {/** */}

            <div className="w-full flex flex-col items-start justify-start gap-3">
              <label
                htmlFor="information_grid"
                className="font-semibold text-[20px] block"
              >
                A continuacion se muestran las postulaciones de la convocatoria seleccionada
              </label>
            </div>

            <div
              id="information_grid"
              className="p-6 grid grid-cols-3 justify-center items-center w-full gap-3"
            >
              {/**Active */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="active" className="font-semibold">
                  Estado de la Postulación
                </label>
                <select
                  id="active"
                  className="border-gray-300 border rounded-md outline-none bg-white"
                  placeholder="value 0"
                >
                  <option value="">Selección...</option>
                  <option value="0">Sin Revisar</option>
                  <option value="1">Pendiente de Modificacion</option>
                  <option value="2">Aceptado</option>
                </select>
              </div>

              {/*Id Estudiante */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="call_id" className="font-semibold">
                  id Estudiante
                </label>
                <input
                  id="call_id"
                  type="text"
                  placeholder="código universidad /un número"
                  className="bg-white border-gray-300 border rounded-md outline-none"
                />
              </div>


              {/**deadline */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="deadline" className="font-semibold">
                  Fecha de Postulación
                </label>
                <input
                  id="deadline"
                  type="date"
                  placeholder=""
                  className="bg-white border-gray-300 border rounded-md outline-none"
                />
              </div>

              {/**study_level */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="study_level" className="font-semibold">
                  Nivel de Estudios
                </label>
                <select
                  id="study_level"
                  className="border-gray-300 border rounded-md outline-none bg-white"
                  placeholder="value 0"
                >
                  <option value="">Selección...</option>
                  <option value="PRE">Pregrado</option>
                  <option value="POS">Maestría</option>
                  <option value="DOC">Doctorado</option>
                </select>
              </div>

              {/**year */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="year" className="font-semibold">
                  Año de la movilidad
                </label>
                <input
                  id="year"
                  type="text"
                  placeholder="año-semestre"
                  className="bg-white border-gray-300 border rounded-md outline-none"
                />
              </div>

              {/**semester */}
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="semester" className="font-semibold">
                  Semestre de la movilidad
                </label>
                <select
                  id="semester"
                  className="border-gray-300 border rounded-md outline-none bg-white"
                  placeholder=""
                >
                  <option value="">Selección...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>

            </div>

            {/** */}

            <button
              type="submit"
              className="w-full block font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            >
              Buscar
            </button>
          </form>
        </div>

        <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
          <div className="grid grid-cols-3 w-full gap-6">
              <CardPostulacion  EstadoConv={1} >
              </CardPostulacion>

              <CardPostulacion EstadoConv={2}>
              </CardPostulacion>

              <CardPostulacion EstadoConv={3}>
              </CardPostulacion>
          </div>
        </main>
      </>
    );
  }
export default verPostulaciones