import Link from "next/link";
import React from "react";

function PresentationPage() {
  return (
    <main>
      <h1>Bienvenido a la página de convocatorias.</h1>
      <Link href="./">Regresar a la página principal.</Link>
      <h2>Checkea tus convocatorias: </h2>

      {/*
      
      Se debe crear un componente que muestre la lista de convocatorias disponibles
      y un poco de información al respecto.
      
      */}

      <Link href="./convocatorias/convocatoria-1">conv 1</Link>
      <Link href="./convocatorias/convocatoria-2">conv 2</Link>
      <Link href="./convocatorias/convocatoria-3">conv 3</Link>
    </main>
  );
}

export default PresentationPage;