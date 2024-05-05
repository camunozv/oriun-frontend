"use client";
import React from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";

function RegisterCodePage() {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  const mySubmit = handleSubmit((data) => {
    console.log(data, "hola");
    /**
     * API call for calling the register code.
     *
     *
     */
    alert("Pidiendo código...");
    reset();
  });
  return (
    <>
      <main className="flex flex-col justify-center items-center w-full p-20">
        <form
          onSubmit={mySubmit}
          className="flex flex-col justify-center rounded-xl items-center w-[600px] shadow-xl p-10 bg-gray-10"
        >
          <div className="flex justify-center items-center w-full gap-3 mb-9">
            <h1 className="font-bold text-[50px] inline-block text-center">
              Pide tu código de verficación
            </h1>
          </div>

          <div className="flex justify-left items-left flex-col gap-2 w-full pt-1 pb-4">
            <label className="font-semibold">
              Digita tu número de documento.
            </label>
            <input
              id="headquarter"
              name="type_document"
              className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
              placeholder="123456789"
              {...register("type_document", {
                required: {
                  value: true,
                  message: "El tipo de documento es requerido.",
                },
                pattern: {
                  value: /^[0-9]+$/i,
                  message:
                    "El número de documento no puede incluir ni puntos ni comas.",
                },
                maxLength: {
                  value: 20,
                  message:
                    "El número de documento no puede tener más de 20 dígitos.",
                },
              })}
            ></input>
            {errors.type_document && (
              <span className="text-[15px] underline text-black-500">
                {errors.type_document.message}
              </span>
            )}
          </div>

          <div className="flex justify-left items-left flex-col gap-2 w-full pt-1 pb-8">
            <label className="font-semibold">
              Escribe tu correo electrónico.
            </label>
            <input
              id="headquarter"
              name="email"
              className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
              placeholder="ejemplo@unal.edu.co"
              {...register("email", {
                required: {
                  value: true,
                  message: "El correo es requerido.",
                },
                pattern: {
                  value: /^[A-Za-z]+@unal\.edu\.co$/i,
                  message: "El correo debe ser de dominio @unal.edu.co",
                },
              })}
            ></input>
            {errors.email && (
              <span className="text-[15px] underline text-black-500">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="w-full p-2">
            <button
              type="submit"
              className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            >
              Pedir código.
            </button>
          </div>
          <div className="w-full p-2">
            <Link href = '/Registro'>
              <button
                type="button"
                className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue hover:text-white hover:bg-figma_blue py-2"
              >
                Ir a registro.
              </button>
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}

export default RegisterCodePage;
