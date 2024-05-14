"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { apiRegisterAdmin } from "@/app/api/Registro/registerAdmin";

function RegisterFormAdmin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const mySubmit = handleSubmit((data) => {
    
    console.log(data)
    alert("Enviando datos...");

    apiRegisterAdmin
      .postUserAdmin(
        data.email,
        data.password,
        data.verif_code,
        data.id,
        data.first_name,
        data.last_name,
        data.type_document,
        data.birth_place,
        data.birth_date,
        data.country,
        data.city,
        data.phone,
        data.address,
        data.sex,
        data.ethnicity,
        data.headquarter,
        data.dependency
      )
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        alert(error.response.data.Error);
        console.log(error);
      });

    reset();
  });

  return (
    <form
      onSubmit={mySubmit}
      className="flex flex-col justify-center rounded-xl items-center w-[1000px] bg-figma_grey z-100 shadow-xl border-2  gap-3  p-6"
    >
      <div className="grid grid-cols-2 w-full">
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Nombre(s)</label>
          <input
            type="text"
            placeholder="AAAA AAAA"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            {...register("first_name", {
              required: {
                value: true,
                message: "Nombre es requerido",
              },
              minLength: {
                value: 4,
                message: "Nombre debe tener mínimo 4 carácteres",
              },
              maxLength: {
                value: 20,
                message: "Nombre debe tener máximo 20 carácteres",
              },
            })}
          ></input>

          {errors.first_name && (
            <span className="text-[15px] underline text-black-500">
              {errors.first_name.message}
            </span>
          )}
        </div>
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Apellido(s)</label>
          <input
            type="text"
            placeholder="AAAA AAAA"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            {...register("last_name", {
              required: {
                value: true,
                message: "El appellido es requerido.",
              },
              minLength: {
                value: 4,
                message: "El appellido debe tener mínimo 4 carácteres.",
              },
              maxLength: {
                value: 20,
                message: "El appellido debe tener máximo 20 carácteres.",
              },
            })}
          ></input>

          {errors.last_name && (
            <span className="text-[15px] underline text-black-500">
              {errors.last_name.message}
            </span>
          )}
        </div>

        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="email" className="font-semibold">
            Correo Electrónico
          </label>
          <input
            type="text"
            id="email"
            placeholder="Correo institucional"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            {...register("email", {
              required: {
                value: true,
                message: "El correo electrónico es requeriado",
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

        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("password", {
              required: {
                value: true,
                message: "La contraseña es requerida",
              },
              pattern: {
                value: /^[A-Za-z0-9]+$/i,
                message: "La contraseña debe incluir carácteres alfanuméricos",
              },
              minLength: {
                value: 12,
                message: "La contraseña debe incluir mínimo 12 carácteres.",
              },
            })}
          ></input>

          {errors.password && (
            <span className="text-[15px] underline text-black-500">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Verificar Contraseña</label>
          <input
            type="password"
            placeholder="Verificar contraseña"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("verif_password", {
              required: {
                value: true,
                message: "Verificar la contraseña es requerido.",
              },
              validate: (value) => {
                if (value === watch("password")) {
                  return true;
                } else {
                  return "Las contraseñas no coinciden";
                }
              },
            })}
          ></input>
          {errors.verif_password && (
            <span className="text-[15px] underline text-black-500">
              {errors.verif_password.message}
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Código de Verificación</label>
          <input
            type="text"
            placeholder="Código enviado al correo."
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("verif_code", {
              required: {
                value: true,
                message: "El código de verificación es requerido.",
              },
            })}
          ></input>

          {errors.verif_code && (
            <span className="text-[15px] underline text-black-500">
              {errors.verif_code.message}
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="id_doc" className="font-semibold">
            No. Documento de Identidad
          </label>
          <input
            type="text"
            id="id_doc"
            placeholder="Sin puntos ni comas"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            {...register("id", {
              required: {
                value: true,
                message: "El número de documento es requerido.",
              },
              pattern: {
                value: /^[0-9]+$/i,
                message:
                  "El número de documento no puede incluir puntos ni comas.",
              },
              maxLength: {
                value: 20,
                message:
                  "El número de documento no puede tener más de 20 dígitos.",
              },
            })}
          ></input>

          {errors.id && (
            <span className="text-[15px] underline text-black-500">
              {errors.id.message}
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="type_document" className="font-semibold">
            Tipo de documento
          </label>
          <select
            id="type_document"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder="No. doc de identidad."
            {...register("type_document", { required: true })}
          >
            <option value="">Selección...</option>
            <option value="CC">Cédula de ciudadanía</option>
            <option value="CE">Cédula de extranjería</option>
            <option value="PA">Pasaporte</option>
          </select>

          {errors.type_document && (
            <span className="text-[15px] underline text-black-500">
              Tipo de documento es requerido.
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Ciudad de nacimiento</label>
          <input
            type="text"
            placeholder="Nombre ciudad de nacimiento"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("birth_place", {
              required: {
                value: true,
                message: "La ciudad de nacimiento es requerida.",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message:
                  "La ciudad de nacimiento no puede tener números ni carácteres especiales.",
              },
            })}
          ></input>

          {errors.birth_place && (
            <span className="text-[15px] underline text-black-500">
              Ciudad de nacimiento es requerido
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Fecha de nacimiento</label>
          <input
            type="date"
            placeholder=""
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("birth_date", {
              required: {
                value: true,
                message: "La fecha de nacimiento es requerida.",
              },
            })}
          ></input>

          {errors.birth_date && (
            <span className="text-[15px] underline text-black-500">
              {errors.birth_date.message}
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Páis de residencia</label>
          <input
            type="text"
            placeholder="Nombre país de residencia"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("country", {
              required: {
                value: true,
                message: "El páis de residencia es requerido",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message:
                  "El país no puede tener números ni carácteres especiales.",
              },
            })}
          ></input>

          {errors.country && (
            <span className="text-[15px] underline text-black-500">
              {errors.country.message}
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Ciudad de residencia</label>
          <input
            type="text"
            placeholder="Nombre ciudad de residencia"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("city", {
              required: {
                value: true,
                message: "La ciudad de residencia es requerida.",
              },
              pattern: {
                value: /^[A-Za-z]+$/i,
                message:
                  "La ciudad de residencia no puede tener números ni carácteres especiales.",
              },
            })}
          ></input>

          {errors.city && (
            <span className="text-[15px] underline text-black-500">
              {errors.city.message}
            </span>
          )}
        </div>

        {/** 3 a 12 carácteres*/}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Número Telefónico</label>
          <input
            type="text"
            placeholder="Número telefónico"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("phone", {
              required: {
                value: true,
                message: "El número telefónico es requerido.",
              },
              minLength: {
                value: 10,
                message: "El número telefónico debe tener mínimo 10 digitos.",
              },
              pattern: {
                value: /^[0-9]+$/i,
                message: "El número telefónico solo puede incluir números.",
              },
            })}
          ></input>
          {errors.phone && (
            <span className="text-[15px] underline text-black-500">
              {errors.phone.message}
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Dirección de Residencia</label>
          <input
            type="text"
            placeholder="Dirección"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("address", { required: true })}
          ></input>

          {errors.address && (
            <span className="text-[15px] underline text-black-500">
              Dirección de residencia es requerido
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="sex" className="font-semibold">
            Sexo
          </label>
          <select
            id="sex"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
            {...register("sex", { required: true })}
          >
            <option value="">Selección...</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>

          {errors.sex && (
            <span className="text-[15px] underline text-black-500">
              Sexo es requerido
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="etnicity" className="font-semibold">
            Etnia
          </label>
          <select
            id="etnicity"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
            {...register("ethnicity", { required: true })}
          >
            <option value="">Selección...</option>
            <option value="IN">Indígena</option>
            <option value="AF">Afrocolombiana</option>
            <option value="RG">Rom o gitana</option>
            <option value="NA">Ninguna</option>
          </select>

          {errors.ethnicity && (
            <span className="text-[15px] underline text-black-500">
              Etnia es requerido
            </span>
          )}
        </div>

        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="headquarter" className="font-semibold">
            Sede
          </label>
          <select
            id="headquarter"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
            {...register("headquarter", { required: true })}
          >
            <option value="">Selección...</option>
            <option value="BO">Bogotá</option>
            <option value="AM">Amazonia</option>
            <option value="CA">Caribe</option>
            <option value="MA">Manizales</option>
            <option value="ME">Medellín</option>
            <option value="OR">Orinoquia</option>
            <option value="PA">Palmira</option>
            <option value="TU">Tumaco</option>
            <option value="LP">La Paz</option>
          </select>

          {errors.headquarter && (
            <span className="text-[15px] underline text-black-500">
              Sede es requerido
            </span>
          )}
        </div>

        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="office_location" className="font-semibold">
            Oficina
          </label>
          <select
            id="office_location"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
            {...register("dependency", {
              required: {
                value: true,
                message: "La dependencia es requerida.",
              },
            })}
          >
            <option value="">Selección...</option>
            <option value="ORI">
              Oficina de Relaciones Interinstitucionales
            </option>
            <option value="DRE">Dirección de Relaciones Exteriores</option>
          </select>
          {errors.dependency && (
            <span className="text-[15px] underline text-black-500">
              {errors.dependency.message}
            </span>
          )}
        </div>
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

export default RegisterFormAdmin;
