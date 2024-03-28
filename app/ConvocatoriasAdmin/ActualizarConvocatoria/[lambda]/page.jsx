import React from "react";
import CreationFormConvocatorias from "@/components/ConvsPage/CreationFormConvocatorias";

// A useEffect hook must be used to load the information corresponding to the call that is willed to be modified
// within the form, so that the user just has to update the informations he wants to change.

function ActualizarConvocatoria() {
  return (
    <>
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <CreationFormConvocatorias />
      </main>
    </>
  );
}

export default ActualizarConvocatoria;
