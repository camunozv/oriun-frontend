import React from "react";
import { FaUser } from "react-icons/fa";

function LoginForm() {
  return (
    <div className="flex flex-col justify-center items-center w-96 rounded-md bg-figma_grey shadow-xl border-2 border-cyan-200 gap-3 py-4">

      <div className="flex justify-center items-center gap-3 w-full">
        <h1 className="font-bold text-[40px] inline-block">Login</h1>
        <FaUser className="h-[30px] w-[30px]"/>
      </div>

      <div className = "flex justify-left items-left flex-col gap-2">
        <label className="font-semibold">Nombre de Usuario</label>
        <input type="text" placeholder="sin el @unal.edu.co" className="focus:border-gray-500"></input>
      </div>
      
      <div className = "flex justify-left items-left flex-col gap-2 my-4">
        <label className="font-semibold">Ingrese su constraseña</label>
        <input type="password" placeholder="contraseña" className="focus:border-gray-500"></input>
      </div>
    </div>
  );
}

export default LoginForm;
