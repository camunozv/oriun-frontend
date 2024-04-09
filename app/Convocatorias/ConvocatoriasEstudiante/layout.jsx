import React from "react";
import NavbarConvocatorias from "@/components/ConvsPage/NavbarConvocatorias";
import { LINKS_ESTUDIANTE } from "@/constants";

function ConvocatoriasEstudianteLayout({ children }) {
  return (
    <>
      <NavbarConvocatorias links={LINKS_ESTUDIANTE} />
      {children}
    </>
  );
}

export default ConvocatoriasEstudianteLayout;
