"use client";
import React from "react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
// import registerHandler from "@/app/api/auth/register";

// This component was created for TESTING PURPOSES ONLY & should not be included in the final production application.

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
  }

  return data;
}

function RegisterFormStudent() {
  const user_name = useRef();
  const user_password = useRef();
  const user_email = useRef();

  async function submitHanlder(event) {
    event.preventDefault();

    const entered_name = user_name.current.value;
    const entered_password = user_password.current.value;
    const entered_email = user_email.current.value;

    console.log(entered_email);
    try {
      const response = await createUser(
        entered_name,
        entered_email,
        entered_password
      );
      console.log("User created :D");
    } catch (error) {
      console.log(error);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // register: allows targetting form inputs.
  // formState: allows accessing the current state of the form, and while changing we can check if the input is correct
  // or not, this is useful in order to make validations.
  // also it is worthwhile knowing that the register allows us to use html standard funcitionality such as required
  // errors: allows us accessing information thrown by the errors caused because of the required condition stablished
  // within the tags.

  const mySubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form
      onSubmit={mySubmit}
      className="flex flex-col justify-center items-center w-[1000px] rounded-xl bg-figma_grey z-100 shadow-xl border-2  gap-3  p-6"
    >
      <div className="grid grid-cols-2 w-full">
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Nombre</label>
          <input
            type="text"
            placeholder="sin el @unal.edu.co"
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
          <label className="font-semibold">Apellido</label>
          <input
            type="text"
            placeholder=""
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            {...register("last_name", { required: {
              value:true,
              message: "El appellido es requerido."
            },
            minLength : {
              value: 4,
              message: "El appellido debe tener mínimo 4 carácteres.",
            },
            maxLength : {
              value: 20,
              message: "El appellido debe tener máximo 20 carácteres.",
            }
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
            placeholder="correo institucional"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            {...register("email", { required: {
              value: true,
              message: "El correo electrónico es requeriado"
            },
            pattern : {
              value: /^[A-Za-z]+@unal\.edu\.co$/i,
              message: "El correo debe ser de dominio @unal.edu.co"
            }
          
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
            placeholder="contraseña"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("password", { required: true })}
          ></input>

          {errors.password && (
            <span className="text-[15px] underline text-black-500">
              Contraseña es requerido
            </span>
          )}
        </div>
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Verificar Contraseña</label>
          <input
            type="password"
            placeholder="verificar contraseña"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("verif_password", { required: true })}
          ></input>

          {errors.verif_password && (
            <span className="text-[15px] underline text-black-500">
              Verificar contraseña es requerido
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Código de Verificación</label>
          <input
            type="text"
            placeholder="not implemented yet"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("verif_code", { required: true })}
          ></input>

          {errors.verif_code && (
            <span className="text-[15px] underline text-black-500">
              Código de verificación es requerido
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
            placeholder="sin puntos ni comas"
            className="border-2 rounded-md w-full focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
            {...register("id", { required: true })}
          ></input>

          {errors.id && (
            <span className="text-[15px] underline text-black-500">
              Número de documento es requerido.
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
            placeholder="ciudad"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("birth_place", { required: true })}
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
            {...register("birth_date", { required: {
              value:true,
              message: 'La fecha de nacimiento es requerida.'
            },
            validate : (value) => {
              const fechaDeNacimiento = new Date(value);
              const fechaActual = new Date();
              const edad = fechaDeNacimiento.getFullYear() - fechaActual.getFullYear();
              return edad >= 15 || "Esta seguro que está en la universidad?"
            }
            
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
            placeholder="pais de residencia"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("country", { required: true })}
          ></input>

          {errors.country && (
            <span className="text-[15px] underline text-black-500">
              País de residencia es requerido
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Ciudad de residencia</label>
          <input
            type="text"
            placeholder="ciudad de residencia"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("city", { required: true })}
          ></input>

          {errors.city && (
            <span className="text-[15px] underline text-black-500">
              Ciudad de residencia es requerido
            </span>
          )}
        </div>

        {/** 3 a 12 carácteres*/}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Número Telefónico</label>
          <input
            type="text"
            placeholder="número telefónico"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("phone", { required: true })}
          ></input>

          {errors.phone && (
            <span className="text-[15px] underline text-black-500">
              Número telefónico es requerido
            </span>
          )}
        </div>

        {/** */}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Dirección de Residencia</label>
          <input
            type="text"
            placeholder="dirección"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("address", { required: true })}
          ></input>

          {errors.address && (
            <span className="text-[15px] underline text-black-500">
              Dirección es requerido
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
          <label className="font-semibold">PAPA</label>
          <input
            type="text"
            placeholder="PAPPA"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("PAPA", { required: true })}
          ></input>

          {errors.PAPA && (
            <span className="text-[15px] underline text-black-500">
              PAPPA es requerido
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
            {...register("PBM", { required: true })}
          ></input>

          {errors.PBM && (
            <span className="text-[15px] underline text-black-500">
              PBM es requerido
            </span>
          )}
        </div>

        {/** Avance entre [0, 100]*/}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Avance</label>
          <input
            type="text"
            placeholder="avance"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("advance", { required: true })}
          ></input>

          {errors.advance && (
            <span className="text-[15px] underline text-black-500">
              Avance es requerido
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
              ¿Está matrículado? es requerido
            </span>
          )}
        </div>

        {/** Numero de semestres cursados integer pequeño*/}
        <div className="flex justify-left items-left flex-col gap-2 w-full p-2">
          <label className="font-semibold">Semestres cursados</label>
          <input
            type="text"
            placeholder="semestres cursados"
            className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 py-1 px-1"
            {...register("num_semesters", { required: true })}
          ></input>

          {errors.num_semesters && (
            <span className="text-[15px] underline text-black-500">
              Número de semestres es requerido
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
            {...register("diseases", { required: true })}
          ></input>

          {errors.diseases && (
            <span className="text-[15px] underline text-black-500">
              Enfermedades es requerido
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
    </form>
  );
}

export default RegisterFormStudent;
