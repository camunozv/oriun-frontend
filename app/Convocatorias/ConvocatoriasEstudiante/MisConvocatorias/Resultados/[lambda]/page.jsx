"use client";
import React, { useEffect, useState } from "react";
import ResultDetailsConv from "@/components/Results/ResultDetailsConv";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { apiStudentApplications } from "@/app/api/ConvocatoriasEstudiante/studentApplications";

function StudentResultsPage({ params }) {
  const { data: session, state } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/Convocatorias");
    },
  });

  const token = session?.access;
  const user_type = session?.type_user;
  const call_id = params.lambda;
  const [results, setResults] = useState();

  useEffect(() => {
    apiStudentApplications
      .getApplicationResults(call_id, token)
      .then((response) => {
        setResults(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  if (!session && !results) {
    return <div>{state}...</div>;
  } else if (user_type === "employee") {
    redirect("/Convocatorias");
  } else if (results?.application.approved == true) {
    return (
      <main className="flex gap-6 flex-col mt-4 mx-auto overflow-hidden max-w-[1580px] p-2 items-center justify-center">
        <h1 className="text-[45px] text-center font-bold">
          ¡{results?.message}!
        </h1>

        <ResultDetailsConv
          university={results?.application.university_name}
          country={results?.application.university_country}
          description={results?.application.call_description}
          student_id={results?.application.student_id}
        />
      </main>
    );
  } else if (results?.application.approved == false) {
    return (
      <main className="flex gap-6 flex-col mt-4 mx-auto overflow-hidden max-w-[1580px] p-2 items-center justify-center">
        <h1 className="text-[45px] text-center font-bold">
          ¡{results?.message}!
        </h1>

        <ResultDetailsConv
          university={results?.application.university_name}
          country={results?.application.university_country}
          description={results?.application.call_description}
          student_id={results?.application.student_id}
        />
      </main>
    );
  } else {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <h1 className="text-[45px] text-center font-bold">
          ¡{results?.message}!
        </h1>
        <br />
        <h1 className="text-[50px] font-bold">CONV : {results?.call}</h1>
        <div className="px-8 py-10">
          <ResultDetailsConv
            university={results?.application.university_name}
            country={results?.application.university_country}
            description={results?.application.call_description}
            student_id={results?.application.student_id}
          />
        </div>
      </main>
    );
  }
}
export default StudentResultsPage;
