"use client";
import React, { useState } from "react";
import { AiFillFilePdf } from "react-icons/ai";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { useForm } from "react-hook-form";
import { apiStudentApplications } from "@/app/api/ConvocatoriasEstudiante/studentApplications";

function File({ onChange, id, title, allButtons, call_id, Case, token }) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No seleccionado");

  const {
    formState: { errors },
    control,
  } = useForm();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const file_name = e.target.files[0]?.name;
    const is_pdf = file_name.includes(".pdf");

    if (e.target.files[0].size > 512000 || !is_pdf) {
      alert("El archivo supera las 500KB o no es pdf.");
      return;
    }
    if (file) {
      setFileName(id);

      const reader = new FileReader();

      reader.onload = () => {
        const fileContent = reader.result;
        setFile(fileContent);
      };

      reader.readAsDataURL(file);
    }

    onChange(file);
  };

  const handleUploadDocument = () => {
    if (Case === 4) {
      apiStudentApplications
        .postDocument(call_id, file, id, token)
        .then((response) => {
          alert(response.data.message);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      apiStudentApplications
        .putDocumentModification(call_id, file, id, token)
        .then((response) => {
          alert(response.data.message);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleGetOriginal = () => {
    if (Case === 4) {
      apiStudentApplications
        .getDocument(call_id, "original_doc", id, token)
        .then((response) => {
          window.open(response.data.link);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      apiStudentApplications
        .getApplicationDocument(call_id, "original_doc", id, token)
        .then((response) => {
          window.open(response.data.link);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleGetFilled = () => {
    if (Case === 4) {
      apiStudentApplications
        .getDocument(call_id, "filled_doc", id, token)
        .then((response) => {
          window.open(response.data.link);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      apiStudentApplications
        .getApplicationDocument(call_id, "filled_doc", id, token)
        .then((response) => {
          window.open(response.data.link);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <h1 className="text-2xl text-justify pl-2 pr-10 font-bold">{title}</h1>
      <br />
      <div className="grid grid-cols-6 px-8 pb-4 pt-2">
        <div className="col-span-3">
          <div
            className="border rounded-md border-solid  border-black h-40 w-full"
            onClick={() => document.getElementById(id).click()}
          >
            <input
              className="input-field"
              name="doc_id_student"
              type="file"
              id={id}
              hidden
              onChange={handleFileChange}
            />
            {file ? (
              <AiFillFilePdf size={150} style={{ color: "#f73e3e" }} />
            ) : (
              <div className="flex items-center justify-center p-6 ">
                <MdCloudUpload className="fill-blue-500" size={100} />
                <br />
                <p className="pl-2 pt-4">Inserte un Documento</p>
              </div>
            )}
          </div>
          <div className="p-2">
            <div className="flex bg-lime-200 items-center justify-center ">
              <div className="px-5">{fileName}</div>
              <MdDelete
                size={20}
                className="fill-green-950"
                onClick={() => {
                  {
                    setFile(null);
                  }
                  {
                    setFileName("No seleccionado");
                  }
                  {
                    onChange(undefined);
                  }
                }}
              />
            </div>
          </div>
          {file ? (
            <></>
          ) : (
            <div className="pt-2">
              <span
                style={{
                  backgroundColor: "#ffabab",
                  borderRadius: "2px",
                  color: "#360b0b",
                  fontWeight: "bold",
                }}
              >
                Por favor inserte un documento
              </span>
            </div>
          )}
        </div>
        <div>
          {allButtons === "True" ? (
            <div className="py-14 px-4">
              <button
                type="button"
                onClick={handleGetFilled}
                className={
                  "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                }
              >
                Descargar Llenado
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="py-14 px-4">
          <button
            type="button"
            onClick={handleUploadDocument}
            className={
              "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
            }
          >
            Guardar Nuevo
          </button>
        </div>
        <div>
          {allButtons === "True" ? (
            <div className="py-14 px-4">
              <button
                type="button"
                onClick={handleGetOriginal}
                className={
                  "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                }
              >
                Descargar Básico
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default File;
