import React from "react";
import NavbarConvocatorias from "@/app/components/ConvsPage/NavbarConvocatorias";
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
