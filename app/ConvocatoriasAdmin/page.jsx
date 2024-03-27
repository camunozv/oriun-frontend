import React from "react";
import CardConvocatorias from "@/components/ConvsPage/CardConvocatorias";
import Modal from "@/components/ConvsPage/Modal";

function ConvocatoriasAdminPage() {
  // En esta parte debe ir el hook que realiza la petición a la api
  // en la parte donde están las CardConvocatorias debe ir un ciclo que recorra el
  // arreglo con los datos recibidos y renderize multiples card convocatorias.
  // Actualmente se probó con 6 componentes para ver como quedaba el maquetado.

  return (
    <>
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <div className="grid grid-cols-3 w-full gap-6">
          <Modal isVisible={true}/>
          <CardConvocatorias admin={true} />
          <CardConvocatorias admin={true} />
          <CardConvocatorias admin={true} />
          <CardConvocatorias admin={true} />
          <CardConvocatorias admin={true} />
          <CardConvocatorias admin={true} />
        </div>
      </main>
    </>
  );
}

export default ConvocatoriasAdminPage;
