"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import { useRef } from "react";
import { useState } from "react";

// This component was created for TESTING PURPOSES ONLY & should not be included in the final production application.
function RegisterForm() {
  const user_name = useRef();
  const user_password = useRef();
  const user_email = useRef();

  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function submitHanlder(event) {
    event.preventDefault();

    const entered_name = user_name.current.value;
    const entered_password = user_password.current.value;
    const entered_email = user_email.current.value;

    console.log("entro al post");
    const info = {
      user_name_: entered_name,
      user_password_: entered_password,
      user_email_: entered_email,
    };

    if (!info.user_name_ || !info.user_email_ || !info.user_password_) {
      setError("No ha registrado todos los campos");
    }

    try {
      setPending(true);
      console.log("entro al post_1");
      const response = await fetch("@/app/api/register/", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify(info),
      });

      if (response.ok) {
        setPending(false);
        const form = event.target;
        form.reset();
        console.log("User registered!");
      } else {
        const errorData = await response.json();
        console.log("post error")
        setError(errorData.message);
        setPending(false);
      }
    } catch (error) {
      setPending(false);
      setError("Something went wrong :(");
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

        {error ? <span>ERROR</span> : null}
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
