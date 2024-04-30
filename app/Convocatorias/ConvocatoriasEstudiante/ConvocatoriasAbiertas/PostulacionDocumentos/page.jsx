"use client";
import React, {useState} from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useForm, useFieldArray} from "react-hook-form";
import Link from "next/link";
import {AiFillFilePdf} from 'react-icons/ai' 
import {MdDelete, MdCloudUpload} from 'react-icons/md'


function PostulacionDocumentos(){
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
          redirect("/Convocatorias");
        },
      });
      
    
      const token = session?.access;
      const {register, handleSubmit, control}=useForm();
      const[file, setFile] = useState(null);
      const onSubmit=handleSubmit((data)=>{console.log(data)});

      const handleFileChange = (e) => {
        setFile(e.target.files[0]);
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
            <h1 className="text-black font-bold text-[25px] pl-6">Formato de Solicitud</h1>
            <div className="grid grid-cols-6 px-8 pb-4 pt-2">
            <div className="col-span-3">
                <div  onClick={()=>document.querySelector(".input-field").click()} 
                className="border rounded-md border-solid  border-black h-40 w-full">
                <input
                    className="input-field"
                    type="file"
                    id="file"
                    hidden
                    {...register("request_form")}
                    onChange={handleFileChange}
                    />
                {file ? <AiFillFilePdf/> : 
                <section>
                <MdCloudUpload className="fill-blue-500" />
                <p>Inserte un Documento</p> 
                </section>

                }
                </div>
                <div>
                    <AiFillFilePdf/>
                    <span>
                        <MdDelete onClick={()=>{setFile(null)}}/>
                    </span>
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
                <button className={
                      "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2"
                    }>
                  Subir
                </button>
            </div>
            </div>
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