import LoginForm from "@/components/LoginPage/LoginForm";
import Link from "next/link";
import React from "react";

function Ingreso() {
  return (
    <>
      <header className="mx-auto max-w-[1580px] py-10 flex items-center justify-left bg-figma_blue gap-3 border-green-500 border-2">
        <h1 className="text-[60px] font-bold text-black mx-2">ORIUN</h1>
      </header>

      <main className="mx-auto max-h-[1024px] max-w-[1580px] border-2 border-red-500 relative overflow-hidden flex items-center flex-col justify-center py-5 px-5">
        <LoginForm />
      </main>

      <footer className="mx-auto max-w-[1580px] py-10 flex items-center justify-left bg-figma_blue gap-3 border-green-500 border-2">
        Meine Footer
      </footer>
    </>
  );
}

export default Ingreso;
