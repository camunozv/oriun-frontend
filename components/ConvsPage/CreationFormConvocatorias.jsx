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
      <div className="p-6 grid grid-cols-3 justify-center items-center w-full gap-3">
        <div className = 'flex justify-start items-center gap-1'>
          <label htmlFor="">id Convocatoria</label>
          <input type='text'placeholder="año-semestre" />
        </div>
        <div className = 'flex justify-start items-center gap-1'>
          <label htmlFor="">id Universidad</label>
          <input type='text' placeholder="0000" />
        </div>
        <div className = 'flex justify-start items-center gap-1'>
          <label htmlFor="">Año</label>
          <input type='text' placeholder="0000" />
        </div>
        <div className = 'flex justify-start items-center gap-1'>
          <label htmlFor="">Nivel de Estudios</label>
          <select className="bg-white rounded-lg hover:outline-none outline-none">
            <option value="value 1">Pregrado</option>
            <option value="value 2">Maestría</option>
            <option value="value 3">Doctorado</option>
          </select>
        </div>

        <div className = 'flex justify-start items-center gap-1'>
          <label htmlFor="open_date">Apertura</label>
          <input id='open_date' type='date'placeholder="año-semestre" />
        </div>
        <div className = 'flex justify-start items-center gap-1'>
          <label htmlFor="deadline_date">Cierre</label>
          <input id='deadline_date' type='date'placeholder="año-semestre" className="" form="dd-mm-yyyy"/>
        </div>
        
        <div className = 'flex justify-start items-center gap-1'>
          <label htmlFor="min_advance">Avance Mínimo</label>
          <input id='min_advance'type='text' placeholder="en porcentaje" />
        </div>

        <div className = 'flex justify-start items-center gap-1'>
          <label htmlFor="min_papa">PAPA Mínimo</label>
          <input id = "min_papa"type='text' placeholder="0 - 5" />
        </div>
        <div className = 'flex justify-start items-center gap-1'>
          <label htmlFor="available_slots">Cupos disponibles</label>
          <input id = "available_slots"type='text' placeholder="cupitos xd" />
        </div>


      </div>

      <div className="w-full flex flex-col items-start justify-start gap-3">
        <label htmlFor="description" className="font-semibold text-[20px] block">Descripción</label>
        <textarea id="description" placeholder="Describa su convocatoria aqui..." className="block h-52 w-full" />
      </div>
      <div className="w-full flex flex-col items-start justify-start gap-3">
        <label htmlFor="note" className="font-semibold text-[20px] block">Nota</label>
        <textarea id="note" placeholder="Notas aqui..." className="block h-25 w-full" />
      </div>
    </div>
  );
}

export default CreationFormConvocatorias;
