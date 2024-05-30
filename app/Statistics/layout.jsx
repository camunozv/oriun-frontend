"use client";
import NavbarConvocatorias from "@/components/ConvsPage/NavbarConvocatorias";
import NavbarStatistics from "@/components/StatisticsPage/NavbarStatistics";
import { LINKS_ADMIN } from "@/constants";
import React from "react";

function GraphsLayout({ children }) {
  return (
    <>
      <NavbarConvocatorias links={LINKS_ADMIN}></NavbarConvocatorias>
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <NavbarStatistics />
        {children}
      </main>
    </>
  );
}

export default GraphsLayout;
