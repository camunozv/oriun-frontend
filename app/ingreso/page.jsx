import Link from "next/link";
import React from "react";
import LoginForm from "@/components/login_form/login_form";

export default function AboutPage() {
  return (
    <main>
      <h1>Diseñar módulo de ingreso</h1>

      <LoginForm/>

      {/* <h2 className="bg-color-stone-580 text-center">Navbar pending</h2>
      <Link href="./convocatorias">Checkear Convocatorias</Link> */}
    </main>
  );
}
