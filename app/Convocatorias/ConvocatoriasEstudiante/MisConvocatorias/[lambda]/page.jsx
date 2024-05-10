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

  const [region, setRegion] = useState('');
  const [comments, setComments] = useState('');

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

    apiStudentApplications
      .getApplicationComments(call_id, token)
      .then((response) => {
        setComments(response.data.comment);
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
        <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
          <div>{region}</div>
          <div>{comments}</div>
        </main>
      </>
    );
  }
}

export default ModifyCallPage;
