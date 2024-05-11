"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { apitypePos } from "@/app/api/ConvocatoriasEstudiante/typePostulationConv";
import Archivo from "./Archivo.jsx";
import Comentarios from "./Comentarios.jsx";


function VerPostulacionDocumentos() {
    const { data: session, status } = useSession({
      required: true,
      onUnauthenticated() {
        redirect("/Convocatorias");
      },
    });  
    const token = session?.access;


   /*Nota, para este punto es necesario usar un endpoint para recibir el tipo de la convocatoria. Preguntar al back*/

    const region="International";
  
    /*const [convocatoria, setConvocatoria]=useState({})
    useEffect(()=>{
      apitypePos.getRegionCall(callId,token).then((response)=>{setConvocatoria(response.data)}).then(console.log(convocatoria)).catch((error)=>{console.log(error)})
    },[])*/
  
    const {
      register,
      handleSubmit,
      formState: { errors },
      control,
    } = useForm();
  
    const onSubmit = handleSubmit((data) => {
      console.log(data);
    });
  
    const [values, setValues] = useState({
      request_form:null,
      responsibility_form:null,
      data_processing_form: null,
      doc_id_student: null,
      grades_certificate: null,
    });
  
  
    const handleChange=(key,file)=>{
      setValues((prevValues) => ({
        ...prevValues,
        [key]: file
      }));
    }
    if (region==="Uniandes") {
    return (
      <div className="p-8"> 
        <h1 className="text-black font-bold text-[35px]">Documentos de la Postulación</h1>
        <br/>
        <p className="text-2xl text-justify pl-8 pr-10">
          A continuacion se encuentran los documentos enviados por el estudiante para 
          postularse a esta convocatoria.
        </p>
        <br/>
        <p className="text-2xl text-justify pl-8 pr-10">
          Por favor revisar que los documentos cumplen con las condiciones solicitadas para la convocatoria. 
          De ser necesario un cambio en los documentos, podra dejar un comentario al final de esta seleccion y 
          notificar al estudiante y para realizar las correciones necesarias. 
        </p>
        <br/>


      <form onSubmit={onSubmit}>

        <Archivo
          id="request_form"
          title="Formato de Solicitud"
          nombrearchivo="request_form"
          onChange={(file) => handleChange('request_form', file)}
          allButtons= "True"
        />
        <br />
        <Archivo
            id="responsibility_form"
            title="Formato de Responsabilidad Nacional"
            nombrearchivo="responsibility_form"
            onChange={(file) => handleChange('responsibility_form', file)}
            allButtons="True"
        />
        <br />
        <Archivo
            id="data_processing_form"
            title="Tratamiento de Datos Personales"
            nombrearchivo="data_processing_form"
            onChange={(file) => handleChange('data_processing_form', file)}
            allButtons="True"
        />
        <br />
        <Archivo
            id="doc_id_student"
            title="Documento de Identidad"
            nombrearchivo="doc_id_student"
            onChange={(file) => handleChange('doc_id_student', file)}
            allButtons="False"
        />
        <br />
        <Archivo
            id="grades_certificate"
            title="Certificado de Notas"
            nombrearchivo="grades_certificate"
            onChange={(file) => handleChange('grades_certificate', file)}
            allButtons="False"
        />
        <br />
        <h1 className="text-2xl font-bold text-center">A continuación, asigne el estado de esta Postulación</h1>
        <br />
        <div className="flex">  
          <button
            type="button"
            className="flex-1 mr-2 font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"

          >
            Pendiente de modificación
          </button>

          <button
            type="button"
            className="flex-1 ml-2 font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
          >
            Aceptado
          </button>
          </div>
        <br />
        <br />


        <Comentarios />

        </form>
        </div> 
      )} else if (region==="National") {
        return (
          <div className="p-8"> 
            <h1 className="text-black font-bold text-[35px]">Documentos de la Postulación</h1>
            <br/>
            <p className="text-2xl text-justify pl-8 pr-10">
              A continuacion se encuentran los documentos enviados por el estudiante para 
              postularse a esta convocatoria.
            </p>
            <br/>
            <p className="text-2xl text-justify pl-8 pr-10">
              Por favor revisar que los documentos cumplen con las condiciones solicitadas para la convocatoria. 
              De ser necesario un cambio en los documentos, podra dejar un comentario al final de esta seleccion y 
              notificar al estudiante y para realizar las correciones necesarias. 
            </p>
            <br/>
    
    
          <form onSubmit={onSubmit}>
    
            <Archivo
              id="request_form"
              title="Formato de Solicitud"
              nombrearchivo="request_form"
              onChange={(file) => handleChange('request_form', file)}
              allButtons= "True"
            />
            <br />
            <Archivo
                id="responsibility_form"
                title="Formato de Responsabilidad Nacional"
                nombrearchivo="responsibility_form"
                onChange={(file) => handleChange('responsibility_form', file)}
                allButtons="True"
            />
            <br />
            <Archivo
                id="data_processing_form"
                title="Tratamiento de Datos Personales"
                nombrearchivo="data_processing_form"
                onChange={(file) => handleChange('data_processing_form', file)}
                allButtons="True"
            />
            <br />
            <Archivo
                id="doc_id_student"
                title="Documento de Identidad"
                nombrearchivo="doc_id_student"
                onChange={(file) => handleChange('doc_id_student', file)}
                allButtons="False"
            />
            <br />
            <Archivo
                id="grades_certificate"
                title="Certificado de Notas"
                nombrearchivo="grades_certificate"
                onChange={(file) => handleChange('grades_certificate', file)}
                allButtons="False"
            />
            <br />
            <Archivo
                id="sigueme_form"
                title="Documento SIGUEME"
                nombrearchivo="sigueme_form"
                onChange={(file) => handleChange('sigueme_form', file)}
                allButtons="False"
            />
            <br />
            <Archivo
                id="payment_tuition"
                title="Certificado de Pago de Matrícula."
                nombrearchivo="payment_tuition"
                onChange={(file) => handleChange('payment_tuition', file)}
                allButtons="False"
            />
            <br />
            <Archivo
                id="eps_certificate"
                title="Certificado de Afiliación EPS."
                nombrearchivo="eps_certificate"
                onChange={(file) => handleChange('eps_certificate', file)}
                allButtons="False"
            />
            <br />
            <Archivo
                id="economic_letter"
                title="Carta de Suficiencia Económica."
                nombrearchivo="economic_letter"
                onChange={(file) => handleChange('economic_letter', file)}
                allButtons="False"
            />
            <br />
            <h1 className="text-2xl font-bold text-center">A continuación, asigne el estado de esta Postulación</h1>
            <br />
            <div className="flex">  
              <button
                type="button"
                className="flex-1 mr-2 font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
    
              >
                Pendiente de modificación
              </button>
    
              <button
                type="button"
                className="flex-1 ml-2 font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
              >
                Aceptado
              </button>
              </div>
            <br />
            <br />
    
    
            <Comentarios />
    
            </form>
            </div> 
          )} else if (region==="International") {
            return (
              <div className="p-8"> 
                <h1 className="text-black font-bold text-[35px]">Documentos de la Postulación</h1>
                <br/>
                <p className="text-2xl text-justify pl-8 pr-10">
                  A continuacion se encuentran los documentos enviados por el estudiante para 
                  postularse a esta convocatoria.
                </p>
                <br/>
                <p className="text-2xl text-justify pl-8 pr-10">
                  Por favor revisar que los documentos cumplen con las condiciones solicitadas para la convocatoria. 
                  De ser necesario un cambio en los documentos, podra dejar un comentario al final de esta seleccion y 
                  notificar al estudiante y para realizar las correciones necesarias. 
                </p>
                <br/>
        
        
              <form onSubmit={onSubmit}>
        
                <Archivo
                  id="request_form"
                  title="Formato de Solicitud"
                  nombrearchivo="request_form"
                  onChange={(file) => handleChange('request_form', file)}
                  allButtons= "True"
                />
                <br />
                <Archivo
                    id="responsibility_form"
                    title="Formato de Responsabilidad Nacional"
                    nombrearchivo="responsibility_form"
                    onChange={(file) => handleChange('responsibility_form', file)}
                    allButtons="True"
                />
                <br />
                <Archivo
                    id="data_processing_form"
                    title="Tratamiento de Datos Personales"
                    nombrearchivo="data_processing_form"
                    onChange={(file) => handleChange('data_processing_form', file)}
                    allButtons="True"
                />
                <br />
                <Archivo
                    id="doc_id_student"
                    title="Documento de Identidad"
                    nombrearchivo="doc_id_student"
                    onChange={(file) => handleChange('doc_id_student', file)}
                    allButtons="False"
                />
                <br />
                <Archivo
                    id="grades_certificate"
                    title="Certificado de Notas"
                    nombrearchivo="grades_certificate"
                    onChange={(file) => handleChange('grades_certificate', file)}
                    allButtons="False"
                />
                <br />
                <Archivo
                    id="motivation_letter"
                    title="Carta de Motivación."
                    nombrearchivo="motivation_letter"
                    onChange={(file) => handleChange('motivation_letter', file)}
                    allButtons="False"
                />
                <br />
                <Archivo
                    id="passport"
                    title="Pasaporte."
                    nombrearchivo="passport"
                    onChange={(file) => handleChange('passport', file)}
                    allButtons="False"
                />
                <br />
                <Archivo
                    id="language_certificate"
                    title="Certificado de Idioma."
                    nombrearchivo="language_certificate"
                    onChange={(file) => handleChange('language_certificate', file)}
                    allButtons="False"
                />
                <Archivo
                    id="economic_letter"
                    title="Carta de Suficiencia Económica."
                    nombrearchivo="economic_letter"
                    onChange={(file) => handleChange('economic_letter', file)}
                    allButtons="False"
                />
                <br />
                <br />
                <h1 className="text-2xl font-bold text-center">A continuación, asigne el estado de esta Postulación</h1>
                <br />
                <div className="flex">  
                  <button
                    type="button"
                    className="flex-1 mr-2 font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
        
                  >
                    Pendiente de modificación
                  </button>
        
                  <button
                    type="button"
                    className="flex-1 ml-2 font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
                  >
                    Aceptado
                  </button>
                  </div>
                <br />
                <br />
        
        
                <Comentarios />
        
                </form>
                </div> 
              )}
  }
export default VerPostulacionDocumentos