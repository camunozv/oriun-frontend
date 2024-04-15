"use client";
import { useEffect, useRef } from "react";
import { redirect } from "next/navigation";
import CreationFormConvocatorias from "@/components/ConvsPage/CreationFormConvocatorias";
import { useSession } from "next-auth/react";

function CrearConvocatoria() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/PreguntasFrecuentes");
    },
  });

  // Persistence fix pending
  let token = session?.access;

  useEffect(() => {
    token = session?.access;
  }, [token]);

  if (!token) {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <div>{status}...</div>
      </main>
    );
  } else {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <CreationFormConvocatorias token={token} />
      </main>
    );
  }
}

export default CrearConvocatoria;
