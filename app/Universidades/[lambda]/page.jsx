"use client";
import { apiAdminUniversities } from "@/app/api/ConvocatoriasAdmin/adminUniversities";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

function UpdateUniversityPage({ params }) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  const user_type = session?.type_user;
  const token = session?.access;

  const id = params.lambda;
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const mySubmit = handleSubmit((data) => {
    console.log(data);

    apiAdminUniversities
      .putUniversities(
        id,
        data.name_university,
        data.webpage,
        data.region,
        data.country,
        data.city,
        data.academic_offer,
        data.exchange_info,
        token
      )
      .then((response) => {
        alert(response.data.mensaje);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
  });

  const handleClickDelete = () => {
    apiAdminUniversities
      .deleteUniverisitiesById(id, token)
      .then((response) => {
        alert(response.data.mensaje);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  if (!session) {
    return <div>{status}...</div>;
  } else if (user_type === "student") {
    redirect("/Convocatorias");
  } else {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <div className="flex flex-col justify-center items-center w-full rounded-lg shadow-lg p-6">
          <form onSubmit={mySubmit} className="w-full">
            <div className="w-full flex flex-col items-start justify-start gap-3">
              <label
                htmlFor="information_grid"
                className="font-semibold text-[20px] block"
              >
                Actualizar Universidad : {id}
              </label>
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
                  {...register("name_university", {
                    required: {
                      value: false,
                      message: "Nombre es requerido.",
                    },
                  })}
                  className="border-gray-300 border rounded-md outline-none"
                />

                {errors.name_university && (
                  <span className="text-[15px] underline text-black-500">
                    {errors.name_university.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="region" className="font-semibold">
                  Región
                </label>
                <select
                  id="region"
                  className="border-gray-300 border rounded-md outline-none bg-white"
                  {...register("region", {
                    required: {
                      value: false,
                      message: "La región es requerida.",
                    },
                  })}
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

                {errors.region && (
                  <span className="text-[15px] underline text-black-500">
                    {errors.region.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="country" className="font-semibold">
                  País
                </label>
                <input
                  id="country"
                  type="text"
                  placeholder="Nombre país"
                  {...register("country", {
                    required: {
                      value: false,
                      message: "País es requerido.",
                    },
                  })}
                  className="border-gray-300 border rounded-md outline-none"
                />

                {errors.country && (
                  <span className="text-[15px] underline text-black-500">
                    {errors.country.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="city" className="font-semibold">
                  Ciudad
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder="Nombre ciudad"
                  {...register("city", {
                    required: {
                      value: false,
                      message: "La ciudad es requerida.",
                    },
                  })}
                  className="border-gray-300 border rounded-md outline-none"
                />

                {errors.city && (
                  <span className="text-[15px] underline text-black-500">
                    {errors.city.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="Webpage" className="font-semibold">
                  Link página web
                </label>
                <input
                  id="webpage"
                  type="text"
                  placeholder="link aquí"
                  {...register("webpage", {
                    required: {
                      value: false,
                      message: "Página web es requerida",
                    },
                  })}
                  className="border-gray-300 border rounded-md outline-none"
                />

                {errors.webpage && (
                  <span className="text-[15px] underline text-black-500">
                    {errors.webpage.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="academic_offer" className="font-semibold">
                  Oferta Académica
                </label>
                <input
                  id="academic_offer"
                  type="text"
                  placeholder="link aquí"
                  {...register("academic_offer", {
                    required: {
                      value: false,
                      message: "Oferta académica es requerida.",
                    },
                  })}
                  className="border-gray-300 border rounded-md outline-none"
                />

                {errors.academic_offer && (
                  <span className="text-[15px] underline text-black-500">
                    {errors.academic_offer.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col justify-start items-left gap-1">
                <label htmlFor="exchange_info" className="font-semibold">
                  Información de Intercambio
                </label>
                <input
                  id="exchange_info"
                  type="text"
                  placeholder="link aquí"
                  {...register("exchange_info", {
                    required: {
                      value: false,
                      message: "Información de intercambio es requerida.",
                    },
                  })}
                  className="border-gray-300 border rounded-md outline-none"
                />

                {errors.exchange_info && (
                  <span className="text-[15px] underline text-black-500">
                    {errors.exchange_info.message}
                  </span>
                )}
              </div>
            </div>

            <div className="w-full flex flex-col items-start justify-start gap-3 mt-3">
              <button
                type="submit"
                className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-2"
              >
                Guardar
              </button>
            </div>
            <div className="w-full flex flex-col items-start justify-start gap-3 mt-3">
              <button
                type="button"
                className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-2"
                onClick={handleClickDelete}
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
