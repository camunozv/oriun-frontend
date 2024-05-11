"use client";
import { apiStudentApplications } from "@/app/api/ConvocatoriasEstudiante/studentApplications";
import ApplicationCard from "@/components/MyCallsPage/ApplicationCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import React, { useEffect, useState } from "react";

/* getAllStudentApplications
 * getRegionOfACall
 * getEmployeeCommmentsOnTheApplication
 * getDocumentLink
 * putModifiedDocument
 */

function MyCallsPage() {
  const [myApplications, setMyApplications] = useState([]);
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  const user_type = session?.type_user;
  const token = session?.access;

  useEffect(() => {
    apiStudentApplications
      .getAllApplications(token)
      .then((response) => {
        setMyApplications(response.data);
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
          <div className="grid grid-cols-3 w-full gap-6">
            {myApplications?.map((application) => (
              <ApplicationCard
                key={application.call}
                call={application.call}
                university_country={application.university_country}
                university_name={application.university_name}
                approved={application.approved}
                state_documents={application.state_documents}
              />
            ))}
          </div>
        </main>
      </>
    );
  }
}

export default MyCallsPage;
