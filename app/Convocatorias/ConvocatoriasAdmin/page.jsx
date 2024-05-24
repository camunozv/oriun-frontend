"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function ConvocatoriasAdminPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/Convocatorias");
    },
  });
  const user_type = session?.type_user;

  if (!session) {
    return <div>{status}...</div>;
  } else if (user_type === "student") {
    redirect("/Convocatorias");
  } else {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <h1 className="text-[40px] font-bold">¡Bienvenido Señor Emplead@!</h1>
        <h2 className="text-[20px]">
          Click en los links de arriba para empezar a consultar.
        </h2>
      </main>
    );
  }
}

export default ConvocatoriasAdminPage;
