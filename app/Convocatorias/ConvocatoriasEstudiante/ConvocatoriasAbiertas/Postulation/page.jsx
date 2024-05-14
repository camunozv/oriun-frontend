"use client";
import { apiStudentApplications } from "@/app/api/ConvocatoriasEstudiante/studentApplications";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function PostulationInformationPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });
  // student/info-application/
  // student/info-application/

  const token = session?.access;
  const user_type = session?.type_user;

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    apiStudentApplications
      .getStudentInformation(token)
      .then((response) => {
        setUserInfo(response.data);
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
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <h1 className="px-6 text-black font-bold text-[35px]">
          Información registrada
        </h1>
        <pre>{JSON.stringify(userInfo,null, 2)}</pre>
        <Link href="/Convocatorias/ConvocatoriasEstudiante/ConvocatoriasAbiertas" className="underline font-bold">
            Volver a convocatorias
        </Link>
      </main>
    );
  }
}

export default PostulationInformationPage;
