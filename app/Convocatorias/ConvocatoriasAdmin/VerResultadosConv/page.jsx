import React from "react";
import CardResultadosEmp from "@/components/Results/CardResultadosEmp"

function ResultConvAdmin(){

    return(
        <div className="p-8">
            <h1 className="font-bold text-[40px] underline text-center">Conv No</h1>
            <br/>
            <div className=" flex justify-center items-center">
               <div className="w-3/3 border border-black px-3 py-2 rounded-lg">
                <div className="grid grid-cols-4">
                    <div className="p-2">
                        <div className="border border-black p-2">
                        <h6 className="font-bold">ID Estudiante</h6>
                        </div>
                    </div>
                    <div className="p-2 col-span-2">
                        <div className="border border-black p-2">
                        <h6 className="font-bold text-center">Aprobado</h6>
                        </div>
                    </div>
                    <div className="p-2">
                        <button
                            type="button"
                            className="font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2 px-10"
                            >
                            Filtrar
                        </button>
                    </div>

                </div>
               </div>
            </div>
            <br/>
            <div className="flex grid grid-cols-2 justify-center">
                <div className="px-3">
                    <p className="font-bold text-[20px] text-right">Aprobado 
                        <img src={"/images/Aprobada.jpeg"} className="inline object-contain h-10 w-10"/> 
                    </p>
                </div>
                <div className="px-3">
                    <p className="font-bold text-[20px] text-left"> No Aprobado 
                        <img src={"/images/NoAprobada.jpeg"} className="inline object-contain h-10 w-10"/> 
                    </p>
                </div>
            </div>
            <br/>
            <div className="grid grid-cols-3">
                <div className="p-2">
                   <CardResultadosEmp StudentResult="Aprobado"/> 
                </div>
                <div className="p-2">
                   <CardResultadosEmp StudentResult="Aprobado"/> 
                </div>
                <div className="p-2">
                   <CardResultadosEmp StudentResult="No Aprobado"/> 
                </div>
            </div>
        </div>
    )

}
export default ResultConvAdmin;