"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useForm, useFieldArray } from "react-hook-form";
import Link from "next/link";
import { useEffect, useState } from "react";
import { apiStudentApplications } from "@/app/api/ConvocatoriasEstudiante/studentApplications";

function Postulacionform({ params }) {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin");
    },
  });

  const token = session?.access;
  const id = params.lambda;

  const [studentElegibility, setStudentElegibility] = useState({});
  useEffect(() => {
    apiStudentApplications
      .getStudentEligibility(id, token)
      .then((response) => {
        setStudentElegibility(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "materias",
    control,
  });

  const mySubmit = handleSubmit((data) => {
    let data_to_send = {};
    let data_contact_person = {};
    let data_info_mobility = {};

    for (const [key, value] of Object.entries(data)) {
      if (
        key === "name" ||
        key === "last_name" ||
        key === "email" ||
        key === "relationship" ||
        key === "cellphone"
      ) {
        data_contact_person[key] = value;
      } else if (
        key === "fecha_de_inicio" ||
        key === "fecha_de_fin" ||
        key === "nombre_contacto_destino" ||
        key === "telefono_contacto" ||
        key === "facultad" ||
        key === "programa" ||
        key === "cargo_contacto_destino" ||
        key === "email_contacto"
      ) {
        data_info_mobility[key] = value;
      } else {
        data_to_send[key] = value;
      }
    }

    data_to_send["contact_person"] = data_contact_person;
    data_to_send["data_info_mobilitiy"] = data_info_mobility;

    if (data_to_send.materias.length === 0) {
      delete data_to_send.materias;
    }

    if (data_to_send.enfermedades === "") {
      delete data_to_send.enfermedades;
    }
    if (data_to_send.medicinas === "") {
      delete data_to_send.medicinas;
    }

    apiStudentApplications
      .postCreateDocuments(
        data_to_send.medicinas,
        data_to_send.enfermedades,
        data_to_send.contact_person,
        id,
        data_to_send.data_info_mobilitiy,
        data_to_send.materias,
        token
      )
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });

    reset();
  });

  if (!session) {
    return <div>{status}...</div>;
  } else if (studentElegibility.elegibility === false) {
    alert(studentElegibility.message);
    redirect("/Convocatorias");
  } else {
    return (
      <form onSubmit={mySubmit}>
        <div className="p-10">
          <h1 className="px-6 text-black font-bold text-[35px]">
            Postularse a la Convocatoria No. {id}
          </h1>
          <br />
          <p className="text-2xl text-justify pl-8 pr-10">
            Esta información es importante para su solicitud. Su llenado es
            obligatorio para poder aplicar a una convocatoria. Luego podrá
            dirigirse a subir documentos, para finalizar su proceso de
            postulación.
          </p>
          <br />
          <div>
            <Link
              href={`/Convocatorias/ConvocatoriasEstudiante/ConvocatoriasAbiertas/PostulacionDocumentos/${id}`}
            >
              <button
                className={
                  "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                }
              >
                Ir a subir Documentos
              </button>
            </Link>
          </div>
          <div className="mt-3">
            <Link
              href={`/Convocatorias/ConvocatoriasEstudiante/ConvocatoriasAbiertas/Postulation`}
            >
              <button
                className={
                  "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                }
              >
                Consultar Información Registrada
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
                {...register("name", {
                  required: {
                    value: true,
                    message: "Campo obligatorio",
                  },
                })}
              />
              {errors.name && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-start items-left gap-1">
              <input
                className="border-gray-300 border rounded-md outline-none"
                placeholder="Apellido"
                type="text"
                {...register("last_name", {
                  required: {
                    value: true,
                    message: "Campo obligatorio",
                  },
                })}
              />
              {errors.last_name && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.last_name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-start items-left gap-1">
              <input
                className="border-gray-300 border rounded-md outline-none"
                placeholder="Email del Contacto"
                type="text"
                {...register("email", {
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
              {errors.email && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-start items-left gap-1">
              <input
                placeholder="Relación con el Estudiante"
                className="border-gray-300 border rounded-md outline-none"
                type="text"
                {...register("relationship", {
                  required: {
                    value: true,
                    message: "Campo obligatorio",
                  },
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Este campo solo admite una palabra.",
                  },
                })}
              />
              {errors.relationship && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.relationship.message}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-start items-left gap-1">
              <input
                placeholder="Teléfono"
                className="border-gray-300 border rounded-md outline-none"
                type="text"
                {...register("cellphone", {
                  required: {
                    value: true,
                    message: "Campo obligatorio",
                  },
                  pattern: {
                    value: /^[0-9]+$/i,
                    message: "Este campo solo admite números.",
                  },
                })}
              />
              {errors.cellphone && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.cellphone.message}
                </span>
              )}
            </div>
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
                    value: false,
                    message: "Campo obligatorio",
                  },
                })}
              />
              {errors.medicinas && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.medicinas.message}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-start items-left gap-1">
              <input
                placeholder="Enfermedades"
                className="border-gray-300 border rounded-md outline-none"
                type="text"
                {...register("enfermedades", {
                  required: {
                    value: false,
                    message: "Campo obligatorio",
                  },
                })}
              />
              {errors.enfermedades && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.enfermedades.message}
                </span>
              )}
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
              <label className="font-semibold">Fecha de Inicio</label>
              <input
                placeholder="Fecha de Inicio"
                className="border-gray-300 border rounded-md outline-none"
                type="date"
                {...register("fecha_de_inicio", {
                  required: {
                    value: true,
                    message: "Campo obligatorio",
                  },
                })}
              />
              {errors.fecha_de_inicio && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.fecha_de_inicio.message}
                </span>
              )}
            </div>
            <div className="flex flex-col justify-start items-left gap-1">
              <label className="font-semibold">Fecha de Fin</label>
              <input
                placeholder="Fecha de Fin"
                className="border-gray-300 border rounded-md outline-none"
                type="date"
                {...register("fecha_de_fin", {
                  required: {
                    value: true,
                    message: "Campo obligatorio",
                  },
                })}
              />

              {errors.fecha_de_fin && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.fecha_de_fin.message}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-start items-left gap-1">
              <label className="text-white">5</label>
              <input
                placeholder="Facultad de destino"
                className="border-gray-300 border rounded-md outline-none"
                type="text"
                {...register("facultad", {
                  required: {
                    value: true,
                    message: "Campo obligatorio",
                  },
                })}
              />

              {errors.facultad && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.facultad.message}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-start items-left gap-1">
              <input
                placeholder="Programa de destino"
                className="border-gray-300 border rounded-md outline-none"
                type="text"
                {...register("programa", {
                  required: {
                    value: true,
                    message: "Campo obligatorio",
                  },
                })}
              />

              {errors.programa && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.programa.message}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-start items-left gap-1">
              <input
                placeholder="Nombre del Contacto del Destino"
                className="border-gray-300 border rounded-md outline-none"
                type="text"
                {...register("nombre_contacto_destino", {
                  required: {
                    value: true,
                    message: "Campo obligatorio",
                  },
                })}
              />
              {errors.nombre_contacto_destino && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.nombre_contacto_destino.message}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-start items-left gap-1">
              <input
                placeholder="Cargo contacto del Destino"
                className="border-gray-300 border rounded-md outline-none"
                type="text"
                {...register("cargo_contacto_destino", {
                  required: {
                    value: true,
                    message: "Campo obligatorio",
                  },
                  pattern: {
                    value: /^[a-zA-Z]+$/,
                    message: "Este campo solo admite una palabra.",
                  },
                })}
              />

              {errors.cargo_contacto_destino && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.cargo_contacto_destino.message}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-start items-left gap-1">
              <input
                placeholder="Email contacto del Destino"
                className="border-gray-300 border rounded-md outline-none"
                type="mail"
                {...register("email_contacto", {
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

              {errors.email_contacto && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.email_contacto.message}
                </span>
              )}
            </div>

            <div className="flex flex-col justify-start items-left gap-1">
              <input
                placeholder="Teléfono contacto del Destino"
                className="border-gray-300 border rounded-md outline-none"
                type="text"
                {...register("telefono_contacto", {
                  required: {
                    value: true,
                    message: "Campo obligatorio",
                  },
                  pattern: {
                    value: /^[0-9]+$/i,
                    message: "Este campo solo admite números.",
                  },
                })}
              />
              {errors.telefono_contacto && (
                <span
                  style={{
                    backgroundColor: "#ffabab",
                    borderRadius: "2px",
                    color: "#360b0b",
                    fontWeight: "bold",
                  }}
                >
                  {errors.telefono_contacto.message}
                </span>
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
                <div className="px-6 py-3 grid grid-cols-5 justify-center items-center w-full gap-3">
                  <div className="flex flex-col justify-start items-left gap-1">
                    <input
                      className="border-gray-300 border rounded-md outline-none"
                      type="text"
                      placeholder="Código Unal"
                      {...register(`materias.${index}.codigo_unal`)}
                    />
                  </div>
                  <div className="flex flex-col justify-start items-left gap-1">
                    <input
                      className="border-gray-300 border rounded-md outline-none"
                      type="text"
                      placeholder="Nombre Unal"
                      {...register(`materias.${index}.nombre_unal`, {
                        pattern: {
                          value: /^[a-zA-Z]+$/,
                        },
                      })}
                    />
                  </div>

                  <div className="flex flex-col justify-start items-left gap-1">
                    <input
                      className="border-gray-300 border rounded-md outline-none"
                      type="text"
                      placeholder="Código Destino"
                      {...register(`materias.${index}.codigo_destino`)}
                    />
                  </div>

                  <div className="flex flex-col justify-start items-left gap-1">
                    <input
                      className="border-gray-300 border rounded-md outline-none"
                      type="text"
                      placeholder="Nombre Destino"
                      {...register(`materias.${index}.nombre_destino`, {
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
              <Link href="/Convocatorias/ConvocatoriasEstudiante/ConvocatoriasAbiertas/">
                <button
                  type="button"
                  className={
                    "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                  }
                >
                  Volver
                </button>
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className={
                  "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                }
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Postulacionform;
