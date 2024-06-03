"use client";
import React, { useState } from "react";
import CardResultadosEmp from "@/components/Results/CardResultadosEmp";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { adminApplications } from "@/app/api/ConvocatoriasAdmin/adminApplications";

function ResultConvAdmin({ params }) {
  const id = params.lambda;

  const { data: session, state } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/Convocatorias");
    },
  });

  const token = session?.access;
  const user_type = session?.type_user;

  const { register, handleSubmit, reset } = useForm();

  const [studentApplications, setStudentsApplications] = useState([]);

  const mySubmit = handleSubmit((data) => {
    if (data.approved === "Aprobado..." || data.approved === "") {
      data.approved = null;
    }

    if (data.student_id === "") {
      data.student_id = null;
    }

    adminApplications
      .getAllResultsCall(id, data.approved, data.student_id, token)
      .then((response) => {
        console.log(response.data);
        setStudentsApplications(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    reset();
  });

  if (!session) {
    return <div>{state}...</div>;
  } else if (user_type === "student") {
    redirect("/Convocatorias");
  } else {
    return (
      <>
        <main className="flex flex-col items-center justify-center mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
          <h1 className="font-bold text-[40px] underline text-center">
            Convocatoria No. {id}
          </h1>
          <br />

          <form
            onSubmit={mySubmit}
            className="flex gap-6 justify-center items-center w-[600px] border border-black px-3 py-2 rounded-lg"
          >
            <input
              type="text"
              className="border-gray-300 border rounded-md outline-none"
              {...register("student_id")}
              placeholder="ID Estudiante"
            ></input>

            <select
              placeholder=""
              {...register("approved")}
              className="border-gray-300 border rounded-md outline-none bg-white"
            >
              <option value="">Aprobado...</option>
              <option value="true">Si</option>
              <option value="false">No</option>
            </select>

            <div className="p-2">
              <button
                type="submit"
                className="font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2 px-10"
              >
                Buscar
              </button>
            </div>
          </form>

          <br />
          <div className="grid grid-cols-3 justify-center">
            <div className="px-3">
              <p className="font-bold text-[20px] text-right">
                Aprobado
                <img
                  src={"/images/Aprobada.jpeg"}
                  className="inline object-contain h-10 w-10"
                />
              </p>
            </div>
            <div className="px-3">
              <p className="font-bold text-[20px] text-left">
                {" "}
                No Aprobado
                <img
                  src={"/images/NoAprobada.jpeg"}
                  className="inline object-contain h-10 w-10"
                />
              </p>
            </div>
            <div className="px-3">
              <p className="font-bold text-[20px] text-left">
                {" "}
                No Aprobado
                <img
                  src={"/images/Pendiente.jpeg"}
                  className="inline object-contain h-10 w-10"
                />
              </p>
            </div>
          </div>
          <br />
          <div className="grid grid-cols-3 w-full gap-6">
            {studentApplications?.map((application) => (
              <CardResultadosEmp
                imageLink={application.flag_image_url}
                key={application.student_id}
                student_id={application.student_id}
                student_name={application.student_name}
                university_name={application.university_name}
                university_country={application.university_country}
                call={application.call}
                approved={application.approved}
              />
            ))}
          </div>
        </main>
      </>
    );
  }
}
export default ResultConvAdmin;
