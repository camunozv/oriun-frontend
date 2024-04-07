"use client";
import { apiDetailsOpenCall } from "@/app/api/Convocatorias/detailsClosedCall";
import React from "react";

/**
 * THINGS TO BE OUTPUTTED:
  | Field Name        | Type          | Description                                           |
  |-------------------|---------------|-------------------------------------------------------|
  |`university_name`  | String        | Name of the university offering the call.             |
  | `begin_date`      | Date          | Start date of the call.(YYYY-MM-DD)                   |
  | `deadline`        | Date          | Deadline for application submission.(YYYY-MM-DD)      |
  | `min_advance`     | Float         | Minimum advance required for application.             |
  | `min_papa`        | Float         | Minimum PAPA score required for application.          |
  | `format`          | String        | Format of the call.(virtual,presencial or mixed)      |
  | `year`            | Integer       | Year of the call.                                     |
  | `semester`        | Integer       | Semester of the call.(1,2)                            |
  | `description`     | Text          | Description of the call. May be null.                 |
  | `available_slots` | Integer       | Number of available slots for the call.               |
  | `note`            | Text          | Additional notes about the call.May be null           |
 * 
 */
async function DetailsConvocatoriaAbierta({ idConvocatoria, name, description, available }) {

  if (available == false) {
    return <div>Hello</div>;
  } else {
    return (
      <section className="flex justify-start items-left flex-col gap-2">
        <h1 className="font-bold text-[40px] underline">
          Conv No - {idConvocatoria}
        </h1>
        <br />
        <h2 className="font-bold text-[30px] flex items-center justify-between">
          {name}: País
        </h2>
        <h2 className="font-bold text-[30px]">
          Oferentes: Insert oferting people here
        </h2>
        <label
          htmlFor="description paragraph"
          className="font-bold text-[25px]"
        >
          Descripción:
        </label>
        <p id="description paragraph">{description}</p>
        <label
          htmlFor="requirements paragraph"
          className="font-bold text-[25px]"
        >
          Requisitos:
        </label>
        <p id="requirements paragraph">{description}</p>
        
        <label
          htmlFor="reach paragraph"
          className="font-bold text-[25px]"
        >
          Alcance
        </label>
        <p id="reach paragraph">{description}</p>

        <label
          htmlFor="requirements paragraph"
          className="font-bold text-[25px]"
        >
          Documentos Requeridos:
        </label>
        <ul id="reach" className="requirements paragraph">
            <li>1. Cédula de ciudadanía</li>
            <li>2. Registro Civil</li>
            <li>3. Certificado de Matrícula</li>
        </ul>
      </section>
    );
  }
}

export default DetailsConvocatoriaAbierta;
