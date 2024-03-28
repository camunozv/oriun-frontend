import React from "react";

// The following component will be used to register calls in the data base & probaly it will be used to
// update calls in the data base.

// The call entity is defined as follows in the data base and obviously in the ERD diagram:

// The following field will be implemented in the following form:
// id *
// university_id *

// begin_date: date *
// deadline_date: date *
// min_advance: smallint *
// min_papa: smallint *

// year: smallint *

// description: character_varying / longtext *
// available_slots: smallint *
// note: text

// active: boolean -> will be shown in the card component, it depends on the date

// The following fields are pending for implementation bce i don't know what they mean:

// format: format_en -> ?
// study_level: study_level_en[] -> ?
// semester: semester_en -> ?

function CreationFormConvocatorias() {
  return (
    <div className="flex flex-col justify-center items-center w-full rounded-lg shadow-lg p-6">
      <form className="w-full">
        <div className="w-full flex flex-col items-start justify-start gap-3">
          <label
            htmlFor="information_grid"
            className="font-semibold text-[20px] block"
          >
            Información General
          </label>
        </div>
        <div
          id="information_grid"
          className="p-6 grid grid-cols-3 justify-center items-center w-full gap-3"
        >
          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="id_call" className="font-semibold">
              id Convocatoria
            </label>
            <input
              id="id_call"
              type="text"
              placeholder="año-semestre"
              className="border-gray-300 border rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="id_university" className="font-semibold">
              id Universidad
            </label>
            <input
              id="id_university"
              type="text"
              placeholder="código universidad"
              className="border-gray-300 border rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="year" className="font-semibold">
              Año
            </label>
            <input
              id="year"
              type="text"
              placeholder="0000"
              className="border-gray-300 border rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="study_level" className="font-semibold">
              Nivel de Estudios
            </label>
            <select
              id="study_level"
              className="border-gray-300 border rounded-md outline-none bg-white"
              placeholder="value 0"
            >
              <option value="value 0">Selección...</option>
              <option value="value 1">Pregrado</option>
              <option value="value 2">Maestría</option>
              <option value="value 3">Doctorado</option>
            </select>
          </div>
          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="open_date" className="font-semibold">
              Apertura
            </label>
            <input
              id="open_date"
              type="date"
              placeholder="año-semestre"
              className="border-gray-300 border rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="deadline_date" className="font-semibold">
              Cierre
            </label>
            <input
              id="deadline_date"
              type="date"
              placeholder="año-semestre"
              className="border-gray-300 border rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="min_advance" className="font-semibold">
              Avance Mínimo
            </label>
            <input
              id="min_advance"
              type="text"
              placeholder="en porcentaje"
              className="border-gray-300 border rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="min_pappa" className="font-semibold">
              PAPPA Mínimo
            </label>
            <input
              id="min_pappa"
              type="text"
              placeholder="0 - 5"
              className="border-gray-300 border rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="available_slots" className="font-semibold">
              Cupos disponibles
            </label>
            <input
              id="available_slots"
              type="text"
              placeholder="cupos máximos"
              className="border-gray-300 border rounded-md outline-none"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-3">
          <label
            htmlFor="description"
            className="font-semibold text-[20px] block"
          >
            Descripción
          </label>
          <textarea
            id="description"
            placeholder="Describa su convocatoria aqui..."
            className="block h-52 w-full border-gray-300 border rounded-md outline-none"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-3 mt-3">
          <label htmlFor="note" className="font-semibold text-[20px] block">
            Nota
          </label>
          <textarea
            id="note"
            placeholder="Notas aqui..."
            className="block h-25 w-full border-gray-300 border rounded-md outline-none"
          />
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-3 mt-3">
          <button
            type="submit"
            className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-2"
          >
            Crear
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreationFormConvocatorias;
