import React from "react";
import CardConvocatorias from "@/components/ConvsPage/CardConvocatorias";

function ConvocatoriasAdminPage() {
  return (
    <>
      <main className="flex mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-6">
        <CardConvocatorias />
        <CardConvocatorias />
        <CardConvocatorias />
        <CardConvocatorias />
      </main>
    </>
  );
}

export default ConvocatoriasAdminPage;
