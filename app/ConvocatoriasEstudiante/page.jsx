import React from "react";
import Filter from "@/components/ConvsPage/Filter";
import GridConvocatorias from "@/components/ConvsPage/GridConvocatorias";

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

async function ConvocatoriasEstudiantePage() {
  // const calls = await getCalls();

  return (
    <>
      <Filter />
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        {/* <GridConvocatorias admin={false} calls={calls} /> */}
        <h1 className="text-[40px] font-bold">
          Conv grid in comments; endpoints pending to be implemented.
        </h1>
      </main>
    </>
  );
}

export default ConvocatoriasEstudiantePage;
