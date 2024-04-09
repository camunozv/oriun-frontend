import React from "react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/credentials_options";
import { redirect } from "next/navigation";
import DetailsConvocatoriaAbierta from "@/components/ConvsPage/DetailsConvocatoria";

/**
 * 
 * Aca se debe manipular el componente de details de tal manera que sepa cuando se estan viendo detalles de 
 * una convocatoria abierta o cerrada.
 */
async function ConvocatoriasAdminDetailsPage({ params }) {
  
  let id = 0;
  try {
    const session = await getServerSession(options);

    if (!session) 
    {
      redirect('/Ingreso');
    }

    id = params.lambda;
  } catch (error)
  {
    console.log('Error de sesion en detalles de convocatoria admin.');
    console.log(error);
    redirect('/Ingreso');

  }
  
  return (
    <>
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <DetailsConvocatoriaAbierta
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

export default ConvocatoriasAdminDetailsPage;
