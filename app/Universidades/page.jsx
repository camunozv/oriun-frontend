"use client";
import UniversitiesCard from "@/components/UniversitiesPage/UniversitiesCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiAdminUniversities } from "../api/ConvocatoriasAdmin/adminUniversities";

function UniversitiesMainPage() {
  const [myUniversities, setMyUniversities] = useState([]);

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  let token = session?.access;
  let user_type = session?.type_user;

  const { register, handleSubmit, reset } = useForm();

  const mySubmit = handleSubmit((data) => {
    if (data.idUniversity !== "") {
      apiAdminUniversities
        .getUniversitiesById(data.idUniversity, token)
        .then((response) => {
          setMyUniversities([response.data]);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      apiAdminUniversities
        .getAllUniversities(token)
        .then((response) => {
          setMyUniversities(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    reset();
  });

  useEffect(() => {
    apiAdminUniversities
      .getAllUniversities(token)
      .then((response) => {
        setMyUniversities(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  if (!token) {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-4 p-2">
        {status}...
      </main>
    );
  } else if (user_type === "student") {
    redirect("/Convocatorias");
  } else {
    return (
      <>
        <form
          onSubmit={mySubmit}
          className="overflow-hidden flex items-center justify-between mx-auto max-w-[1580px] max-h-[1024px] border-2 border-gray-10 p-5 shadow-lg rounded-xl"
        >
          <h2 className="block font-bold">Buscar Universidades:</h2>
          <div className="flex items-center justify-between gap-3">
            <input
              type="text"
              placeholder="id Universidad"
              {...register("idUniversity")}
              className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            />
          </div>

          <div className="w-40">
            <button
              type="submit"
              className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            >
              Buscar
            </button>
          </div>
        </form>

        <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-4 p-2">
          <Link href="/Universidades/CrearUniversidad" className="">
            <p className="underline pb-3 font-bold">
              Registrar una universidad
            </p>
          </Link>
          <div className="grid grid-cols-3 w-full gap-6">
            {myUniversities?.map((university) => (
              <UniversitiesCard
                key={university.id}
                id={university.id}
                country={university.country}
                city={university.city}
                webpage={university.webpage}
                exchange_info={university.exchange_info}
                name={university.name}
                academic_offer={university.academic_offer}
                region={university.region}
              />
            ))}
          </div>
        </main>
      </>
    );
  }
}

export default UniversitiesMainPage;
