import React from "react";

function DetailsConvocatoria({ idConvocatoria, name, description, available }) {
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

export default DetailsConvocatoria;
