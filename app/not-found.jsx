import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <main className="flex justify-between items-center max-w-[1580px]">
      <Link href="/Convocatorias">
        <h1 className="text-[60px] font-bold underline hover:blue-500">
          Regresar
        </h1>
      </Link>
    </main>
  );
}

export default NotFoundPage;
