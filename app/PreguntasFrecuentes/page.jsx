"use client";
import React, { useEffect, useState } from "react";
import NavbarConvocatorias from "@/components/ConvsPage/NavbarConvocatorias";
import preguntas from "@/constants/preguntas.json";
import { useSession } from "next-auth/react";
import { LINKS_ADMIN, LINKS_ESTUDIANTE } from "@/constants";

function PreguntasFrecuentesPage() {
  const [selectedMessage, setSelectedMessage] = useState("");
  const [ansTitle, setAnsTitle] = useState("");
  const handleClick = (message, ansTitle) => {
    setSelectedMessage(message);
    setAnsTitle(ansTitle);
  };

  const { data: session, status } = useSession({ required: true });

  const type_user = session?.type_user;

  useEffect(() => {}, [type_user]);

  if (!type_user) {
    return (
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <div>{status}...</div>
      </main>
    );
  } else if (type_user === "student") {
    return (
      <>
        <NavbarConvocatorias links={LINKS_ESTUDIANTE} />
        <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
          <div className="grid grid-cols-2 gap-2">
            {selectedMessage === "" ? (
              <div className="pr-12 pt-10 pb-10">
                <h1 className="text-black font-bold text-[35px]">
                  Bienvenidos a la sección de Preguntas Frecuentes de ORIUN
                </h1>
                <br />
                <p className="text-2xl text-justify">
                  En está sección encuentra las preguntas frecuentes que se
                  tienen al realizar un proceso de movilidad en la ORI. Por
                  favor, selecciona la pregunta, para que se muestre la
                  respuesta. Cualquier otra inquietud se puede comunicar al
                  siguiente correo electrónico ori_bog@unal.edu.co{" "}
                </p>
              </div>
            ) : (
              <div className="pr-12 pt-10 pb-10">
                <h1 className="text-black font-bold text-[35px] text-justify">
                  {selectedMessage}
                </h1>
                <br />
                <div dangerouslySetInnerHTML={{ __html: ansTitle }} />
              </div>
            )}

            <div className="pl-5 pr-20 pt-10">
              <br />
              {preguntas.map((item, index) => (
                <div key={index}>
                  <button
                    type="button"
                    className={
                      "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                    }
                    onClick={() => handleClick(item.title, item.ans_title)}
                  >
                    {item.title}
                  </button>

                  <br />
                </div>
              ))}
            </div>
          </div>
        </main>
      </>
    );
  }
  return (
    <>
      <NavbarConvocatorias links={LINKS_ADMIN} />
      <main className="relative mt-4 mx-auto overflow-hidden max-w-[1580px] gap-3 p-2">
        <div className="grid grid-cols-2 gap-2">
          {selectedMessage === "" ? (
            <div className="pr-12 pt-10 pb-10">
              <h1 className="text-black font-bold text-[35px]">
                Bienvenidos a la sección de Preguntas Frecuentes de ORIUN
              </h1>
              <br />
              <p className="text-2xl text-justify">
                En está sección encuentra las preguntas frecuentes que se tienen
                al realizar un proceso de movilidad en la ORI. Por favor,
                selecciona la pregunta, para que se muestre la respuesta.
                Cualquier otra inquietud se puede comunicar al siguiente correo
                electrónico ori_bog@unal.edu.co{" "}
              </p>
            </div>
          ) : (
            <div className="pr-12 pt-10 pb-10">
              <h1 className="text-black font-bold text-[35px] text-justify">
                {selectedMessage}
              </h1>
              <br />
              <div dangerouslySetInnerHTML={{ __html: ansTitle }} />
            </div>
          )}

          <div className="pl-5 pr-20 pt-10">
            <br />
            {preguntas.map((item, index) => (
              <div key={index}>
                <button
                  type="button"
                  className={
                    "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                  }
                  onClick={() => handleClick(item.title, item.ans_title)}
                >
                  {item.title}
                </button>

                <br />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default PreguntasFrecuentesPage;
