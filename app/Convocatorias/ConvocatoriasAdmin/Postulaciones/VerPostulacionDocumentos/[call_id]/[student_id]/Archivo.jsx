import React from "react";
import { AiFillFilePdf } from "react-icons/ai";
import { MdCloudUpload, MdDelete } from "react-icons/md";

function Archivo({ title, fileName, call_id, token }) {

  const downloadFile = () => {
    onDownload();
  };

  return (
    <div> 
      <h1 className="text-2xl text-justify pl-2 pr-10 font-bold">{title}</h1>
      <br/>
      <div className="grid grid-cols-6 px-8 pb-4 pt-2">
        <div className="col-span-3">
          <div className="border rounded-md border-solid  border-black h-40 w-full">
            <AiFillFilePdf size={150} style={{ color: "#f73e3e" }} />
          </div>
        </div>
        <div className="py-14 px-20">
          <button type="button" onClick={downloadFile} 
            className={
              "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-5 px-20"
            }>
              Descargar
          </button>
        </div>
        <div className="py-14 px-40">
          <button type="button" className={
            "flex transition-all items-center justify-center gap-3 border-2 rounded-xl w-full font-semibold bg-figma_blue border-figma_blue text-white py-5 px-20"
          }>
            Ver
          </button>
        </div>
      </div>
    </div> 
  );
}

export default Archivo;
