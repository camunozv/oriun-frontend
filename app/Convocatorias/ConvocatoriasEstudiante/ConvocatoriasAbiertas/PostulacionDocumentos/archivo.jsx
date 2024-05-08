"use client";
import React, { useState } from "react";
import { AiFillFilePdf } from "react-icons/ai";
import {  MdCloudUpload, MdDelete } from "react-icons/md";
import { useForm } from "react-hook-form";


function Archivo({ onChange ,id, title, allButtons}) {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No seleccionado");

  const {
    register,
    formState: { errors },
    control,
  } = useForm();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if(e.target.files[0].size>512000){
      alert("El archivo supera las 500KB");
      return;
    }
    setFile(file);
    if (setFile) {
      setFileName(file.name);
    }
    onChange(file);
  };

  const downloadFile = () => {
    if (file) {
      const url = URL.createObjectURL(file);
      const a = document.createElement("a");
      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div>
       
      <h1 className="text-2xl text-justify pl-2 pr-10 font-bold">{title}</h1>
      <br/>
      <div className="grid grid-cols-6 px-8 pb-4 pt-2">
        <div className="col-span-3">
          <div className="border rounded-md border-solid  border-black h-40 w-full"
          onClick={()=>document.getElementById(id).click()} >
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
              <MdDelete size={20} className="fill-green-950" 
              onClick={()=>{{setFile(null)};{setFileName("No seleccionado")};{onChange(undefined)}}}/>
            </div>
          </div>
          {file ? (
              <></>
            ) : (
              <div className="pt-2">
              <span style={{ backgroundColor: '#ffabab', borderRadius: '2px', color: '#360b0b', fontWeight: 'bold' }}>
                Por favor inserte un documento
              </span>
              </div>
            )}
        </div>
        <div>
          {allButtons =="True" ? (
              <div className="py-14 px-4">
              <button type="button" onClick={downloadFile} disabled={!file} 
                className={
                  "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                }>
                  Descargar
                </button>
              </div>
            ) : (
              <></>
            )}
        </div>
        <div className="py-14 px-4">
          <button type="submit" className={
            "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
          }>
            Subir
          </button>
        </div>
        <div>
          {allButtons =="True" ? (
              <div className="py-14 px-4">
              <button className={
                "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
              }>
                Descargar Original
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

export default Archivo;