import React from "react";
function ResultDetails(){
    return(
        <div className="max-w-screen-lg border-2 border-slate-400 rounded-lg">
            <div className="p-6">
            <div className="grid grid-cols-2">
                <div>
                    <h1 className="font-bold text-[35px] underline text-left">
                        Universidad {/**llamado api universidad ofrecen conv */}
                    </h1>
                </div>
                <div>
                    <h1 className="font-bold text-[30px] text-right">
                        Pais {/**llamado api pais de la convocatoria */}
                    </h1>
                </div>
                
            </div>
            <br />
            <h2 className="font-bold text-[30px] flex items-center justify-between">
                Oferentes: {/**llamado api oferentes conv */}
            </h2>
            <br />
            <label
                htmlFor="description paragraph"
                className="font-bold text-[25px]"
            >
                Descripción:
            </label>
            <p id="description paragraph">Inserte descripcion de la convocatoria</p>
            </div>
        </div>
    )
}
export default ResultDetails;