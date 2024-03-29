import React from "react";


// Actualizar me redirige a la página donde va a estar la convocatoria que yo necesito modificar, que va a ser
// una ruta dinámica. Dentro de esa ruta voy a tener un componente que recibe como parámetro el id que viene en
// la ruta dinámica, de tal manera que haga un fetch instantáneo de la convocatoria que se quiere actualizar.

// 1. Redirigir desde la card de convocatoria usando el botón de actualizar, usando una ruta dinámica.
// 2. El componente que permite actualizar convocatorias va a tomar apenas cargue la página el id que se encuentra en
// la ruta dinámica.
// 3. El componente hará automáticamente un fetch con use effect para traer a la convocatoria tras bambalinas
// 4. Se le pedirá al usuario que digite solo la información que desea actualizar.
// 5. Se actualiza la convocatoria.

function UpdateConvocatoria() {
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

export default UpdateConvocatoria;
