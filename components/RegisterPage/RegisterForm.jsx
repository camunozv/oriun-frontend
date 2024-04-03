"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";
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
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={submitHanlder}
      className="flex flex-col justify-center items-center w-96 rounded-md bg-figma_grey z-100 shadow-xl border-2  gap-3  p-6"
    >
      <div className="flex justify-center items-center gap-3 w-full">
        <h1 className="font-bold text-[40px] inline-block">Registro</h1>
        <FaUser className="h-[30px] w-[30px]" />
      </div>

      <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
        <label className="font-semibold">Nombre de Usuario</label>
        <input
          type="text"
          placeholder="sin el @unal.edu.co"
          className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
          required={true}
          ref={user_name}
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
          required={true}
          ref={user_email}
        ></input>
      </div>

      <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
        <label className="font-semibold">Contraseña</label>
        <input
          type="password"
          placeholder="contraseña"
          className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          required={true}
          ref={user_password}
        ></input>
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
