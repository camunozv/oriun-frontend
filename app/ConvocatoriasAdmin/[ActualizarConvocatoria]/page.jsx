import UpdateConvocatoria from "@/components/ConvsPage/UpdateConvocatoria";
import React from "react";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/credentials_options";
import { redirect } from "next/navigation";

// A useEffect hook must be used to load the information corresponding to the call that is willing to be modified
// within the form, so that the user just has to update the informations he wants to change.

// The form will consist in a simple text fiel which has loaded the id of the call. Then the user shall select
// which information relative to the call he wanst to modify.
async function ActualizarConvocatoria({ params }) {
  let id = 0;

  try {
    const session = await getServerSession(options);
    if (!session) {
      redirect("/Ingreso");
    }
    id = params.ActualizarConvocatoria;
  } catch (error) {
    console.log(error);
    console.log('Error de sesion en actualizar convocatoria admin.');
    redirect("/Ingreso");
  }

  return (
    <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
      <UpdateConvocatoria id={id} />
    </main>
  );
}

export default ActualizarConvocatoria;
