import React from "react";
import CardResultadosEmp from "@/components/Results/CardResultadosEmp"

function ResultConvAdmin(){

    return(
        <div className="p-8">
            <h1 className="font-bold text-[40px] underline text-center">Conv No</h1>
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