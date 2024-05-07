"use client";
import React, {useState} from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useForm, useFieldArray} from "react-hook-form";
import Link from "next/link";
import {AiFillFilePdf} from 'react-icons/ai' 
import {MdDelete, MdCloudUpload} from 'react-icons/md';
import Archivo from "./archivo"


function PostulacionDocumentos(){
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
          redirect("/Convocatorias");
        },
      });
      
      const [values,setValues]=useState({
        request_form:null,
        responsability_form:null
      });

      
    
      const token = session?.access;
      const {register, handleSubmit, formState: { errors }, control}=useForm();

      const onSubmit=handleSubmit((data)=>{console.log(data)});

    return (
        <form onSubmit={onSubmit}>
          
            <h1 className="text-black font-bold text-[35px]">Postularse a la Convocatoria</h1>
            <br/>
                <p className="text-2xl text-justify pl-8 pr-10">
                  En está sección puede subir sus documentos. De click en el recuadro para subir 
                  el documento que desee, una vez lo suba se va a mostrar el nombre de su archivo y
                  un icono para eliminarlo si se equivoco de documento. Al lado encuentra el boton 
                  para descargar el archivo que subio, descargar el archivo original y finalmente
                  el botón para cargar el documento a la base de datos.  
                </p>
             <br/>
                <p className="text-2xl text-justify pl-8 pr-10">
                  Por favor cuando este seguro que su documento está correcto y corresponde a la 
                  casilla correspondiente, dele click en Subir para que se guarden. Una vez todos los 
                  documentos estén cargados, de click en enviar. 
                </p>
            <br/>
            <Archivo title="Formato de Solicitud" nombrearchivo="request_form" idFile="1"/>
            <br/>
            <Archivo title="Formato de Responsabilidad Nacional" nombrearchivo="responsibility_form" idFile="2" />
            <br/>
            <div>
            <button type="submit" className={ "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2" }>
                  Enviar
                </button>
            </div>

        </form>
    )

}
export default PostulacionDocumentos;