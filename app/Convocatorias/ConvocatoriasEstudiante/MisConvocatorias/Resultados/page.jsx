import React from "react";
import ResultDetailsConv from "@/components/Results/ResultDetailsConv";

function ResultadosEstudiante(){
    const aprove='R';
    if(aprove=='True'){
        return(
            <div className="p-8">
                <h1 className="text-[50px] font-bold">
                    ¡Felicidades usted ha sido seleccionad@!
                </h1>
                <h1 className="text-[50px] font-bold">
                    CONV : 
                </h1>
                <div className="px-8 py-10">
                    <ResultDetailsConv/>
                </div>
            </div>
        )
    } else if(aprove=='False'){
        return (
            <div className="p-8">
                <h1 className="text-[50px] font-bold">
                    ¡Lo sentimos usted no ha sido seleccionad@!
                </h1>
                <br/>
                <h1 className="text-[50px] font-bold">
                    CONV : 
                </h1>
                <div className="px-8 py-10">
                    <ResultDetailsConv/>
                </div>
            </div>
        )
    } else{
        return(
            <div className="p-8">
                <h1 className="text-[50px] font-bold">
                    Su postulación a la convocatoria todavía está en revisión, por favor revise después
                </h1>
                <br/>
                <h1 className="text-[50px] font-bold">
                    CONV : 
                </h1>
                <div className="px-8 py-10">
                    <ResultDetailsConv/>
                </div>
        </div>
        )   
    }
}
export default ResultadosEstudiante;