"use client";
import React from "react";
import CardResultadosEmp from "@/components/Results/CardResultadosEmp";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

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

  if (!session) {
    return <div>{state}...</div>;
  } else if (user_type === "student") {
    redirect("/Convocatorias");
  } else {
    return (
      <>
        <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
          <h1 className="font-bold text-[40px] underline text-center">
            Conv No
          </h1>
          <br />
          <section className="flex items-center justify-center w-[1580px]">
            <form className="flex gap-6 justify-center items-center w-[600px] border border-black px-3 py-2 rounded-lg">
              <input type="text" className="border-gray-300 border rounded-md outline-none" placeholder="ID Estudiante"></input>
              
              <select placeholder={null} className="border-gray-300 border rounded-md outline-none bg-white">
                <option value={null}>Aprobado...</option>
                <option value="true">Si</option>
                <option value="false">No</option>
              </select>

              <div className="p-2">
                <button
                  type="submit"
                  className="font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2 px-10"
                >
                  Filtrar
                </button>
              </div>
            </form>
          </section>
          <br />
          <div className="grid grid-cols-2 justify-center">
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
          </div>
          <br />
          <div className="grid grid-cols-3">
            <div className="p-2">
              <CardResultadosEmp StudentResult="Aprobado" />
            </div>
            <div className="p-2">
              <CardResultadosEmp StudentResult="Aprobado" />
            </div>
            <div className="p-2">
              <CardResultadosEmp StudentResult="No Aprobado" />
            </div>
          </div>
        </main>
      </>
    );
  }
}
export default ResultConvAdmin;
