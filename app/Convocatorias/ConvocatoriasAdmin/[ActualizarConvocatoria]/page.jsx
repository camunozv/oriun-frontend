"use client";
import UpdateConvocatoria from "@/components/ConvsPage/UpdateConvocatoria";
import { useSession } from "next-auth/react";

// A useEffect hook must be used to load the information corresponding to the call that is willing to be modified
// within the form, so that the user just has to update the informations he wants to change.

// The form will consist in a simple text fiel which has loaded the id of the call. Then the user shall select
// which information relative to the call he wanst to modify.
function ActualizarConvocatoria({ params }) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {},
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
