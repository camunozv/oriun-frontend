"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useForm, useFieldArray, control} from "react-hook-form";
import Link from "next/link";

//Es donde verifico el inicio de seccion y donde coloco ruta dinaminca
//de aucerdo al id de la convocatoria
//tener en cuenta que debo poner aqui la verificacion del usuario si puede postularse o no segun
//numero de convocatorias postulado menor a dos, cumplir porcentaje  de avance, papa, estar matriculado
//obtener info del usuario para comparar con info de la convocatoria
//Convocatorias/ConvEstudi/postulacion128384 (api)

function Postulacionform({ params }) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/Convocatorias");
    },
  });

  const token = session?.access;
  const id = params.lambda;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      materias: [{ nombreunal: "", codigounal: 0, nombredestino: "" }],
    },
  });
  const { fields, append, remove } = useFieldArray({
    name: "materias",
    control,
  });

  console.log(errors);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="p-10">
        <h1 className="px-6 text-black font-bold text-[35px]">
          Postularse a la Convocatoria: {id}
        </h1>
        <br />
        <p className="text-2xl text-justify pl-8 pr-10">
          Esta información es requerida para completar su solicitud. Es
          importante que complete todos los campos requeridos. En la siguiente
          página podra subir los documentos que se requieren para hacer valida
          su postulación.
        </p>
        <br/>
        <div>
          <Link
           href={`/Convocatorias/ConvocatoriasEstudiante/ConvocatoriasAbiertas/PostulacionDocumentos`}>
            <button className={ "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2" }>
                  Ir a subir Documentos
            </button>
          </Link>
        </div>
        <br />
        <h1 className="text-black font-bold text-[25px] pl-6">
          Información de Contacto
        </h1>
        <br />

        {/**Contactos */}
        <div
          id="Contacts"
          className="px-6 py-3 grid grid-cols-3 justify-center items-center w-full gap-3"
        >
          <div className="flex flex-col justify-start items-left gap-1">
            <input
              placeholder="Nombre"
              type="text"
              className="border-gray-300 border rounded-md outline-none"
              {...register("nombre", {
                required: {
                  value: true,
                  message: "Campo obligatorio",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Este campo solo admite letras",
                },
              })}
            />
            {errors.nombre && <span>{errors.nombre.message}</span>}
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <input
              className="border-gray-300 border rounded-md outline-none"
              placeholder="Apellido"
              type="text"
              {...register("apellido", {
                required: {
                  value: true,
                  message: "Campo obligatorio",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Este campo solo admite letras",
                },
              })}
            />
            {errors.apellido && <span>{errors.apellido.message}</span>}
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <input
              className="border-gray-300 border rounded-md outline-none"
              placeholder="Email del Contacto"
              type="text"
              {...register("emailcontacto", {
                required: {
                  value: true,
                  message: "Campo obligatorio",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Inserte un correo valido",
                },
              })}
            />
            {errors.emailcontacto && (
              <span>{errors.emailcontacto.message}</span>
            )}
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <input
              placeholder="Relación con el Estudiante"
              className="border-gray-300 border rounded-md outline-none"
              type="text"
              {...register("relacion", {
                required: {
                  value: true,
                  message: "Campo obligatorio",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Este campo solo admite letras",
                },
              })}
            />
            {errors.relacion && <span>{errors.relacion.message}</span>}
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <input
              placeholder="Teléfono"
              className="border-gray-300 border rounded-md outline-none"
              type="number"
              {...register("telefono", {
                required: {
                  value: true,
                  message: "Campo obligatorio",
                },
              })}
            />
            {errors.telefono && <span>{errors.telefono.message}</span>}
          </div>

          {/* <div className="w-full flex flex-col items-start justify-start gap-3">
          <label
            htmlFor="information_grid"
            className="font-semibold text-[20px] block"
          >
            Convocatoria Selecionada : {id}
          </label>
          <p className="text-grey-500">Llene solo los campos que desea modificar.</p>
        </div> */}
        </div>
        <br />
        <h1 className="text-black font-bold text-[25px] pl-6">
          Información de Salud
        </h1>
        <br />
        <div
          id="Health information"
          className="px-6 py-3 grid grid-cols-3 justify-center items-center w-full gap-3"
        >
          <div className="flex flex-col justify-start items-left gap-1">
            <input
              placeholder="Medicinas"
              className="border-gray-300 border rounded-md outline-none"
              type="text"
              {...register("medicinas", {
                required: {
                  value: true,
                  message: "Campo obligatorio",
                },
              })}
            />
            {errors.medicinas && <span>{errors.medicinas.message}</span>}
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <input
              placeholder="Enfermedades"
              className="border-gray-300 border rounded-md outline-none"
              type="text"
              {...register("enfermedades", {
                required: {
                  value: true,
                  message: "Campo obligatorio",
                },
              })}
            />
            {errors.enfermedades && <span>{errors.enfermedades.message}</span>}
          </div>
        </div>
        <br />
        <h1 className="text-black font-bold text-[25px] pl-6">
          Información de la Movilidad
        </h1>
        <br />

        <div
          id="Call information"
          className="px-6 py-3 grid grid-cols-3 justify-center items-center w-full gap-3"
        >
          <div className="flex flex-col justify-start items-left gap-1">
            <input
              placeholder="Fecha de Inicio"
              className="border-gray-300 border rounded-md outline-none"
              type="date"
              {...register("fechadeinicio", {
                required: {
                  value: true,
                  message: "Campo obligatorio",
                },
              })}
            />
            {errors.fechadeinicio && (
              <span>{errors.fechadeinicio.message}</span>
            )}
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <input
              placeholder="Nombre Coordinador del Destino"
              className="border-gray-300 border rounded-md outline-none"
              type="text"
              {...register("nombrecoordinadordestino", {
                required: {
                  value: true,
                  message: "Campo obligatorio",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Este campo solo admite letras",
                },
              })}
            />
            {errors.nombrecoordinadordestino && (
              <span>{errors.nombrecoordinadordestino.message}</span>
            )}
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <input
              placeholder="Email Coordinador del Destino"
              className="border-gray-300 border rounded-md outline-none"
              type="text"
              {...register("emailcoordinador", {
                required: {
                  value: true,
                  message: "Campo obligatorio",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Inserte un correo valido",
                },
              })}
            />
            {errors.emailcoordinador && (
              <span>{errors.emailcoordinador.message}</span>
            )}
          </div>

          <div className="flex flex-col justify-start items-left gap-1">
            <input
              placeholder="Telefono Coordinador del Destino"
              className="border-gray-300 border rounded-md outline-none"
              type="number"
              {...register("telefonocoordinador", {
                required: {
                  value: true,
                  message: "Campo obligatorio",
                },
              })}
            />
            {errors.telefonocoordinador && (
              <span>{errors.telefonocoordinador.message}</span>
            )}
          </div>
        </div>

        <br />
        <h1 className="text-black font-bold text-[25px] pl-6">
          Materias a ver
        </h1>
        <br />
        {fields.map((field, index) => {
          return (
            <section key={field.id}>
              <div className="px-6 py-3 grid grid-cols-4 justify-center items-center w-full gap-3">
                <div className="flex flex-col justify-start items-left gap-1">
                  <input
                    className="border-gray-300 border rounded-md outline-none"
                    type="text"
                    placeholder="Nombre Unal"
                    {...register(`materias.${index}.nombreunal`, {
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                      },
                    })}
                  />
                </div>
                <div className="flex flex-col justify-start items-left gap-1">
                  <input
                    className="border-gray-300 border rounded-md outline-none"
                    type="number"
                    placeholder="Codigo Unal"
                    {...register(`materias.${index}.codigounal`)}
                  />
                </div>
                <div className="flex flex-col justify-start items-left gap-1">
                  <input
                    className="border-gray-300 border rounded-md outline-none"
                    type="text"
                    placeholder="Nombre Unal"
                    {...register(`materias.${index}.nombredestino`, {
                      pattern: {
                        value: /^[a-zA-Z]+$/,
                      },
                    })}
                  />
                </div>
                <div>
                  <button
                    onClick={() => remove(index)}
                    type="button"
                    className={
                      "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                    }
                  >
                    Eliminar
                  </button>
                </div>
              </div>
              <br />
            </section>
          );
        })}
        <br />
        <button
          onClick={() => {
            append();
          }}
          type="button"
          className={
            "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
          }
        >
          Agregar
        </button>
        <br />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <button
              type="button"
              className={
                "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
              }
            >
              Volver
            </button>
          </div>
          <div>
          <Link
           href={`/Convocatorias/ConvocatoriasEstudiante/ConvocatoriasAbiertas/PostulacionDocumentos`}>
            <button
              type="submit"
              className={
                "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
              }
            >
              Continuar
            </button>
          </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Postulacionform;
