"use client";
import { useEffect, useRef } from "react";
import { redirect } from "next/navigation";
import CreationFormConvocatorias from "@/components/ConvsPage/CreationFormConvocatorias";
import { useSession } from "next-auth/react";

function CrearConvocatoria() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  // Persistence fix pending
  let token = session?.access;
  let user_type = session?.type_user;

  useEffect(() => {
    token = session?.access;
    user_type = session?.type_user;
  }, [token, user_type]);

  if (!token) {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <div>{status}...</div>
      </main>
    );
  } else if (user_type === "student") {
    redirect("/Convocatorias");
  } else {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <CreationFormConvocatorias token={token} />
      </main>
    );
  }
}

export default CrearConvocatoria;
