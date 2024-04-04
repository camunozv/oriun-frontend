import LoginForm from "@/app/components/LoginPage/LoginForm";
import Link from "next/link";
import React from "react";

function Ingreso() {
  return (
    <>
      <header className="mx-auto max-w-[3160px] py-10 flex items-center justify-left bg-figma_blue gap-3 px-7">
        <h1 className="text-[60px] font-bold text-black mx-2">ORIUN</h1>
      </header>

      <main className="mx-auto max-h-[4096px] max-w-[3160px] 
      relative overflow-hidden flex items-center flex-col justify-center lg:py-[108px] px-5">
        <LoginForm />
      </main>

      <footer className="mx-auto max-h-[4096px] max-w-[3160px] py-10 flex items-center justify-left bg-figma_blue gap-3" />
    </>
  );
}

export default Ingreso;
