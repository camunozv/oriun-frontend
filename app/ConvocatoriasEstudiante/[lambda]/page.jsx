import Link from "next/link";
import React from "react";

function ConvocatoriasDetailsPage({ params }) {
  return (
    <main>
      <h1>Información sobre convocatoria: {params.lambda} </h1>
      
      {/*

        Se debe crear un componente para la presentación de la info de una convocatoria 
        en partícular.

        Más adelante debe sacarse la funcionalidad de postulación y demás.

       */}

       <Link href = "../convocatorias">Regresar</Link>
    </main>
  );
}


export default ConvocatoriasDetailsPage;
