import React from "react";
// The purpose of this component is to show the functionality of our website related with call/calls for purposals

// flex-col: arranges flex elements from a flex container in column direcion. Which allows stacking.
// py-10 pb-32: pixels added to the bottom with pb-32 are added to the same pixels (10) defined by py-10 (pixels converted to rem)

function Convocatorias() {
  return (
    <section className="mx-auto max-w-[1580px] border-2 border-cyan-500 flex flex-col 
    px-6 lg:px-20 3xl:px-0 gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row" >
      Seccion de convocatorias / pendiente por implementar en el main page.
    </section>
  );
}

export default Convocatorias;
