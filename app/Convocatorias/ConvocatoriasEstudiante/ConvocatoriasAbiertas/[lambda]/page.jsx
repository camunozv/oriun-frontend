"use client";
// Main dependencies
import { useEffect, useState } from "react";
import { apiDetailsOpenCall } from "@/app/api/ConvocatoriasEstudiante/detailsOpenCall";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
// Imported components
import DetailsConvocatoria from "@/components/ConvsPage/DetailsConvocatoria";

function ConvocatoriasAbiertasDetailsPage({ params }) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/Convocatorias");
    },
  });

  const token = session?.access;
  const id = params.lambda;
  const [call, set_call] = useState({});

  useEffect(() => {
    apiDetailsOpenCall
      .getDetailsOpenCall(id, token)
      .then((response) => set_call(response.data))
      .catch((error) => console.log(error));
  }, [id, token]);

  if (!token) {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        {status}...
      </main>
    );
  } else {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <DetailsConvocatoria call={call} admin={false} id={id} open={true} />
      </main>
    );
  }
}

export default ConvocatoriasAbiertasDetailsPage;
