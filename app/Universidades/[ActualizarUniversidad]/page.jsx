"use client";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

function UpdateUniversityPage({ params }) {
  const id = params.ActualizarUniversidad;

  const createForm = (e) => {};

  const { data: session, status } = getSession();

  const token = session?.access;
  const user_type = session?.type_user;
  
  if (!session) {
    return <div>{status}...</div>;
  } else if (user_type === "student") {
    redirect("/Convocatorias");
  } else {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <div className="flex flex-col justify-center items-center w-full rounded-lg shadow-lg p-6">
          <form onSubmit={createForm} className="w-full">
            <div className="w-full flex flex-col items-start justify-start gap-3">
              <label
                htmlFor="information_grid"
                className="font-semibold text-[20px] block"
              >
                Actualizar Universidad : {id}
              </label>
              <p>Todos los campos deben llenarse.</p>
            </div>
            <div
              id="information_grid"
              className="p-6 grid grid-cols-3 justify-center items-center w-full gap-3"
            >
              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="name_university" className="font-semibold">
                  Nombre
                </label>
                <input
                  id="name_university"
                  type="text"
                  placeholder="Nombre universidad"
                  className="border-gray-300 border rounded-md outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="region" className="font-semibold">
                  Región
                </label>
                <select
                  id="region"
                  className="border-gray-300 border rounded-md outline-none bg-white"
                  placeholder=""
                >
                  <option value="">Selección...</option>
                  <option value="NA">Norte América</option>
                  <option value="LA">Latinoamérica</option>
                  <option value="EU">Europa</option>
                  <option value="OC">Oceanía</option>
                  <option value="AN">Uniandes</option>
                  <option value="SG">Convenio Sigueme/Nacional</option>
                </select>
              </div>

              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="country" className="font-semibold">
                  País
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="Nombre país"
                  className="border-gray-300 border rounded-md outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="city" className="font-semibold">
                  Ciudad
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Nombre ciudad"
                  className="border-gray-300 border rounded-md outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="Webpage" className="font-semibold">
                  Link página web
                </label>
                <input
                  id="webpage"
                  type="text"
                  placeholder="link aquí"
                  className="border-gray-300 border rounded-md outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="academic_offer" className="font-semibold">
                  Oferta Académica
                </label>
                <input
                  id="academic_offer"
                  type="text"
                  placeholder="link aquí"
                  className="border-gray-300 border rounded-md outline-none"
                />
              </div>

              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="exchange_info" className="font-semibold">
                  Información de Intercambio
                </label>
                <input
                  id="exchange_info"
                  type="text"
                  placeholder="link aquí"
                  className="border-gray-300 border rounded-md outline-none"
                />
              </div>
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-3 mt-3">
              <button
                type="submit"
                className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-2"
              >
                Registrar
              </button>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-3 mt-3">
              <button
                type="button"
                className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-2"
              >
                Eliminar
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

export default UpdateUniversityPage;
