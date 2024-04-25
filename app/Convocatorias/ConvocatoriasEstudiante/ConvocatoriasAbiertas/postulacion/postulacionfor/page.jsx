"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useForm, useFieldArray} from "react-hook-form";

//Es donde verifico el inicio de seccion y donde coloco ruta dinaminca
//de aucerdo al id de la convocatoria
//tener en cuenta que debo poner aqui la verificacion del usuario si puede postularse o no segun
//numero de convocatorias postulado menor a dos, cumplir porcentaje  de avance, papa, estar matriculado
//obtener info del usuario para comparar con info de la convocatoria
//Convocatorias/ConvEstudi/postulacion128384 (api)



function Postulacionform(){
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
          redirect("/Convocatorias");
        },
      });
      
    
      const token = session?.access;

      const {register, handleSubmit, formState:{errors}, control}= useForm({
        defaultValues: {
          materias: [{nombreunal: '', codigounal: 0, nombredestino: ''}]
        }
      });
      const { fields, append, remove } = useFieldArray({
        name: 'materias',
        control,
      })


      console.log(errors)
      const onSubmit=handleSubmit((data)=>{console.log(data)})

      return(
        <form onSubmit={onSubmit}>
        <div className="p-10">
        <h1 className="text-black font-bold text-[35px]">Postularse a la Convocatoria</h1>
        <br />
                <p className="text-2xl text-justify pl-8 pr-10">
                  Esta información es requerida para completar su solicitud. Es importante
                  que complete todos los campos requeridos. En la siguiente página podra subir los 
                  documentos que se requieren para hacer valida su postulación. 
                </p>
        <br/>
        <h1 className="text-black font-bold text-[25px] pl-6">Información de Contacto</h1>
        <br/>
          <div>
           <label htmlFor="nombre"></label>  
            <input
             placeholder="Nombre"
             type="text"
             {...register("nombre",
              {required: {
                value: true,
                message: "Campo obligatorio"
              },
              pattern:{
                value: /^[a-zA-Z]+$/,
                message: "Este campo solo admite letras"
              }
              }
             )}
             />
            {
              errors.nombre && <span>{errors.nombre.message}</span>
            }
          </div>
        <br/>
        <div>
           <label htmlFor="telefono"></label>  
            <input
             placeholder="Teléfono"
             type="number"
             {...register("telefono",
              {required: {
                value: true,
                message: "Campo obligatorio"
              },
              }
             )}
             />
            {
              errors.telefono && <span>{errors.telefono.message}</span>
            }
          </div>
        <br/>
        <h1 className="text-black font-bold text-[25px] pl-6">Información de Salud</h1>
        <br/>
        <div>
           <label htmlFor="medicinas"></label>  
            <input
             placeholder="Medicinas"
             type="text"
             {...register("medicinas",
              {required: {
                value: true,
                message: "Campo obligatorio"
              },
              }
             )}
             />
            {
              errors.medicinas && <span>{errors.medicinas.message}</span>
            }
          </div>
        <br/>
        <div>
           <label htmlFor="enfermedades"></label>  
            <input
             placeholder="Enfermedades"
             type="text"
             {...register("enfermedades",
              {required: {
                value: true,
                message: "Campo obligatorio"
              },
              }
             )}
             />
            {
              errors.enfermedades && <span>{errors.enfermedades.message}</span>
            }
          </div>
        <br/>
        <h1 className="text-black font-bold text-[25px] pl-6">Información de la Movilidad</h1>
        <br/>
        <div>
           <label htmlFor="fechadeinicio"></label>  
            <input
             placeholder="Fecha de Inicio"
             type="date"
             {...register("fechadeinicio",
              {required: {
                value: true,
                message: "Campo obligatorio"
              },
              }
             )}
             />
            {
              errors.fechadeinicio && <span>{errors.fechadeinicio.message}</span>
            }
          </div>
        <br/>
        <div>
           <label htmlFor="nombrecoordinadordestino"></label>  
            <input
             placeholder="Nombre Coordinador del Destino"
             type="text"
             {...register("nombrecoordinadordestino",
              {required: {
                value: true,
                message: "Campo obligatorio"
              },
              pattern:{
                value: /^[a-zA-Z]+$/,
                message: "Este campo solo admite letras"
              }
              }
             )}
             />
            {
              errors.nombrecoordinadordestino && <span>{errors.nombrecoordinadordestino.message}</span>
            }
          </div>
        <br/>
        <div>
           <label htmlFor="emailcoordinador"></label>  
            <input
             placeholder="Email Coordinador del Destino"
             type="text"
             {...register("emailcoordinador",
              {required: {
                value: true,
                message: "Campo obligatorio"
              },
              pattern:{
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Inserte un correo valido"
              }
              }
             )}
             />
            {
              errors.emailcoordinador && <span>{errors.emailcoordinador.message}</span>
            }
          </div>
        <br/>
        <div>
           <label htmlFor="telefonocoordinador"></label>  
            <input
             placeholder="Telefono Coordinador del Destino"
             type="number"
             {...register("telefonocoordinador",
              {required: {
                value: true,
                message: "Campo obligatorio"
              },
              }
             )}
             />
            {
              errors.telefonocoordinador && <span>{errors.telefonocoordinador.message}</span>
            }
          </div>
        <br/>
        <h1 className="text-black font-bold text-[25px] pl-6">Materias a ver</h1>
        <br/>
        {fields.map((field, index)=>{
          return <section key={field.id}>
            <br/>
            <div className="grid grid-cols-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Nombre Unal"
                  {...register(`materias.${index}.nombreunal`,
                  {
                    pattern:{
                      value: /^[a-zA-Z]+$/,
                    }
                  }
                  )}
                />
              </div>
              <div>
                <input 
                  type="number" 
                  placeholder="Codigo Unal"
                  {...register(`materias.${index}.codigounal`)}
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Nombre Unal"
                  {...register(`materias.${index}.nombredestino`,
                  {
                    pattern:{
                      value: /^[a-zA-Z]+$/,
                    }
                  }
                  )}
                />
              </div>
              <div>
                <button onClick={()=>remove(index)} type="button" className={ "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2" }>
                  Eliminar
                </button>
              </div>
            </div>
            <br/>
          </section>
        })}
        <br/>
        <button onClick={()=>{
          append();
        }} type="button" className={ "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2" }>
                Agregar
        </button>
        <br/>
          <div className="grid grid-cols-2">
            <div>
              <button type="button" className={ "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2" }>
                Volver
              </button>
            </div>
            <div>
              <button type="submit" className={ "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-2" }>
                Continuar
              </button>
            </div>
          </div>
        </div>
        </form>
      )
}

export default Postulacionform;