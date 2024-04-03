"use client";
import React from "react";
import { useRef } from "react";
// Actualizar me redirige a la página donde va a estar la convocatoria que yo necesito modificar, que va a ser
// una ruta dinámica. Dentro de esa ruta voy a tener un componente que recibe como parámetro el id que viene en
// la ruta dinámica, de tal manera que haga un fetch instantáneo de la convocatoria que se quiere actualizar.

// 1. Redirigir desde la card de convocatoria usando el botón de actualizar, usando una ruta dinámica.
// 2. El componente que permite actualizar convocatorias va a tomar apenas cargue la página el id que se encuentra en
// la ruta dinámica.
// 3. El componente hará automáticamente un fetch con use effect para traer a la convocatoria tras bambalinas
// 4. Se le pedirá al usuario que digite solo la información que desea actualizar.
// 5. Se actualiza la convocatoria.
// 6. Debe actualizarse la convocatoria solo en los campos que desea modificar el usuario, la demás información
// se retorna al backend tal cual como está.

function UpdateConvocatoria({ id }) {
  const convocatoria_id = useRef();
  const universidad_id = useRef();
  const anho = useRef();
  const nivel_estudios = useRef();
  const fecha_cierre = useRef();
  const fecha_apertura = useRef();
  const avance_minimo = useRef();
  const papa_minimo = useRef();
  const cupos_disponibles = useRef();
  const descripcion = useRef();
  const nota = useRef();
  function handleUpdateFormConvocatorias(event) {
    event.preventDefault();

    const conv_convocatoria_id = convocatoria_id.current.value;
    const conv_universidad_id = universidad_id.current.value;
    const conv_anho = anho.current.value;
    const conv_nivel_estudios = nivel_estudios.current.value;
    const conv_fecha_cierre = fecha_cierre.current.value;
    const conv_fecha_apertura = fecha_apertura.current.value;
    const conv_avance_minimo = avance_minimo.current.value;
    const conv_papa_minimo = papa_minimo.current.value;
    const conv_cupos_disponibles = cupos_disponibles.current.value;
    const conv_descripcion = descripcion.current.value;
    const conv_nota = nota.current.value;

    console.log(conv_convocatoria_id);
    console.log(conv_universidad_id);
    console.log(conv_anho);
    console.log(conv_nivel_estudios);
    console.log(conv_fecha_cierre);
    console.log(conv_fecha_apertura);
    console.log(conv_avance_minimo);
    console.log(conv_papa_minimo);
    console.log(conv_cupos_disponibles);
    console.log(conv_descripcion);
    console.log(conv_nota);
  }
  return (
    <div className="flex flex-col justify-center items-center w-full rounded-lg shadow-lg p-6">
      <form onSubmit={handleUpdateFormConvocatorias} className="w-full">
        <div className="w-full flex flex-col items-start justify-start gap-3">
          <label
            htmlFor="information_grid"
            className="font-semibold text-[20px] block"
          >
            Convocatoria Selecionada : {id}
          </label>
          <p className="text-grey-500">
            Por favor solo escriba en los campos que desea actualizar.
          </p>
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
              ref={convocatoria_id}
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
              ref={universidad_id}
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
              ref={anho}
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
              ref={nivel_estudios}
              id="study_level"
              className="border-gray-300 border rounded-md outline-none bg-white"
              placeholder="value 0"
            >
              <option value="value 0">Selección...</option>
              <option value="Pregrado">Pregrado</option>
              <option value="Maestría">Maestría</option>
              <option value="Doctorado">Doctorado</option>
            </select>
          </div>
          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="open_date" className="font-semibold">
              Apertura
            </label>
            <input
              ref={fecha_apertura}
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
              ref={fecha_cierre}
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
              ref={avance_minimo}
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
              ref={papa_minimo}
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
              ref={cupos_disponibles}
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
            ref={descripcion}
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
            ref={nota}
            placeholder="Notas aqui..."
            className="block h-25 w-full border-gray-300 border rounded-md outline-none"
          />
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-3 mt-3">
          <button
            type="submit"
            className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-2"
          >
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateConvocatoria;
