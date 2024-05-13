"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { apiRegisterAdmin } from "@/app/api/Registro/registerAdmin";

// This function must be modified to send the data to the backend.
async function createUser(name, email, password) {
  const response = await fetch("@/app/api/auth/register/", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    // If we get error status code
    throw new Error("Something went wrong");
  } else {
    alert("Usuario creado exitosamente.");
  }

  return data;
}

function RegisterFormStudent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    resetField,
  } = useForm();
  // register: allows targetting form inputs.
  // formState: allows accessing the current state of the form, and while changing we can check if the input is correct
  // or not, this is useful in order to make validations.
  // also it is worthwhile knowing that the register allows us to use html standard funcitionality such as required
  // errors: allows us accessing information thrown by the errors caused because of the required condition stablished
  // within the tags.
  // watch: allows us bringing the current state.

  const [certificateGrades, setCertificateGrades] = useState();
  const [certificateStudent, setCertificateStudent] = useState();
  const [paymentReceipt, setPaymentReceipt] = useState();

  const handleCertificateGrades = (e) => {
    const file = e.target.files[0];
    if (file.size > 2097152) {
      alert(`El archivo ${e.target.files[0].name} supera 2 MB.`);
      resetField("certificate_grades");
      return;
    } else {
      const reader = new FileReader();

      reader.onload = () => {
        const fileContent = reader.result;
        setCertificateGrades(fileContent);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleCertificateStudent = (e) => {
    const file = e.target.files[0];
    if (file.size > 2097152) {
      alert(`El archivo ${e.target.files[0].name} supera 2 MB.`);
      resetField("certificate_student");
      return;
    } else {
      const reader = new FileReader();

      reader.onload = () => {
        const fileContent = reader.result;
        setCertificateStudent(fileContent);
      };

      reader.readAsDataURL(file);
    }
  };

  const handlePaymentReceipt = (e) => {
    const file = e.target.files[0];
    if (file.size > 2097152) {
      alert(`El archivo ${e.target.files[0].name} supera 2 MB.`);
      resetField("payment_receipt");
      return;
    } else {
      const reader = new FileReader();

      reader.onload = () => {
        const fileContent = reader.result;
        setPaymentReceipt(fileContent);
      };

      reader.readAsDataURL(file);
    }
  };

  const substringToRemove = "data:application/pdf;base64,";
  let newCertificateGrades = certificateGrades?.replace(substringToRemove, "");
  let newCertificateStudent = certificateStudent?.replace(
    substringToRemove,
    ""
  );
  let newPaymentReceipt = paymentReceipt?.replace(substringToRemove, "");

  const mySubmit = handleSubmit((data) => {
    alert("Registrando usuario...");
    // API post data_b

    // const axios = require("axios");
    // const FormData = require("form-data");
    // const fs = require("fs");
    // let dataToSend = new FormData();
    // dataToSend.append("email", data.email);
    // dataToSend.append("password", data.password);
    // dataToSend.append("id", data.id);
    // dataToSend.append("first_name", data.first_name);
    // dataToSend.append("last_name", data.last_name);
    // dataToSend.append("type_document", data.type_document);
    // dataToSend.append("birth_place", data.birth_place);
    // dataToSend.append("birth_date", data.birth_date);
    // dataToSend.append("country", data.country);
    // dataToSend.append("city", data.city);
    // dataToSend.append("phone", data.phone);
    // dataToSend.append("address", data.address);
    // dataToSend.append("sex", data.sex);
    // dataToSend.append("ethnicity", data.ethnicity);
    // dataToSend.append("headquarter", data.headquarter);
    // dataToSend.append("PAPA", data.PAPA);
    // dataToSend.append("PBM", data.PBM);
    // dataToSend.append("advance", data.advance);
    // dataToSend.append("is_enrolled", data.is_enrolled);
    // dataToSend.append("num_semesters", data.num_semesters);
    // dataToSend.append("diseases", data.diseases);
    // dataToSend.append("medication", data.medication);
    // dataToSend.append("faculty", data.faculty);
    // dataToSend.append("major", data.major);
    // dataToSend.append("admission", data.admission);
    // dataToSend.append("study_level", data.study_level);
    // dataToSend.append("certificate_grades", newCertificateGrades);
    // dataToSend.append("certificate_student", newCertificateStudent);
    // dataToSend.append("payment_receipt", newPaymentReceipt);

    // console.log(dataToSend)

    data.certificate_grades = newCertificateGrades;
    data.certificate_student = newCertificateStudent;
    data.payment_receipt = newPaymentReceipt;

    console.log(data);

    apiRegisterAdmin
      .postUserStudent(
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
        data.PAPA,
        data.PBM,
        data.advance,
        data.is_enrolled,
        data.num_semesters,
        data.diseases,
        data.medication,
        data.faculty,
        data.major,
        data.admission,
        data.study_level,
        data.certificateGrades,
        data.certificate_student,
        data.payment_receipt
      )
      .then((response) => {
        alert(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    reset();

    /**
     * email,
    password,
    verif_code,
    id,
    first_name,
    last_name,
    type_document,
    birth_place,
    birth_date,
    country,
    city,
    phone,
    address,
    sex,
    ethnicity,
    headquarter,
    PAPA,
    PBM,
    advance,
    is_enrolled,
    num_semesters,
    diseases,
    medication,
    faculty,
    major,
    admission,
    study_level,
    certificate_grades,
    certificate_student,
    payment_receipt
     * 
     */
  });
  return (
    <form
      onSubmit={mySubmit}
      className="flex flex-col justify-center items-center w-[1000px] rounded-xl bg-figma_grey z-100 shadow-xl border-2  gap-3  p-6"
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
              // pattern: {
              //   value: /^[A-Za-z]+$/i,
              //   message: "El código de verificación debe tener solo letras.",
              // },
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
            placeholder=""
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
            placeholder="Nombre ciudad de nacimiento."
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
            placeholder="Nombre ciudad de residencia."
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

        {/** Flotante entre [0, 5.0]*/}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">PAPPA</label>
          <input
            type="text"
            placeholder="pappa"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("PAPA", {
              required: {
                value: true,
                message: "El PAPPA es requerido.",
              },
              pattern: {
                value: /^(?:5\.0|(?:(?:[0-4](?:\.\d*)?)|(?:\.\d+)))$/,
                message: "El PAPPA debe ser un flotante entre 0.0 y 5.0",
              },
            })}
          ></input>

          {errors.PAPA && (
            <span className="text-[15px] underline text-black-500">
              {errors.PAPA.message}
            </span>
          )}
        </div>

        {/** PBM entre [0, 100]*/}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">PBM</label>
          <input
            type="text"
            placeholder="pbm"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("PBM", {
              required: {
                value: true,
                message: "El PBM es requerido.",
              },
              pattern: {
                value: /^(?:100|\d{1,2}|0)$/,
                message: "El PBM debe ser un entero de 0 a 100.",
              },
            })}
          ></input>

          {errors.PBM && (
            <span className="text-[15px] underline text-black-500">
              {errors.PBM.message}
            </span>
          )}
        </div>

        {/** Avance entre [0, 100]*/}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Avance</label>
          <input
            type="text"
            placeholder="Avance en porcentaje"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("advance", {
              required: {
                value: true,
                message: "Avance es requerido",
              },
              pattern: {
                value: /^(?:100|\d{1,2}|0)$/,
                message: "El avance debe ser un número entero entre 0 y 100.",
              },
            })}
          ></input>

          {errors.advance && (
            <span className="text-[15px] underline text-black-500">
              {errors.advance.message}
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="is_enrolled" className="font-semibold">
            Está matriculado
          </label>
          <select
            id="is_enrolled"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
            {...register("is_enrolled", { required: true })}
          >
            <option value="">Selección...</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>

          {errors.is_enrolled && (
            <span className="text-[15px] underline text-black-500">
              Estado de matrícula es requerido
            </span>
          )}
        </div>

        {/** Numero de semestres cursados integer pequeño*/}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Semestres cursados</label>
          <input
            type="text"
            placeholder="Semestres cursados"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("num_semesters", {
              required: {
                value: true,
                message: "El número de semestres cursados es requerido.",
              },
              pattern: {
                value: /^(?:[0-9]|[12][0-9]|30)$/,
                message:
                  "El número de semestres cursados debe ser un número menor a 30.",
              },
            })}
          ></input>

          {errors.num_semesters && (
            <span className="text-[15px] underline text-black-500">
              {errors.num_semesters.message}
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Enfermedades</label>
          <input
            type="text area"
            placeholder="Detalle enfermedades si padece alguna."
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("diseases", {
              required: {
                value: true,
                message: "Las enfermedades son requeridas.",
              },
            })}
          ></input>

          {errors.diseases && (
            <span className="text-[15px] underline text-black-500">
              {errors.diseases.message}
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Medicamentos</label>
          <input
            type="text area"
            placeholder="Detalle medicamentos si toma alguno."
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("medication", { required: true })}
          ></input>

          {errors.medication && (
            <span className="text-[15px] underline text-black-500">
              Medicación es requerido
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="Faculty" className="font-semibold">
            Facultad
          </label>
          <select
            id="Faculty"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
            {...register("faculty", { required: true })}
          >
            <option value="">Selección...</option>
            <option value="Ciencias Agrarias">
              Facultad de Ciencias Agrarias
            </option>
            <option value="Ciencias Económicas">
              Facultad de Ciencias Económicas
            </option>
            <option value="Ciencias Humanas">
              Facultad de Ciencias Humanas
            </option>
            <option value="Ciencias">Facultad de Ciencias</option>
            <option value="Ciencias Agropecuarias">
              Facultad de Ciencias Agropecuarias
            </option>
            <option value="Derecho, Ciencias Políticas y Sociales">
              Facultad de Derecho, Ciencias Políticas y Sociales
            </option>
            <option value="Ingeniería">Facultad de Ingeniería</option>
            <option value="Medicina">Facultad de Medicina</option>
            <option value="Minas">Facultad de Minas</option>
            <option value="Odontología">Facultad de Odontología</option>
            <option value="Enfermería">Facultad de Enfermería</option>
            <option value="Arquitectura">Facultad de Arquitectura</option>
            <option value="Artes">Facultad de Artes</option>
            <option value="Ciencias Administrativas">
              Facultad de Ciencias Administrativas
            </option>
          </select>

          {errors.faculty && (
            <span className="text-[15px] underline text-black-500">
              Facultad es requerido
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="Major" className="font-semibold">
            Carrera
          </label>

          <select
            id="Major"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focurs:border-gray-600 px-1 py-1"
            placeholder=""
            {...register("major", { required: true })}
          >
            <option value="">Selección...</option>
            <option value="ISCO">Ingeniería de Sistemas y Computación</option>
            <option value="ISIN">Ingeniería de Sistemas e Informática</option>
            <option value="ICIV">Ingeniería Civil</option>
            <option value="IIND">Ingeniería Industrial</option>
            <option value="IELO">Ingeniería Electrónica</option>
            <option value="IELE">Ingeniería Eléctrica</option>
            <option value="IMEC">Ingeniería Mecánica</option>
            <option value="IMET">Ingeniería Mecatrónica</option>
            <option value="IQUI">Ingeniería Química</option>
            <option value="IAGR">Ingeniería Agrícola</option>
            <option value="IAIN">Ingeniería Agroindustrial</option>
            <option value="IAGN">Ingeniería Agronómica</option>
            <option value="IGEO">Ingeniería Geológica</option>
            <option value="IFOR">Ingeniería Forestal</option>
            <option value="IMIN">Ingeniería de Minas y Metalurgia</option>
            <option value="IPET">Ingeniería de Petróleos</option>
            <option value="IADM">Ingeniería Administrativa</option>
            <option value="ICON">Ingeniería de Control</option>
            <option value="IAMB">Ingeniería Ambiental</option>
            <option value="ECON">Economía</option>
            <option value="ADME">Administración de Empresas</option>
            <option value="CONT">Contaduría Pública</option>
            <option value="DERE">Derecho</option>
            <option value="MEDI">Medicina</option>
            <option value="ODON">Odontología</option>
            <option value="ENFE">Enfermería</option>
            <option value="PSIC">Psicología</option>
            <option value="ARQI">Arquitectura</option>
            <option value="BIOL">Biología</option>
            <option value="QUIM">Química</option>
            <option value="FISI">Física</option>
            <option value="MATE">Matemáticas</option>
            <option value="ESTA">Estadística</option>
            <option value="GEOL">Geología</option>
            <option value="GEOG">Geografía</option>
            <option value="SOCI">Sociología</option>
            <option value="TRAB">Trabajo Social</option>
            <option value="ANTR">Antropología</option>
            <option value="HIST">Historia</option>
            <option value="LING">Lingüística</option>
            <option value="LITE">Literatura</option>
            <option value="COSO">Comunicación Social</option>
            <option value="FILO">Filosofía</option>
            <option value="MUSI">Música</option>
            <option value="MUIN">Música Instrumental</option>
            <option value="DIND">Diseño Industrial</option>
            <option value="BMAR">Biología Marina</option>
            <option value="VETE">Medicina Veterinaria</option>
            <option value="ZOOT">Zootecnia</option>
            <option value="ARTE">Artes Plásticas</option>
            <option value="CPOL">Ciencias Política</option>
            <option value="CCOM">Ciencias de la Computación</option>
            <option value="CITE">Cine y Televisión</option>
            <option value="DGRA">Diseño Gráfico</option>
            <option value="EFCL">Español y Filología Clásica</option>
            <option value="FARM">Farmacia</option>
            <option value="FIAL">Filología e Idiomas: Alemán</option>
            <option value="FIFR">Filología e Idiomas: Francés</option>
            <option value="FIIN">Filología e Idiomas: Inglés</option>
            <option value="FISO">Fisioterapia</option>
            <option value="NUDI">Nutrición y Dietética</option>
            <option value="GECC">Gestión Cultural y Comunicativa</option>
            <option value="ADSI">
              Administración de Sistemas Informáticos
            </option>
            <option value="CONS">Construcción</option>
          </select>

          {errors.major && (
            <span className="text-[15px] underline text-black-500">
              Carrera es requerido
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="admission" className="font-semibold">
            Tipo de Admisión
          </label>
          <select
            id="admission"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
            {...register("admission", { required: true })}
          >
            <option value="">Selección...</option>
            <option value="REGUL">Regular</option>
            <option value="PAES">PAES</option>
            <option value="PEAMA">PEAMA</option>
          </select>

          {errors.admission && (
            <span className="text-[15px] underline text-black-500">
              Tipo de admisión es requerido
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label htmlFor="study_level" className="font-semibold">
            Nivel de estudios
          </label>
          <select
            id="study_level"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            placeholder=""
            {...register("study_level", { required: true })}
          >
            <option value="">Selección...</option>
            <option value="PRE">Pregrado</option>
            <option value="POS">Postgrado</option>
            <option value="DOC">Doctorado</option>
          </select>

          {errors.study_level && (
            <span className="text-[15px] underline text-black-500">
              Nivel de estudios es requerido
            </span>
          )}
        </div>
        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Certificado de notas</label>
          <input
            type="file"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("certificate_grades", { required: true })}
            onChange={handleCertificateGrades}
          ></input>

          {errors.certificate_grades && (
            <span className="text-[15px] underline text-black-500">
              Certifcado de notas es requerido
            </span>
          )}
        </div>
        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Certificado de matrícula</label>
          <input
            type="file"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("certificate_student", { required: true })}
            onChange={handleCertificateStudent}
          ></input>

          {errors.certificate_student && (
            <span className="text-[15px] underline text-black-500">
              Certificado de matrícula es requerido
            </span>
          )}
        </div>
        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Recibo de pago de matrícula</label>
          <input
            type="file"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("payment_receipt", { required: true })}
            onChange={handlePaymentReceipt}
          ></input>

          {errors.payment_receipt && (
            <span className="text-[15px] underline text-black-500">
              Recibo de pago es requerido
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

      {/*The code below was just for visualizing the data before it was sent.*/}
      {/* <div> 
        <pre>{JSON.stringify(watch(), null, 2)}</pre>
      </div> */}
    </form>
  );
}

export default RegisterFormStudent;
