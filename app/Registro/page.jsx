import RegisterForm from "@/components/RegisterPage/RegisterForm";
import Link from "next/link";
import React from "react";

// This component was created for TESTING PURPOSES ONLY & should not be included in the final production application.
function Registro() {
  return (
    <>
      <header className="mx-auto max-w-[3160px] py-10 flex items-center justify-left bg-figma_blue gap-3 px-7">
        <h1 className="text-[60px] font-bold text-black mx-2">ORIUN</h1>
      </header>

      <main className="mx-auto max-h-[4096px] max-w-[3160px] 
      relative overflow-hidden flex items-center flex-col justify-center lg:py-[108px] px-5">
        <RegisterForm />
      </main>

      <footer className="mx-auto max-h-[4096px] max-w-[3160px] py-10 flex items-center justify-left bg-figma_blue gap-3" />
    </>
  );
}

export default Registro;
