"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import registerHandler from "@/app/api/auth/register";

// This component was created for TESTING PURPOSES ONLY & should not be included in the final production application.

async function createUser(name, email, password) {
  const response = await fetch("@/app/api/auth/register/", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    // If we get error status code
    throw new Error("Something went wrong");
  }

  return data;
}

function RegisterForm() {
  const { register } = useForm(); // ctrl + space to see suggested objects
  const user_name = useRef();
  const user_password = useRef();
  const user_email = useRef();

  async function submitHanlder(event) {
    event.preventDefault();

    const entered_name = user_name.current.value;
    const entered_password = user_password.current.value;
    const entered_email = user_email.current.value;

    console.log(entered_email);
    try {
      const response = await createUser(
        entered_name,
        entered_email,
        entered_password
      );
      console.log("User created :D");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form
      onSubmit={submitHanlder}
      className="flex flex-col justify-center items-center w-[1000px] rounded-md bg-figma_grey z-100 shadow-xl border-2  gap-3  p-6"
    >
      <div className="flex justify-center items-center gap-3 w-full">
        <h1 className="font-bold text-[40px] inline-block">Registro</h1>
        <FaUser className="h-[30px] w-[30px]" />
      </div>

      <div className="grid grid-cols-2 w-full">
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Nombre de Usuario</label>
          <input
            type="text"
            placeholder="sin el @unal.edu.co"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
          ></input>
        </div>

        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="email" className="font-semibold">
            Correo Electrónico
          </label>
          <input
            type="text"
            id="email"
            placeholder="correo institucional"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
          ></input>
        </div>

        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Contraseña</label>
          <input
            type="password"
            placeholder="contraseña"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Verificar Contraseña</label>
          <input
            type="password"
            placeholder="verificar contraseña"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Código de Verificación</label>
          <input
            type="text"
            placeholder="0000"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="id_doc" className="font-semibold">
            No. Documento de Identidad
          </label>
          <input
            type="text"
            id="id_doc"
            placeholder="sin puntos ni comas"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
          ></input>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="type_document" className="font-semibold">
            Tipo de documento
          </label>
          <select
            id="type_document"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
          >
            <option value="">Selección...</option>
            <option value="CC">Cédula de ciudadanía</option>
            <option value="CE">Cédula de extranjería</option>
            <option value="PA">Pasaporte</option>
          </select>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Ciudad de nacimiento</label>
          <input
            type="text"
            placeholder="ciudad"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Fecha de nacimiento</label>
          <input
            type="date"
            placeholder=""
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Páis de residencia</label>
          <input
            type="text"
            placeholder="pais de residencia"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Ciudad de residencia</label>
          <input
            type="text"
            placeholder="ciudad de residencia"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>

        {/** 3 a 12 carácteres*/}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Número Telefónico</label>
          <input
            type="text"
            placeholder="número telefónico"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Dirección de Residencia</label>
          <input
            type="text"
            placeholder="dirección"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="sex" className="font-semibold">
            Sexo
          </label>
          <select
            id="sex"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
          >
            <option value="">Selección...</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="etnicity" className="font-semibold">
            Etnia
          </label>
          <select
            id="etnicity"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
          >
            <option value="">Selección...</option>
            <option value="IN">Indígena</option>
            <option value="AF">Afrocolombiana</option>
            <option value="RG">Rom o gitana</option>
            <option value="NA">Ninguna</option>
          </select>
        </div>

        {/** Flotante entre [0, 5.0]*/}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">PAPA</label>
          <input
            type="text"
            placeholder="PAPPA"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>

        {/** PBM entre [0, 100]*/}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">PBM</label>
          <input
            type="text"
            placeholder="pbm"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>

        {/** Avance entre [0, 100]*/}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Avance</label>
          <input
            type="text"
            placeholder="avance"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="is_enrolled" className="font-semibold">
            Está matriculado
          </label>
          <select
            id="is_enrolled"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
          >
            <option value="">Selección...</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>

        {/** Numero de semestres cursados integer pequeño*/}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Semestres cursados</label>
          <input
            type="text"
            placeholder="semestres cursados"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Enfermedades</label>
          <input
            type="text area"
            placeholder="Detalle enfermedades si padece alguna."
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Medicamentos</label>
          <input
            type="text area"
            placeholder="Detalle medicamentos si toma alguno."
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="Faculty" className="font-semibold">
            Facultad
          </label>
          <select
            id="Faculty"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
          >
            <option value="">Selección...</option>
            <option value="Ciencias Agrarias">
              Facultad de Ciencias Agrarias
            </option>
            <option value="Ciencias Económicas">
              Facultad de Ciencias Económicas
            </option>
            <option value="Ciencias Humanas">
              Facultad de Ciencias Humanas
            </option>
            <option value="Ciencias">Facultad de Ciencias</option>
            <option value="Ciencias Agropecuarias">
              Facultad de Ciencias Agropecuarias
            </option>
            <option value="Derecho, Ciencias Políticas y Sociales">
              Facultad de Derecho, Ciencias Políticas y Sociales
            </option>
            <option value="Ingeniería">Facultad de Ingeniería</option>
            <option value="Medicina">Facultad de Medicina</option>
            <option value="Minas">Facultad de Minas</option>
            <option value="Odontología">Facultad de Odontología</option>
            <option value="Enfermería">Facultad de Enfermería</option>
            <option value="Arquitectura">Facultad de Arquitectura</option>
            <option value="Artes">Facultad de Artes</option>
            <option value="Ciencias Administrativas">
              Facultad de Ciencias Administrativas
            </option>
          </select>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="Major" className="font-semibold">
            Carrera
          </label>

          <select
            id="Major"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focurs:border-gray-600 px-1 py-1"
            placeholder=""
          >
            <option value="">Selección...</option>
            <option value="ISCO">Ingeniería de Sistemas y Computación</option>
            <option value="ISIN">Ingeniería de Sistemas e Informática</option>
            <option value="ICIV">Ingeniería Civil</option>
            <option value="IIND">Ingeniería Industrial</option>
            <option value="IELO">Ingeniería Electrónica</option>
            <option value="IELE">Ingeniería Eléctrica</option>
            <option value="IMEC">Ingeniería Mecánica</option>
            <option value="IMET">Ingeniería Mecatrónica</option>
            <option value="IQUI">Ingeniería Química</option>
            <option value="IAGR">Ingeniería Agrícola</option>
            <option value="IAIN">Ingeniería Agroindustrial</option>
            <option value="IAGN">Ingeniería Agronómica</option>
            <option value="IGEO">Ingeniería Geológica</option>
            <option value="IFOR">Ingeniería Forestal</option>
            <option value="IMIN">Ingeniería de Minas y Metalurgia</option>
            <option value="IPET">Ingeniería de Petróleos</option>
            <option value="IADM">Ingeniería Administrativa</option>
            <option value="ICON">Ingeniería de Control</option>
            <option value="IAMB">Ingeniería Ambiental</option>
            <option value="ECON">Economía</option>
            <option value="ADME">Administración de Empresas</option>
            <option value="CONT">Contaduría Pública</option>
            <option value="DERE">Derecho</option>
            <option value="MEDI">Medicina</option>
            <option value="ODON">Odontología</option>
            <option value="ENFE">Enfermería</option>
            <option value="PSIC">Psicología</option>
            <option value="ARQI">Arquitectura</option>
            <option value="BIOL">Biología</option>
            <option value="QUIM">Química</option>
            <option value="FISI">Física</option>
            <option value="MATE">Matemáticas</option>
            <option value="ESTA">Estadística</option>
            <option value="GEOL">Geología</option>
            <option value="GEOG">Geografía</option>
            <option value="SOCI">Sociología</option>
            <option value="TRAB">Trabajo Social</option>
            <option value="ANTR">Antropología</option>
            <option value="HIST">Historia</option>
            <option value="LING">Lingüística</option>
            <option value="LITE">Literatura</option>
            <option value="COSO">Comunicación Social</option>
            <option value="FILO">Filosofía</option>
            <option value="MUSI">Música</option>
            <option value="MUIN">Música Instrumental</option>
            <option value="DIND">Diseño Industrial</option>
            <option value="BMAR">Biología Marina</option>
            <option value="VETE">Medicina Veterinaria</option>
            <option value="ZOOT">Zootecnia</option>
            <option value="ARTE">Artes Plásticas</option>
            <option value="CPOL">Ciencias Política</option>
            <option value="CCOM">Ciencias de la Computación</option>
            <option value="CITE">Cine y Televisión</option>
            <option value="DGRA">Diseño Gráfico</option>
            <option value="EFCL">Español y Filología Clásica</option>
            <option value="FARM">Farmacia</option>
            <option value="FIAL">Filología e Idiomas: Alemán</option>
            <option value="FIFR">Filología e Idiomas: Francés</option>
            <option value="FIIN">Filología e Idiomas: Inglés</option>
            <option value="FISO">Fisioterapia</option>
            <option value="NUDI">Nutrición y Dietética</option>
            <option value="GECC">Gestión Cultural y Comunicativa</option>
            <option value="ADSI">
              Administración de Sistemas Informáticos
            </option>
            <option value="CONS">Construcción</option>
          </select>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="admission" className="font-semibold">
            Tipo de Admisión
          </label>
          <select
            id="admission"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
          >
            <option value="">Selección...</option>
            <option value="REGUL">Regular</option>
            <option value="PAES">PAES</option>
            <option value="PEAMA">PEAMA</option>
          </select>
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="study_level" className="font-semibold">
            Nivel de estudios
          </label>
          <select
            id="study_level"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
          >
            <option value="">Selección...</option>
            <option value="PRE">Pregrado</option>
            <option value="POS">Postgrado</option>
            <option value="DOC">Doctorado</option>
          </select>
        </div>
        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Certificado de notas</label>
          <input
            type="file"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>
        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Certificado de matrícula</label>
          <input
            type="file"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>
        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Recibo de pago de matrícula</label>
          <input
            type="file"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          ></input>
        </div>
      </div>

      <div className="w-full p-2">
        <button
          type="submit"
          className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
        >
          Registrar
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
