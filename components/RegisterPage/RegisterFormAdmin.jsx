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

function RegisterFormAdmin() {
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
      className="flex flex-col justify-center rounded-xl items-center w-[1000px] bg-figma_grey z-100 shadow-xl border-2  gap-3  p-6"
    >
      <div className="grid grid-cols-2 w-full">
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Nombre</label>
          <input
            type="text"
            placeholder="sin el @unal.edu.co"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
          ></input>
        </div>
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Apellido</label>
          <input
            type="text"
            placeholder=""
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
            placeholder="not implemented yet"
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

        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="headquarter" className="font-semibold">
            Sede
          </label>
          <select
            id="headquarter"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
          >
            <option value="">Selección...</option>
            <option value="BO">Bogotá</option>
            <option value="AM">Amazonia</option>
            <option value="CA">Caribe</option>
            <option value="MA">Manizales</option>
            <option value="ME">Medellín</option>
            <option value="OR">Orinoquia</option>
            <option value="PA">Palmira</option>
            <option value="TU">Tumaco</option>
            <option value="LP">La Paz</option>
          </select>
        </div>

        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="office_location" className="font-semibold">
            Oficina
          </label>
          <select
            id="office_location"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
          >
            <option value="">Selección...</option>
            <option value="ORI">
              Oficina de Relaciones Interinstitucionales
            </option>
            <option value="DRE">Dirección de Relaciones Exteriores</option>
          </select>
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

export default RegisterFormAdmin;
