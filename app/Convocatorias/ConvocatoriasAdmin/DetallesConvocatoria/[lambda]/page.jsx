import React from "react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/credentials_options";
import { redirect } from "next/navigation";
import DetailsConvocatoria from "@/components/ConvsPage/DetailsConvocatoria";


async function ConvocatoriasAdminDetailsPage({ params, open }) {
  
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

export default ConvocatoriasAdminDetailsPage;
