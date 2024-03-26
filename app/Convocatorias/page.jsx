import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Filter from "@/components/ConvsPage/Filter";

// async function shareMeal({ formData }) {
// "use-server"; // This creates a soggneante "server-action". Which is a function guaranteed to funciton on the server.
// also async keyword must be added to guarantee it's a server action
// & only there.

// the form submission will be guaranteed to occur in the server side.kf
//   const meals = {
//     title: formData.get("title"),
//     name: formData.get("name"),
//   };
// }

function ConvocatoriasPage() {
  return (
    <>
      <main className="relative mx-auto overflow-hidden border-2 border-cyan-700 general-max-size p-6">
        main page pending to improve
      </main>
    </>
  );
}

export default ConvocatoriasPage;

/* <h1>Bienvenido a la página de convocatorias.</h1>
      <Link href="./">Regresar a la página principal.</Link>
      <h2>Checkea tus convocatorias: </h2>
      <form action={shareMeal}>
        <input type="text" id="title" name="title"></input>
        <input type="text" id="name" name="name"></input>
      </form>
      
      {/*
      
      Se debe crear un componente que muestre la lista de convocatorias disponibles
      y un poco de información al respecto.
      
      */
/*
      <Link href="./convocatorias/convocatoria-1">conv 1</Link>
      <Link href="./convocatorias/convocatoria-2">conv 2</Link>
      <Link href="./convocatorias/convocatoria-3">conv 3</Link> */
