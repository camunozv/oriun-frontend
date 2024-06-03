"use client";
import { adminApplications } from "@/app/api/ConvocatoriasAdmin/adminApplications";
import CardEstudiante from "./CardEstudiante";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { apiChooseWinner } from "@/app/api/ConvocatoriasAdmin/adminChooseWinner";

function ResultadosPostulantes({ params }) {
  const [applications, setApplcations] = useState([]);

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  const token = session?.access;
  const user_type = session?.type_user;
  const id = params.lambda;

  useEffect(() => {
    apiChooseWinner
      .getGeneralApplicantsNoOrder(id, token)
      .then((response) => {
        setApplcations(response.data);
        console.log('no order implemented');
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  const handleVerifAssignment = () => {
    apiChooseWinner
      .getVerificationAssignWinners(id, token)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        alert(error.response.data.Error);
        console.log(error);
      });
  };

  const handleGeneral = () => {
    apiChooseWinner
      .getGeneralAppplicantsOrder(id, token)
      .then((response) => {
        setApplcations(response.data);
        console.log(response.data, "1");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDocState = () => {
    apiChooseWinner
      .getGeneralDocumentsOrder(id, token)
      .then((response) => {
        setApplcations(response.data);
        console.log(response.data, "2");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePapa = () => {
    apiChooseWinner
      .getGeneralDocumentsPAPA(id, token)
      .then((response) => {
        setApplcations(response.data);
        console.log(response.data, "3");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAdvance = () => {
    apiChooseWinner
      .getGeneralDocumentsAdvance(id, token)
      .then((response) => {
        setApplcations(response.data);
        console.log(response.data, "4");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePbm = () => {
    apiChooseWinner
      .getGeneralDocumentsPBM(id, token)
      .then((response) => {
        setApplcations(response.data);
        console.log(response.data, "5");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCloseCall = () => {
    apiChooseWinner
      .postCloseCall(id, token)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleOpenCall = () => {
    apiChooseWinner
      .postOpenCall(id, token)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        
        console.log(error);
      });
  };

  if (!session) {
    return <div>{status} ...</div>;
  } else if (user_type === "student") {
    redirect("/Convocatorias");
  } else {
    return (
      <>
        <div className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 flex flex-col justify-center items-center w-full rounded-lg shadow-lg p-6">
          <div className="w-full flex flex-col items-start justify-start gap-3">
            <label
              htmlFor="information_grid"
              className="font text-[20px] block"
            >
              En esta sección se muestran las postulaciones de la Convocatoria{" "}
              {id}, con el siguiente menu podra filtrar las postulaciones por el
              parametro que se necesite para seleccionar los ganadores.
            </label>
          </div>

          <div className="flex items-center justify-between p-4 border border-gray-300 rounded-xl shadow-sm">
            <span className="text-black font-bold px-5">Ordene por:</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleVerifAssignment}
                className="flex transition-all items-center justify-center gap-3 border-2 rounded-full  py-2 font-semibold bg-blue-600 border-blue-600 text-white px-5 mx-2 hover:text-figma_blue hover:bg-white"
              >
                Verificar asignación de Ganadores
              </button>
              <button
                type="button"
                onClick={handleGeneral}
                className="flex transition-all items-center justify-center gap-3 border-2 rounded-full  py-2 font-semibold bg-blue-600 border-blue-600 text-white px-5 mx-2 hover:text-figma_blue hover:bg-white"
              >
                General
              </button>

              <button
                type="button"
                onClick={handleDocState}
                className="flex transition-all items-center justify-center gap-3 border-2 rounded-full  py-2 font-semibold bg-blue-600 border-blue-600 text-white px-5 mx-2 hover:text-figma_blue hover:bg-white"
              >
                Estado docs
              </button>

              <button
                type="button"
                onClick={handlePapa}
                className="flex transition-all items-center justify-center gap-3 border-2 rounded-full  py-2 font-semibold bg-blue-600 border-blue-600 text-white px-5 mx-2 hover:text-figma_blue hover:bg-white"
              >
                PAPA
              </button>

              <button
                type="button"
                onClick={handleAdvance}
                className="flex transition-all items-center justify-center gap-3 border-2 rounded-full  py-2 font-semibold bg-blue-600 border-blue-600 text-white px-5 mx-2 hover:text-figma_blue hover:bg-white"
              >
                Avance
              </button>

              {/* <button
                type="button"
                className="flex transition-all items-center justify-center gap-3 border-2 rounded-full  py-2 font-semibold bg-blue-600 border-blue-600 text-white px-5 mx-2 hover:text-figma_blue hover:bg-white"
              >
                Idioma
              </button> */}

              <button
                type="button"
                onClick={handlePbm}
                className="flex transition-all items-center justify-center gap-3 border-2 rounded-full  py-2 font-semibold bg-blue-600 border-blue-600 text-white px-5 mx-2 hover:text-figma_blue hover:bg-white"
              >
                PBM
              </button>
            </div>
          </div>
        </div>

        <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
          {applications?.map((application) => (
            <CardEstudiante
              key={application.student_id}
              idEstudiante={application.student_id}
              nombreEstudiante={application.student_name}
              papa={application.student_PAPA}
              avance={application.student_advance}
              sedes={application.student_headquarter}
              idioma={application.language}
              pbm={application.student_PBM}
              estadoDocs={application.state_documents}
              idCall={id}
              token={token}
            />
          ))}

          <div className="flex">
            <button
              type="button"
              onClick={handleCloseCall}
              className="flex-1 mr-2 font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            >
              Cerrar Convocatoria
            </button>

            <button
              type="button"
              onClick={handleOpenCall}
              className="flex-1 ml-2 font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            >
              Abrir Convocatoria
            </button>
          </div>
        </main>
      </>
    );
  }
}
export default ResultadosPostulantes;
