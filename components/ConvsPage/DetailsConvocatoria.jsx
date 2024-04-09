import React from "react";

function DetailsConvocatoria({ call, admin, id, open }) {

  if (admin == true) {
    return <div>Hello</div>;
  } else if (call && !open) {
    return (
      <section className="flex justify-start items-left flex-col gap-2">
        <h1 className="font-bold text-[40px] underline">Conv No - {id}</h1>
        <br />
        <h2 className="font-bold text-[30px] flex items-center justify-between">
          Oferentes: {call.university_name}
        </h2>
        <br />
        <h3 className="font-bold text-[30px] flex items-center justify-between">
          Cerrada desde: {call.deadline}
        </h3>
        <label
          htmlFor="description paragraph"
          className="font-bold text-[25px]"
        >
          Descripción:
        </label>
        <p id="description paragraph">{call.description}</p>
        <label htmlFor="requisites" className="font-bold text-[25px]">
          Requisitos:
        </label>
        <ul id="requisites">
          <li>1. PAPPA mínimo: {call.min_papa}</li>
          <li>2. Avance mínimo: {call.min_advance}</li>
        </ul>
        <label htmlFor="requirements" className="font-bold text-[25px]">
          Información General:
        </label>
        <ul id="requirements">
          <li>1. Cupos disponibles: {call.available_slots}</li>
          <li>2. Formato: {call.format}</li>
          <li>3. Año: {call.year}</li>
          <li>4. Semestre: {call.semester}</li>
        </ul>

        <label htmlFor="adjudication" className="font-bold text-[25px]">
          Detalles de Adjudicación:
        </label>
        <ul id="adjudication">
          <li>1. PAPPA ganador más alto: {call.highest_papa_winner}</li>
          <li>2. PAPPA ganador más bajo: {call.minimum_papa_winner}</li>
          <li>3. Número de ganadores: {call.selected}</li>
        </ul>
        <label htmlFor="note" className="font-bold text-[25px]">
          Nota
        </label>
        <p id="note">{call.note}</p>
      </section>
    );
  } else if (call) {
    return (
      <section className="flex justify-start items-left flex-col gap-2">
        <h1 className="font-bold text-[40px] underline">Conv No - {id}</h1>
        <br />
        <h2 className="font-bold text-[30px] flex items-center justify-between">
          Oferentes: {call.university_name}
        </h2>
        {/* <h3 className="font-bold text-[30px] flex items-center justify-between">
          Apertura: {call.begin_date}
        </h3>{" "} */}
        <br />
        <h3 className="font-bold text-[30px] flex items-center justify-between">
          Cierre: {call.deadline}
        </h3>
        <label
          htmlFor="description paragraph"
          className="font-bold text-[25px]"
        >
          Descripción:
        </label>
        <p id="description paragraph">{call.description}</p>
        <label htmlFor="requisites" className="font-bold text-[25px]">
          Requisitos:
        </label>
        <ul id="requisites">
          <li>1. PAPPA mínimo: {call.min_papa}</li>
          <li>2. Avance mínimo: {call.min_advance}</li>
        </ul>
        <label htmlFor="requirements" className="font-bold text-[25px]">
          Información General:
        </label>
        <ul id="requirements">
          <li>1. Cupos disponibles: {call.available_slots}</li>
          <li>2. Formato: {call.format}</li>
          <li>3. Año: {call.year}</li>
          <li>4. Semestre: {call.semester}</li>
        </ul>
        <label htmlFor="note" className="font-bold text-[25px]">
          Nota
        </label>
        <p id="note">{call.note}</p>
      </section>
    );
  } else {
    return (
      <section className="flex justify-start items-left flex-col gap-2">
        <h1 className="font-bold text-[40px] underline">
          Buscando Convocatoria
        </h1>
        <br />
      </section>
    );
  }
}

export default DetailsConvocatoria;
