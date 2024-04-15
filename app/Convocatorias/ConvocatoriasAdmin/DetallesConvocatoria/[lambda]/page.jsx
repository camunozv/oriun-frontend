"use client";
import React, { useEffect, useState } from "react";
import DetailsConvocatoria from "@/components/ConvsPage/DetailsConvocatoria";
import { useSession } from "next-auth/react";
import { apiAdminCalls } from "@/app/api/ConvocatoriasAdmin/adminGeneralCalls";
import { redirect } from "next/navigation";

function ConvocatoriasAdminDetailsPage({ params }) {
  const { data: session, status } = useSession({
    required:true,
    onUnauthenticated() {
      redirect('/api/auth/signin')
    }
  });

  const token = session?.access;
  const id = params.lambda;
  const [call, set_call] = useState({});

  useEffect(() => {
    apiAdminCalls
      .getAdminCallsDetails(id, token)
      .then((response) => set_call(response.data))
      .then((response) => console.log(response.data))
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
        <DetailsConvocatoria call={call} id={id} admin={true} />
      </main>
    );
  }
}

export default ConvocatoriasAdminDetailsPage;
