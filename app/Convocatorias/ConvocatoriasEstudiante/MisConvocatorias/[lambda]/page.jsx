"use client";
import { apiStudentApplications } from "@/app/api/ConvocatoriasEstudiante/studentApplications";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

function ModifyCallPage({ params }) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  const [region, setRegion] = useState({});
  const call_id = params.lambda;
  const token = session?.access;
  const user_type = session?.type_user;

  useEffect(() => {
    apiStudentApplications
      .getRegionFromCall(call_id, token)
      .then((response) => {
        setRegion(response.data.region);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  if (!session) {
    return <div>{status}...</div>;
  } else if (user_type === "employee") {
    redirect("/Convocatorias");
  } else {
    return (
      <>
        <main>
          Wir werden ein Component bauen, das uns erlauben wird, ein besser GUI
          zu haben. Wir werden ein Formulär verwenden, die die Gebiete verwenden
          müss, um zu wissen, welche Dokumente von den Studenten hochgelädt
          werden müssen. Student Gebiet.
          <div>{region}</div>
        </main>
      </>
    );
  }
}

export default ModifyCallPage;
