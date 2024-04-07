"use client";
import React from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useRef } from "react";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
// text-base: allows setting up the size of the font to the base size, which by default is 16px.
// focus:outline-none: allows deleting default outline when an element receives focus
// focus:ring-0: deletes the default ring that appears when users focus an element
// focus:border-gray-600: sets the custom border when user focuses the element

// Access token should only be stored in Memory and not in server or a cookie, for security reasons.

function LoginForm() {
  const user_name = useRef();
  const user_password = useRef();

  async function submitHanlder(event) {
    event.preventDefault();

    const entered_name = user_name.current.value;
    const entered_password = user_password.current.value;

    try {
      const response = await signIn("credentials", {
        entered_name,
        entered_password,
      });

      if (response.ok) {
        redirect('/ConvocatoriasAdmin');
      } else {
        console.log("Aceso denegado, ");
        redirect('/Ingreso');
      }

    } catch (error) {
      console.log(error);
      redirect('/Ingreso');
    }
  }

  return (
    <form
      onSubmit={submitHanlder}
      className="flex flex-col justify-center items-center w-96 rounded-md bg-figma_grey z-100 shadow-xl border-2  gap-3  p-6"
    >
      <div className="flex justify-center items-center gap-3 w-full">
        <h1 className="font-bold text-[40px] inline-block">Login</h1>
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
        <label className="font-semibold">Contraseña</label>
        <input
          type="password"
          placeholder="contraseña"
          className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
          required={true}
          ref={user_password}
        ></input>
      </div>

      <div className="flex items-center justify-between w-full p-2">
        <div className="flex items-center gap-2">
          <label className="text-base">Recuerdame</label>
          <input
            type="checkbox"
            className="focus:outline-none focus:ring-0 focus:border-gray-600"
          />
        </div>

        <Link href="/" className="text-base text-blue-800 font-semibold">
          ¿Olvidó su contraseña?
        </Link>
      </div>

      <div className="w-full p-2">
        <button
          type="submit"
          className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
        >
          Ingresar
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
