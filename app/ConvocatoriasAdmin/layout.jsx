import React from "react";
import Filter from "@/components/ConvsPage/Filter";
import NavbarConvocatorias from "@/components/ConvsPage/NavbarConvocatorias";
import { LINKS_ADMIN } from "@/constants";

function ConvocatoriasAdminLayout({ children }) {

  return (
    <>
      <NavbarConvocatorias links={LINKS_ADMIN}/>
      {children}
    </>
  );
}

export default ConvocatoriasAdminLayout;
