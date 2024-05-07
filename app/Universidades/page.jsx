"use client";
import UniversitiesCard from "@/components/UniversitiesPage/UniversitiesCard";
import { useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import React, { useState } from "react";

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
        <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-4 p-2">
          <Link href="/Universidades/CrearUniversidad" className="">
            <p className="underline pb-3 font-bold">
              Registrar una universidad
            </p>
          </Link>
          <div className="grid grid-cols-3 w-full gap-6">
            <UniversitiesCard
              id={1}
              country="colombia"
              city="bogota"
              webpage="zzz"
              exchange_info="good night"
              name="akakaka"
              region="hola"
            />
            <UniversitiesCard
              id={1}
              country="colombia"
              city="bogota"
              webpage="zzz"
              exchange_info="good night"
              name="akakaka"
              region="hola"
            />

            {myUniversities?.map((university) => (
              <UniversitiesCard
                key = {university.id}
                id={university.id}
                country={university.country}
                city={university.city}
                webpage={university.webpage}
                exchange_info={university.exchange_info}
                name={university.name}
                region={university.name}
              />
            ))}
          </div>
        </main>
      </>
    );
  }
}

export default UniversitiesMainPage;
