// ConvocatoriasEstudiantePage.jsx
import { options } from "@/app/api/auth/[...nextauth]/credentials_options";
import { getServerSession } from "next-auth";
import React from "react";

const figmaBlue = "#4e545c";
const figmaGrey = "#ABABAB";

async function ConvocatoriasEstudiantePage() {
  const session = await getServerSession(options);
  const user_type = session?.type_user;

  if (user_type === "employee") {
    return (
      <main className="relative mt-4 mx-auto max-w-[1580px] p-2">
        <div>Redirigiendo...</div>
      </main>
    );
  }

  return (
   
<main className="relative mt-4 mx-auto max-w-[1580px] p-2">
  <div className="flex justify-center items-center h-screen">
    <div className="card w-full md:max-w-7xl p-20 md:p-20 bg-white rounded-lg shadow-lg backdrop-blur-md hover:bg-white/10 relative flex">
      {/* Contenedor de texto */}
      <div className="w-1/2 pr-8 flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            ¡Bienvenido  querido estudiante!
          </h1>
          <h2 className="text-xl font-normal lg:text-2xl" style={{ color: figmaBlue }}>Elige una opción arriba para iniciar.</h2>
        </div>
      </div>
      
      
      
      {/* Galería */}
      



      <div class="grid grid-cols-2 gap-2">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://wired.me/wp-content/uploads/2021/02/kaust-covid-vaccines.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://www.buildings-mena.com/image/1360/pr/KAUST-08-024-1900-1600x1069.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://www.gaceta.unam.mx/wp-content/uploads/2021/06/14cudes.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://universidadesyprofesiones.com/images/universidades/campus/universidad-nacional-de-colombia-banner.jpg" alt=""/>
        </div>
    </div>





    </div>
  </div>


  
  
      






      
  

          

      <section className="mt-8 max-w-7xl mx-auto px-4">
        <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-white">
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-black">
              <h3 className="text-lg font-semibold" style={{ color: figmaBlue }}>Ver Convocatorias</h3>
              <p className="my-4" style={{ color: figmaGrey }}>Explora y revisa las convocatorias actuales y pasadas.</p>
            </blockquote>
            <figcaption className="flex items-center justify-center">
              <img
                className="rounded-full w-9 h-9"
                src="https://i.pinimg.com/564x/05/04/bd/0504bd96d32111929fb0302b56c98df0.jpg"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3 text-black"></div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-black">
              <h3 className="text-lg font-semibold" style={{ color: figmaBlue }}>Aplicar a Convocatorias</h3>
              <p className="my-4" style={{ color: figmaGrey }}>Envía tu solicitud para participar en las convocatorias que te interesen.</p>
            </blockquote>
            <figcaption className="flex items-center justify-center">
              <img
                className="rounded-full w-9 h-9"
                src="https://i.pinimg.com/564x/5d/90/c8/5d90c814069034297d66a8a9a21fa461.jpg"
                alt="profile picture"
              />
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-black">
              <h3 className="text-lg font-semibold" style={{ color: figmaBlue }}>Subir Documentos</h3>
              <p className="my-4" style={{ color: figmaGrey }}>Carga los documentos requeridos para tu aplicación.</p>
            </blockquote>
            <figcaption className="flex items-center justify-center">
              <img
                className="rounded-full w-9 h-9"
                src="https://i.pinimg.com/564x/2e/c4/b7/2ec4b7fdcb351900e2c468b3f2203e61.jpg"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3 text-black"></div>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg">
            <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 text-black">
              <h3 className="text-lg font-semibold" style={{ color: figmaBlue }}>Ver Estado de Aplicación</h3>
              <p className="my-4" style={{ color: figmaGrey }}>Consulta el estado de tus aplicaciones y los resultados de tus solicitudes.</p>
            </blockquote>
            <figcaption className="flex items-center justify-center">
              <img
                className="rounded-full w-9 h-9"
                src="https://i.pinimg.com/564x/d0/91/8d/d0918d32ff85f6a0b30ad4efdc3c4cfc.jpg"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium text-left rtl:text-right ms-3 text-black"></div>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

export default ConvocatoriasEstudiantePage;
