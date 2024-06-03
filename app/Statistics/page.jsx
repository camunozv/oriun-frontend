"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function StatisticsPage() {
  const { data: session, state } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/Convocatorias");
    },
  });

  if (!session) {
    return <div>{state}...</div>;
  } else {
    return <div></div>;
  }
}

export default StatisticsPage;
