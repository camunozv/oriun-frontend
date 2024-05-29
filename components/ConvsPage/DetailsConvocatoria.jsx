"use client";
import React from "react";
import { apiAdminCalls } from "@/app/api/ConvocatoriasAdmin/adminGeneralCalls";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function DetailsConvocatoria({ call, admin, id, open }) {
  const { data: session, status } = useSession({
    required: true,

    onUnauthenticated() {
      signOut();
    },
  });

  if (!session) {
    return <div>{status}...</div>;
  }

  const token = session.access;

  function handleClickDelete(event) {
    apiAdminCalls
      .deleteAdminCalls(id, token)
      .then((response) => alert(response.status.toString()))
      .catch((error) => console.log(error));
  }

  if (admin == true && call) {
    if (call.active === true) {
      // open admin calls
      return (
        <section className="flex justify-start items-left flex-col gap-2">
          <h1 className="font-bold text-[40px] underline">Conv No - {id}</h1>
          <br />
          <h2 className="font-bold text-[30px] flex items-center justify-between">
            Oferentes: {call.university_id?.name} {/**Put "?" symbol */}
          </h2>
          <br />
          <h3 className="font-bold text-[30px] flex items-center justify-between">
            Cierre: {call.deadline}
          </h3>
          <label
            htmlFor="description paragraph"
            className="font-bold text-[25px]"
          >
            Descripción:
          </label>
          <p id="description paragraph">{call.description}</p>
          <label htmlFor="requisites" className="font-bold text-[25px]">
            Requisitos:
          </label>
          <ul id="requisites">
            <li>1. PAPPA mínimo: {call.min_papa}</li>
            <li>2. Avance mínimo: {call.min_advance}</li>
          </ul>
          <label htmlFor="requirements" className="font-bold text-[25px]">
            Información General:
          </label>
          <ul id="requirements">
            <li>1. Cupos disponibles: {call.available_slots}</li>
            <li>2. Formato: {call.format}</li>
            <li>3. Año: {call.year}</li>
            <li>4. Semestre: {call.semester}</li>
            <li>5. Nivel de estudios: {call.study_level}</li>
            <li>6. Idioma: {call.language}</li>
          </ul>
          <label htmlFor="note" className="font-bold text-[25px]">
            Nota
          </label>
          <p id="note">{call.note}</p>

          <label htmlFor="active" className="font-bold text-[25px]">
            Activa
          </label>
          <p id="active">{call.active}</p>

          <div className="flex gap-3">
            <button
              type="button"
              className="flex-1  font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
              onClick={handleClickDelete}
            >
              Eliminar
            </button>

            <button
              type="button"
              className="flex-1  font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            >
              <Link
                href={`/Convocatorias/ConvocatoriasAdmin/Postulaciones/VerPostulaciones/${id}`}
              >
                Ver Postulaciones
              </Link>
            </button>

            <button
              type="button"
              className="flex-1  font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            >
              <Link
                href={`/Convocatorias/ConvocatoriasAdmin/VerResultadosConv/${id}`}
              >
                Ver Resultados
              </Link>
            </button>
          </div>
        </section>
      );
    } else {
      // closed admin calls
      return (
        <section className="flex justify-start items-left flex-col gap-2">
          <h1 className="font-bold text-[40px] underline">Conv No - {id}</h1>
          <br />
          <h2 className="font-bold text-[30px] flex items-center justify-between">
            Oferentes: {call.university_id?.name} {/**Put "?" symbol */}
          </h2>
          <br />
          <h3 className="font-bold text-[30px] flex items-center justify-between">
            Cerrada desde: {call.deadline}
          </h3>
          <label
            htmlFor="description paragraph"
            className="font-bold text-[25px]"
          >
            Descripción:
          </label>
          <p id="description paragraph">{call.description}</p>
          <label htmlFor="requisites" className="font-bold text-[25px]">
            Requisitos:
          </label>
          <ul id="requisites">
            <li>1. PAPPA mínimo: {call.min_papa}</li>
            <li>2. Avance mínimo: {call.min_advance}</li>
          </ul>
          <label htmlFor="requirements" className="font-bold text-[25px]">
            Información General:
          </label>
          <ul id="requirements">
            <li>1. Cupos disponibles: {call.available_slots}</li>
            <li>2. Formato: {call.format}</li>
            <li>3. Año: {call.year}</li>
            <li>4. Semestre: {call.semester}</li>
            <li>5. Nivel de estudios: {call.study_level}</li>
            <li>6. Idioma: {call.language}</li>
          </ul>

          <label htmlFor="adjudication" className="font-bold text-[25px]">
            Detalles de Adjudicación:
          </label>
          <ul id="adjudication">
            <li>1. PAPPA ganador más alto: {call.highest_papa_winner}</li>
            <li>2. PAPPA ganador más bajo: {call.minimum_papa_winner}</li>
            <li>3. Número de ganadores: {call.selected}</li>
          </ul>
          <label htmlFor="note" className="font-bold text-[25px]">
            Nota
          </label>
          <p id="note">{call.note}</p>

          <div className="flex">
            <button
              type="button"
              className="flex-1  font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
              onClick={handleClickDelete}
            >
              Eliminar
            </button>

            <button
              type="button"
              className="flex-1  font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            >
              <Link
                href={`/Convocatorias/ConvocatoriasAdmin/Postulaciones/VerPostulaciones/${id}`}
              >
                Ver Postulaciones
              </Link>
            </button>
            <button
              type="button"
              className="flex-1  font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2 pr-3"
            >
              <Link
                href={`/Convocatorias/ConvocatoriasAdmin/VerResultadosConv/${id}`}
              >
                Ver Resultados
              </Link>
            </button>
          </div>
        </section>
      );
    }
  } else if (call && !open) {
    return (
      <section className="flex justify-start items-left flex-col gap-2">
        <h1 className="font-bold text-[40px] underline">Conv No - {id}</h1>
        <br />
        <h2 className="font-bold text-[30px] flex items-center justify-between">
          Oferentes: {call.university_id?.name}
        </h2>
        <br />
        <h3 className="font-bold text-[30px] flex items-center justify-between">
          Cerrada desde: {call.deadline}
        </h3>
        <label
          htmlFor="description paragraph"
          className="font-bold text-[25px]"
        >
          Descripción:
        </label>
        <p id="description paragraph">{call.description}</p>
        <label htmlFor="requisites" className="font-bold text-[25px]">
          Requisitos:
        </label>
        <ul id="requisites">
          <li>1. PAPPA mínimo: {call.min_papa}</li>
          <li>2. Avance mínimo: {call.min_advance}</li>
        </ul>
        <label htmlFor="requirements" className="font-bold text-[25px]">
          Información General:
        </label>
        <ul id="requirements">
          <li>1. Cupos disponibles: {call.available_slots}</li>
          <li>2. Formato: {call.format}</li>
          <li>3. Año: {call.year}</li>
          <li>4. Semestre: {call.semester}</li>
        </ul>

        <label htmlFor="adjudication" className="font-bold text-[25px]">
          Detalles de Adjudicación:
        </label>
        <ul id="adjudication">
          <li>1. PAPPA ganador más alto: {call.highest_papa_winner}</li>
          <li>2. PAPPA ganador más bajo: {call.minimum_papa_winner}</li>
          <li>3. Número de ganadores: {call.selected}</li>
        </ul>
        <label htmlFor="note" className="font-bold text-[25px]">
          Nota
        </label>
        <p id="note">{call.note}</p>
      </section>
    );
  } else if (call) {
    return (
      <section className="flex justify-start items-left flex-col gap-2">
        <h1 className="font-bold text-[40px] underline">Conv No - {id}</h1>
        <br />
        <h2 className="font-bold text-[30px] flex items-center justify-between">
          Oferentes: {call.university_id?.name}
        </h2>
        <br />
        <h3 className="font-bold text-[30px] flex items-center justify-between">
          Cierre: {call.deadline}
        </h3>
        <label
          htmlFor="description paragraph"
          className="font-bold text-[25px]"
        >
          Descripción:
        </label>
        <p id="description paragraph">{call.description}</p>
        <label htmlFor="requisites" className="font-bold text-[25px]">
          Requisitos:
        </label>
        <ul id="requisites">
          <li>1. PAPPA mínimo: {call.min_papa}</li>
          <li>2. Avance mínimo: {call.min_advance}</li>
        </ul>
        <label htmlFor="requirements" className="font-bold text-[25px]">
          Información General:
        </label>
        <ul id="requirements">
          <li>1. Cupos disponibles: {call.available_slots}</li>
          <li>2. Formato: {call.format}</li>
          <li>3. Año: {call.year}</li>
          <li>4. Semestre: {call.semester}</li>
        </ul>
        <label htmlFor="note" className="font-bold text-[25px]">
          Nota
        </label>
        <p id="note">{call.note}</p>
      </section>
    );
  } else {
    return (
      <section className="flex justify-start items-left flex-col gap-2">
        <h1 className="font-bold text-[40px] underline">
          Buscando Convocatoria
        </h1>
        <br />
      </section>
    );
  }
}

export default DetailsConvocatoria;
