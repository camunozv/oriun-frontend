import React from "react";
import CardResultadosEmp from "@/components/Results/CardResultadosEmp"

function ResultConvAdmin(){

    return(
        <div className="p-8">
            <h1 className="font-bold text-[40px] underline text-center">Conv No</h1>
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