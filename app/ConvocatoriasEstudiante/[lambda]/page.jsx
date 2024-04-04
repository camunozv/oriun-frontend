import Link from "next/link";
import React from "react";
import DetailsConvocatoria from "@/app/components/ConvsPage/DetailsConvocatoria";

function ConvocatoriasDetailsPage({ params }) {
  const id = params.lambda;
  return (
    <>
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <DetailsConvocatoria
          idConvocatoria={id}
          name="Kospie"
          description={`Esta es una convocatoria destinada a estudiantes de ingeniería con un avance entre el 65% y el 80% de avance. Con el fin de realizar una movilidad académica en Alemania durante 1 año, 
          para afianzar el idioma alemán y 
          realizar prácticas estudiantiles en la ciudad de destino. 
          Para mejorar el acceso al mundo laboral.`}
        />
      </main>
    </>
  );
}

export default ConvocatoriasDetailsPage;
