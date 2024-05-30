"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import Head from 'next/head';

function ConvocatoriasAdminPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/Convocatorias");
    },
  });

  const user_type = session?.type_user;

  if (!session) {
    return <div className="flex justify-center items-center h-screen">{status}...</div>;
  } else if (user_type === "student") {
    redirect("/Convocatorias");
  } else {
    return (
      <>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        </Head>
        <style jsx>{`
          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .welcome-text {
            font-size: 3.5rem;
            text-align: center;
            color: black;
            animation: slideIn 0.5s ease-in-out;
            font-weight: 700;
            margin-top: 1rem;
            transition: font-size 0.5s ease-in-out;
          }
          .header-bg {
            background-image: url('/images/background.jpg');
            background-size: cover;
            background-position: center;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
            transition: padding 0.5s ease-in-out;
          }
          .owl-image {
            max-width: 250px;
            margin-right: 2rem;
            transition: max-width 0.5s ease-in-out, margin-right 0.5s ease-in-out;
          }
          .bg-figma-blue {
            background-color: #051DF1;
          }
          .text-figma-grey {
            color: #ABABAB;
          }
        `}</style>
        <main className="font-sans bg-gray-100">
          <section className="mt-8 max-w-7xl mx-auto px-4">
            <div className="block max-w-full p-6 bg-white border border-gray-200 rounded-lg shadow mx-auto">
              <header className="header-bg shadow-md text-center">
                <img src="/images/owl.png" alt="Owl Image" className="owl-image mx-auto" />
                <div>
                  <h1 className="welcome-text">¡Bienvenido Señor Emplead@!</h1>
                  <h2 className="text-lg mt-4 text-figma-blue">Utiliza las opciones disponibles para gestionar convocatorias.</h2>
                </div>
              </header>
            </div>
          </section>

          <section className="mt-8 max-w-7xl mx-auto px-4">
            <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-white">
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-black">
                  <h3 className="text-lg font-semibold text-black">Ver Convocatorias</h3>
                  <p className="my-4">Explora y revisa las convocatorias actuales y pasadas.</p>
                </blockquote>
                <figcaption className="flex items-center justify-center">
                  <img className="rounded-full w-9 h-9" src="https://i.pinimg.com/564x/2c/2f/0b/2c2f0b549007c3addf71905265112680.jpg" alt="profile picture" />
                  <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3 text-black">
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-black">
                  <h3 className="text-lg font-semibold text-black">Crear Nuevas Universidades</h3>
                  <p className="my-4">Añade nuevas instituciones educativas que ofrezcan programas de intercambio.</p>
                </blockquote>
                <figcaption className="flex items-center justify-center">
                  <img className="rounded-full w-9 h-9" src="https://i.pinimg.com/564x/25/1e/fd/251efd7f318b1b35fee3bcaf5efeb743.jpg" alt="profile picture" />
                  
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-black">
                  <h3 className="text-lg font-semibold text-black">Ver Documentación</h3>
                  <p className="my-4">Revisa la documentación de los estudiantes inscritos en las convocatorias.</p>
                </blockquote>
                <figcaption className="flex items-center justify-center">
                  <img className="rounded-full w-9 h-9" src="https://i.pinimg.com/564x/bc/15/22/bc15223ab0c5cb10a717752d83688607.jpg" alt="profile picture" />
                  <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3 text-black">
                  </div>
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg">
                <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-black">
                  <h3 className="text-lg font-semibold text-black">Elegir Ganadores</h3>
                  <p className="my-4">Selecciona a los estudiantes ganadores de cada convocatoria.</p>
                </blockquote>
                <figcaption className="flex items-center justify-center">
                  <img className="rounded-full w-9 h-9" src="https://i.pinimg.com/564x/2d/c3/45/2dc345c6b68b986d0a080fb6c2bce569.jpg" alt="profile picture" />
                  <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3 text-black">
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default ConvocatoriasAdminPage;
