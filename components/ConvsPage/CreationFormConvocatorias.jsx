"use client;";

import { BASE_URL } from "@/app/api/base.api";
import { useRef } from "react";
import axios from "axios";
// Actualizar me redirige a la página donde va a estar la convocatoria que yo necesito modificar, que va a ser
// una ruta dinámica. Dentro de esa ruta voy a tener un componente que recibe como parámetro el id que viene en
// la ruta dinámica, de tal manera que haga un fetch instantáneo de la convocatoria que se quiere actualizar.

function CreationFormConvocatorias({ token }) {
  const universidad_id = useRef();
  const begin_date = useRef();
  const deadline = useRef();
  const min_advance = useRef();
  const min_papa = useRef();
  const year = useRef();
  const study_level = useRef();
  const description = useRef();
  const available_slots = useRef();
  const note = useRef();
  const active = useRef();
  const format = useRef();
  const semester = useRef();
  const language = useRef();
  const highest_papa_winner = useRef();
  const minimum_papa_winner = useRef();
  const selected = useRef();

  async function handleUpdateFormConvocatorias(event) {
    event.preventDefault();

    const conv_universidad_id = universidad_id.current.value;

    // Rendered
    const conv_begin_date = begin_date.current.value;
    const conv_deadline = deadline.current.value;
    const conv_min_advance = min_advance.current.value;
    const conv_min_papa = min_papa.current.value;
    const conv_year = year.current.value;
    const conv_study_level = study_level.current.value;
    const conv_description = description.current.value;
    const conv_available_slots = available_slots.current.value;
    const conv_note = note.current.value;
    const conv_active = active.current.value;
    const conv_format = format.current.value;
    const conv_semester = semester.current.value;
    const conv_language = language.current.value;
    const conv_highest_papa_winner = highest_papa_winner.current.value;
    const conv_minimum_papa_winner = minimum_papa_winner.current.value;
    const conv_selected = selected.current.value;

    // console.log(conv_begin_date);
    // console.log(conv_deadline);
    // console.log(conv_min_advance);
    // console.log(conv_min_papa);
    // console.log(conv_year);
    // console.log(conv_study_level);
    // console.log(conv_description);
    // console.log(conv_available_slots);
    // console.log(conv_note);
    // console.log(conv_active);
    // console.log(conv_format);
    // console.log(conv_semester);
    // console.log(conv_language);
    // console.log(conv_highest_papa_winner);
    // console.log(conv_minimum_papa_winner);
    // console.log(conv_selected);

    // apiAdminCalls
    //   .postAdminCalls(
    //     conv_universidad_id,
    //     conv_active,
    //     conv_begin_date,
    //     conv_deadline,
    //     conv_min_advance,
    //     conv_min_papa,
    //     conv_format,
    //     conv_study_level,
    //     conv_year,
    //     conv_semester,
    //     conv_language,
    //     conv_description,
    //     conv_available_slots,
    //     conv_note,
    //     conv_highest_papa_winner,
    //     conv_minimum_papa_winner,
    //     conv_selected,
    //     token
    //   )
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));


    
      const data = {
        university: conv_universidad_id,
        active: conv_active,
        begin_date: conv_begin_date,
        deadline: conv_deadline,
        min_advance: conv_min_advance,
        min_papa: conv_min_papa,
        format: conv_format,
        study_level: conv_study_level,
        year: conv_year,
        semester: conv_semester,
        language: conv_language,
        description: conv_description,
        available_slots: conv_available_slots,
        note: conv_note,
        highest_papa_winner: conv_highest_papa_winner,
        minimum_papa_winner: conv_minimum_papa_winner,
        selected: conv_selected,
      };
  
      let data_b = {};
  
      for (const [key, value] of Object.entries(data)) {
        if (value !== "") {
          data_b[key] = value;
        }
      }
  
      let data_c = JSON.stringify(data_b);
  
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${BASE_URL}call/api/`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        data: data_c,
      };
  
      axios
        .request(config)
        .then((response) => {
          alert(response.data.mensaje);
        })
        .catch((error) => {
          console.log(error);
        });
  }
  return (
    <div className="flex flex-col justify-center items-center w-full rounded-lg shadow-lg p-6">
      <form onSubmit={handleUpdateFormConvocatorias} className="w-full">
        <div className="w-full flex flex-col items-start justify-start gap-3">
          <label
            htmlFor="information_grid"
            className="font-semibold text-[20px] block"
          >
            Crear Convocatorias
          </label>
          <p>Todos los campos deben llenarse, excepto los últimos 3; solo se llenan cuando la convocatoria se inserte cerrada.</p>
        </div>
        <div
          id="information_grid"
          className="p-6 grid grid-cols-3 justify-center items-center w-full gap-3"
        >
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
              ref={year}
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
              ref={study_level}
              id="study_level"
              className="border-gray-300 border rounded-md outline-none bg-white"
              placeholder="value 0"
            >
              <option value="value 0">Selección...</option>
              <option value="PRE">Pregrado</option>
              <option value="POS">Maestría</option>
              <option value="DOC">Doctorado</option>
            </select>
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="open_date" className="font-semibold">
              Apertura
            </label>
            <input
              ref={begin_date}
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
              ref={deadline}
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
              ref={min_advance}
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
              ref={min_papa}
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
              ref={available_slots}
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
            ref={description}
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
            ref={note}
            placeholder="Notas aqui..."
            className="block h-25 w-full border-gray-300 border rounded-md outline-none"
          />
        </div>

        {/** Active*/}
        <div className="flex flex-col justify-start items-left gap-1">
          <label htmlFor="active" className="font-semibold">
            Activa
          </label>
          <select
            ref={active}
            id="active"
            className="border-gray-300 border rounded-md outline-none bg-white"
            placeholder="value 0"
          >
            <option value="">Selección...</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>

        {/** Format*/}
        <div className="flex flex-col justify-start items-left gap-1">
          <label htmlFor="format" className="font-semibold">
            Formato
          </label>
          <select
            ref={format}
            id="format"
            className="border-gray-300 border rounded-md outline-none bg-white"
            placeholder="value 0"
          >
            <option value="">Selección...</option>
            <option value="P">Presencial</option>
            <option value="V">Virtual</option>
            <option value="M">Mixto</option>
          </select>
        </div>

        {/** Semester*/}
        <div className="flex flex-col justify-start items-left gap-1">
          <label htmlFor="semester" className="font-semibold">
            Semestre
          </label>
          <select
            ref={semester}
            id="semester"
            className="border-gray-300 border rounded-md outline-none bg-white"
            placeholder="value 0"
          >
            <option value="">Selección...</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>

        {/**language*/}
        <div className="flex flex-col justify-start items-left gap-1">
          <label htmlFor="language" className="font-semibold">
            Idioma
          </label>
          <select
            ref={language}
            id="language"
            className="border-gray-300 border rounded-md outline-none bg-white"
            placeholder="value 0"
          >
            <option value="">Selección...</option>
            <option value="en">Inglés</option>
            <option value="es">Español</option>
            <option value="fr">Francés</option>
            <option value="pt">Portugués</option>
            <option value="de">Alemán</option>
            <option value="it">Italiano</option>
            <option value="ko">Coreano</option>
            <option value="ru">Ruso</option>
            <option value="zh">Chino</option>
            <option value="xx">Otro</option>
          </select>

          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="high papa" className="font-semibold">
              Papa ganador más alto
            </label>
            <input
              ref={highest_papa_winner}
              id="high papa"
              type="text"
              placeholder="año-semestre"
              className="border-gray-300 border rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="min papa" className="font-semibold">
              Papa ganador más bajo
            </label>
            <input
              ref={minimum_papa_winner}
              id="min papa"
              type="text"
              placeholder="año-semestre"
              className="border-gray-300 border rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <label htmlFor="selected" className="font-semibold">
              Cupos seleccionados
            </label>

            <input
              ref={selected}
              id="selected"
              type="text"
              placeholder="año-semestre"
              className="border-gray-300 border rounded-md outline-none"
            />
          </div>
        </div>

        <div className="w-full flex flex-col items-start justify-start gap-3 mt-3">
          <button
            type="submit"
            className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-2"
          >
            Publicar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreationFormConvocatorias;
