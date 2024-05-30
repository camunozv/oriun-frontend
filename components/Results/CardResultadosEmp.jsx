import React from "react";

function CardPostulacionEm({student_id, student_name, university_name, university_country, call, approved}) {
  let imagenSrc;

  switch (approved) {
    case "Aprobado":
      imagenSrc = "/images/Aprobada.jpeg";
      break;
    case "No Aprobado":
      imagenSrc = "/images/NoAprobada.jpeg";
      break;
  }
  {
    return (
      <>
        <div className="flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-xl p-6 w-full h-full">
          <div className="relative flex justify-center items-center flex-col gap-3 bg-white -lg rounded-xl p-6 w-full h-full">
            <h6 className="font-bold">Conv No. {call} </h6>
            <img
              src={imagenSrc} // Reemplaza esta ruta con la ruta de tu imagen
              alt="Logo"
              className="absolute top-0 right-0 w-12 h-12" // Estilos para posicionar la imagen en la esquina superior derecha
            />
          </div>

          <div className="w-[95%] h-45 bg-figma_grey text-black rounded-lg">
            Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag
            Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
            Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag
            Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
            Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag
            Here Flag Here Flag Here Flag Here Flag Here Flag Here Flag Here
            Flag Here Flag Here Flag Here Flag Here Flag Here
          </div>

          <p className="font-semibold">{student_id}</p>
          <p className="font-semibold">
            {student_name}
          </p>
          <p className="font-semibold">{university_name}</p>
          <p className="font-semibold">{university_country}</p>
        </div>
      </>
    );
  }
}

export default CardPostulacionEm;
