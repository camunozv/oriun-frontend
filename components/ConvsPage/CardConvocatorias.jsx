"use client";

import Link from "next/link";

function CardConvocatorias({
  // students open & closed
  id,
  university_name,
  country,
  language, //* shared characteristics
  deadline, //* shared characteristics

  // admin open & closed
  semester,
  study_level,
  year,
  imageLink,

  open,
  admin,
}) {
  if (admin === true) {
    return (
      <>
        <div className="flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-xl p-6 w-full h-full">
          <h6 className="font-bold">{id}</h6>

          <img
            className="w-[95%] h-45 w-45 rounded-md border-2 border-grey-1000"
            src={imageLink}
            alt="flag"
          ></img>

          <p className="font-semibold">
            {year} - {semester}
          </p>
          <p className="font-semibold">{language}</p>
          <p className="font-semibold">{study_level}</p>

          <div className="flex justify-between items-center w-96">
            <div className="w-full p-2">
              <Link href={`/Convocatorias/ConvocatoriasAdmin/${id}`}>
                <button
                  type="button"
                  className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-2"
                >
                  Actualizar
                </button>
              </Link>
            </div>
            <div className="w-full p-2">
              <Link
                href={`/Convocatorias/ConvocatoriasAdmin/DetallesConvocatoria/${id}`}
              >
                <button
                  type="button"
                  className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-2"
                >
                  Ver detalles
                </button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else if (open == "Abiertas") {
    return (
      <div className="flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-xl p-6 w-full h-full">
        <h6 className="font-bold">{id}</h6>

        <img
          className="w-[95%] h-45 w-45 rounded-md border-2 border-grey-1000"
          src={imageLink}
          alt="flag"
        ></img>

        <p className="font-semibold">{university_name}</p>
        <p className="font-semibold">{country}</p>
        <p className="font-semibold">{language}</p>
        <p className="font-semibold">{deadline}</p>

        <div className="flex justify-between items-center w-96">
          <div className="w-full p-2">
            <Link
              href={`/Convocatorias/ConvocatoriasEstudiante/Convocatorias${open}/${id}`}
            >
              <button
                type="button"
                className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-2"
              >
                Ver detalles
              </button>
            </Link>
          </div>
          <div className="w-full p-2">
            <Link
              href={`/Convocatorias/ConvocatoriasEstudiante/ConvocatoriasAbiertas/Postulation/${id}`}
            >
              <button
                type="button"
                className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-2"
              >
                Postularme
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center flex-col gap-3 bg-white shadow-lg rounded-xl p-6 w-full h-full">
        <h6 className="font-bold">{id}</h6>

        <img
          className="w-[95%] h-45 w-45 rounded-md border-2 border-grey-1000"
          src={imageLink}
          alt="flag"
        ></img>

        <p className="font-semibold">{university_name}</p>
        <p className="font-semibold">{country}</p>
        <p className="font-semibold">{language}</p>
        <p className="font-semibold">{deadline}</p>

        <div className="flex justify-between items-center w-96">
          <div className="w-full p-2">
            <Link
              href={`/Convocatorias/ConvocatoriasEstudiante/Convocatorias${open}/${id}`}
            >
              <button
                type="button"
                className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-2"
              >
                Ver detalles
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CardConvocatorias;
