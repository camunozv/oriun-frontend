import React from "react";
function ResultDetails({ university, country, description, student_id }) {
  return (
    <div className="max-w-screen-lg border-2 border-slate-400 rounded-lg">
      <div className="p-6">
        <div className="grid grid-cols-2 gap-5">
          <h1 className="font-bold text-[30px] underline text-left">
            {university}
          </h1>

          <h1 className="font-bold text-[30px] text-right">Pais: {country}</h1>

          <h6 className="font-bold text-left underline">
            No de documento: {student_id}
          </h6>
        </div>
        <br />
        <h2 className="font-bold text-[25px] flex items-center justify-between">
          Descripción:
        </h2>
        <p id="description paragraph">{description}</p>
      </div>
    </div>
  );
}
export default ResultDetails;
