"use client";
import React, { useState } from 'react';
import Navbar from '@/components/Navbar/Navbar';
import preguntas from '@/constants/preguntas.json';


function PreguntasFrec() {
  const [selectedMessage, setSelectedMessage] = useState("");
  const [ansTitle, setAnsTitle] = useState("");
  const handleClick = (message,ansTitle) => {
    setSelectedMessage(message);
    setAnsTitle(ansTitle)
  };

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-2 gap-2">
        <div className="pl-5 pr-20 pt-10">
          <br />
          {preguntas.map((item,index) => (
            <div key={index}>
            
            <button 
                type='button' 
                className={"flex transition-all items-center justify-center gap-3 border rounded-full w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-2"}
                onClick={() => handleClick(item.title,item.ans_title)}>{item.title}</button>
              
              <br />
            </div>
            
          ))}
        </div>
  
        {selectedMessage === "" ? (
        <div className="pr-12 pt-10 pb-10">
        <h1 className="text-black font-bold text-[35px]">Bienvenidos a la sección de Preguntas Frecuentes de ORIUN</h1>
        <br />
        <p className='text-2xl'>En está sección encuentra las preguntas frecuentes que se tienen al realizar un proceso de movilidad en la ORI. Por favor, selecciona la pregunta, para que se muestre la respuesta. Cualquier otra inquietud se puede comunicar al siguiente correo electrónico ori_bog@unal.edu.co </p>
      </div>
      ) : (
        <div className="pr-12 pt-10 pb-10">
          <h1 className="text-black font-bold text-[35px]">{selectedMessage}</h1>
          <br />
          <div dangerouslySetInnerHTML={{ __html: ansTitle }} />
        </div>
      )}
    
        
      </div>
    </div>
  );
}

export default PreguntasFrec;
