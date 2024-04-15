"use client";
import UpdateConvocatoria from "@/components/ConvsPage/UpdateConvocatoria";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function ActualizarConvocatoria({ params }) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/api/auth/signin')
    },
  });

  if (!session) {
    return <div>{status}...</div>;
  }

  const token = session.access;
  const id = params.ActualizarConvocatoria;

  return (
    <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
      <UpdateConvocatoria id={id} token={token} />
    </main>
  );
}

export default ActualizarConvocatoria;
