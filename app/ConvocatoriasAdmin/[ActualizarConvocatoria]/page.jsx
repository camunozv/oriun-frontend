import UpdateConvocatoria from "@/components/ConvsPage/UpdateConvocatoria";
import React from "react";

// A useEffect hook must be used to load the information corresponding to the call that is willing to be modified
// within the form, so that the user just has to update the informations he wants to change.

// The form will consist in a simple text fiel which has loaded the id of the call. Then the user shall select
// which information relative to the call he wanst to modify.
function ActualizarConvocatoria({params}) {

  const convocatoria = params.ActualizarConvocatoria;
  console.log(convocatoria.code);

  return (
    <>
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <UpdateConvocatoria />
        <h1>{convocatoria}</h1>
      </main>
    </>
  );
}

export default ActualizarConvocatoria;
