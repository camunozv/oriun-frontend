import Image from "next/image";
import React from "react";


function Button({ title, type, variant, children }) {
  // btn_dark_green : bg-green-90 px-8 py-4 text-white transition-all hover:bg-black

  return (
    <button
      className={`flex transition-all items-center justify-center gap-3 border rounded-full ${variant}`}
      type={type}
    >
      <label className="text-[16px] font-[700]">{title}</label>
      {children}
    </button>
  );
}

export default Button;
