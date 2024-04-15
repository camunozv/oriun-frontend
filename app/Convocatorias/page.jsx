"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function ConvocatoriasPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  useEffect(() => {}, [session]);

  if (!session) {
    return <div>{status}...</div>;
  } else if (session.type_user == "student") {
    redirect("/Convocatorias/ConvocatoriasEstudiante");
  } else if (session.type_user == "employee") {
    redirect("/Convocatorias/ConvocatoriasAdmin");
  }
}

export default ConvocatoriasPage;
