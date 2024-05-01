"use client";
import RegisterFormAdmin from "@/components/RegisterPage/RegisterFormAdmin";
import RegisterFormStudent from "@/components/RegisterPage/RegisterFormStudent";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";

function RegisterUserPage() {
  const [toggle, setToggle] = useState();

  const handleChangeForm = (e) => {
    setToggle(e.target.value);
  };

  return (
    <>
      <main className="flex flex-col justify-center items-center w-full p-20">
        <div className="flex flex-col justify-center rounded-xl items-center w-[1200px] shadow-xl p-10 bg-gray-10">
          <div className="flex justify-center items-center w-full gap-3">
            <h1 className="font-bold text-[60px] inline-block">Registro</h1>
            <FaUser className="h-[50px] w-[50px]" />
          </div>

          <div className="flex justify-left items-left flex-col gap-2 w-[1000px] pt-1 pb-8">
            <label className="font-semibold">Selecciona tu rol</label>
            <select
              id="headquarter"
              name="toggle_form"
              className="border-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600 px-1 py-1"
              placeholder=""
              onChange={handleChangeForm}
            >
              <option value="">Estudiante</option>
              <option value="false">Empleado</option>
            </select>
          </div>

          {toggle ? <RegisterFormAdmin /> : <RegisterFormStudent />}
        </div>
      </main>
    </>
  );
}

export default RegisterUserPage;
