"use client";
import React, { useEffect, useState } from "react";
import DetailsConvocatoria from "@/components/ConvsPage/DetailsConvocatoria";
import { useSession } from "next-auth/react";
import { apiAdminCalls } from "@/app/api/ConvocatoriasAdmin/adminGeneralCalls";

function ConvocatoriasAdminDetailsPage({ params, open }) {
  const { data: session, status } = useSession();

  if (!session) {

    const [call, set_call] = useState({});
    useEffect(() => {}, []);
    return <div>{status}...</div>;
  }

  const id = params.lambda;
  const token = session.access;
  const [call, set_call] = useState({});

  useEffect(() => {
    apiAdminCalls
      .getAdminCallsDetails(id, token)
      .then((response) => set_call(response.data))
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <DetailsConvocatoria call={call} id={id} admin={true} />
      </main>
    </>
  );
}

export default ConvocatoriasAdminDetailsPage;
