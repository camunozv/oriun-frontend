"use client";
import React, {useState} from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useForm, useFieldArray} from "react-hook-form";
import Link from "next/link";
import {AiFillFilePdf} from 'react-icons/ai' 
import {MdDelete, MdCloudUpload} from 'react-icons/md';

function Archivo(props){
    const[file, setFile] = useState(null);
    const {register, formState: { errors }}=useForm();

    const handleFileChange = (e) => {
        if(e.target.files[0].size>2097152){
          alert("El archivo supera 2MB");
          return;
        }
        setFile(e.target.files[0]);
        if(setFile){
          setFileName(e.target.files[0].name)
        }
      };
    
    const [fileName, setFileName] = useState("No seleccionado");
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

    return(
        <div>
        <h1 className="text-black font-bold text-[25px] pl-6">{props.title}</h1>
        <div className="grid grid-cols-6 px-8 pb-4 pt-2">
            <div className="col-span-3">
                <div  onClick={()=>document.querySelector(".input-field").click()} 
                className="border rounded-md border-solid  border-black h-40 w-full">
                <input
                    className="input-field"
                    type="file"
                    id={props.idFile}
                    hidden
                    {...register(props.nombrearchivo,{
                      required:{value: true, message:"No ha insertado un documento"}})}
                    onChange={handleFileChange}
                    />
                {file ? <AiFillFilePdf size={150} style={{ color: '#f73e3e' }}/> : 
                <div className="flex items-center justify-center p-8 ">
                <MdCloudUpload className="fill-blue-500" size={100} />
                <br/>
                <p className="pl-6 pt-4">Inserte un Documento</p> 
                </div>

                }
                </div>
                <div className="p-2">
                <div className="flex bg-lime-200 items-center justify-center ">
                    <AiFillFilePdf className="fill-green-950" size={20}/>
                    <div className="px-5">{fileName}</div>
                        <MdDelete size={20} className="fill-green-950" onClick={()=>{{setFile(null)};{setFileName("No seleccionado")}}}/>
                </div>
                <div className="pt-2" >
                {/* {errors.responsibility_form && <span style={{ backgroundColor: '#ffabab', borderRadius: '2px', color: '#360b0b', fontWeight: 'bold'  }}>{errors.responsibility_form.message} </span>}*/}

                </div>
                </div>
            </div>
            <div className="py-14 px-4">
                <button type="button" onClick={downloadFile} disabled={!file} 
                className={
                    "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                  }>
                  Descargar
                </button>
            </div>  
            <div className="py-14 px-4">
                <button className={
                      "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                    }>
                  Descargar Original
                </button>
            </div>
            <div className="py-14 px-4">
                <button type="submit" className={
                      "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                    }>
                  Subir
                </button>
            </div>
            </div>
            </div>
        
    )
    

}

export default Archivo;