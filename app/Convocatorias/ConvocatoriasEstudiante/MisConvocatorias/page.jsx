"use client";
import { apiStudentApplications } from "@/app/api/ConvocatoriasEstudiante/studentApplications";
import ApplicationCard from "@/components/MyCallsPage/ApplicationCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
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
        setMyApplications([response.data]);
        console.log(response.data)
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
          <div className="grid grid-cols-4 justify-center p-6">
                <div>
                    <p className="font-bold text-[20px] text-right">Aprobado 
                        <img src={"/images/Aprobada.jpeg"} className="inline object-contain h-10 w-10"/> 
                    </p>
                </div>
                <div>
                    <p className="font-bold text-[20px] text-center pr-5"> No Aprobado 
                        <img src={"/images/NoAprobada.jpeg"} className="inline object-contain h-10 w-10"/> 
                    </p>
                </div>
                <div>
                    <p className="font-bold text-[20px] text-left pr-5"> Pendiente por Revisión
                        <img src={"/images/Pendiente.jpeg"} className="inline object-contain h-10 w-10"/> 
                    </p>
                </div>
                <div>
                    <p className="font-bold text-[20px] text-start"> Modificación Solicitada
                        <img src={"/images/ModificacionSolicitada.jpeg"} className="inline object-contain h-10 w-10"/> 
                    </p>
                </div>
          </div> 
          <br/>
          <div className="grid grid-cols-3 w-full gap-6">
            {myApplications?.map((application) => (
              <ApplicationCard
                key={application.call}
                imageLink={application.flag_image_url}
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
