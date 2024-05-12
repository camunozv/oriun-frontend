import React from "react";
import { AiFillFilePdf } from "react-icons/ai";

function Archivo({ title, fileName, call_id, token, applicationDocuments }) {
  // let finalLink = '';
  const downloadFile = () => {
    let finalLink = applicationDocuments[fileName];
    const url = finalLink;
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const viewFile = () => {
    let finalLink = applicationDocuments[fileName];
    window.open(finalLink);
  };

  return (
    <div>
      <h1 className="text-2xl text-justify pl-2 pr-10 font-bold">{title}</h1>
      <br />
      <div className="grid grid-cols-6 px-8 pb-4 pt-2">
        <div className="col-span-3">
          <div className="border rounded-md border-solid  border-black h-40 w-full">
            <AiFillFilePdf size={150} style={{ color: "#f73e3e" }} />
          </div>
        </div>
        <div className="py-14 px-20">
          <button
            type="button"
            onClick={downloadFile}
            className={
              "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-5 px-20"
            }
          >
            Descargar
          </button>
        </div>
        <div className="py-14 px-40">
          <button
            type="button"
            onClick={viewFile}
            className={
              "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-5 px-20"
            }
          >
            Ver
          </button>
        </div>
      </div>
    </div>
  );
}

export default Archivo;
