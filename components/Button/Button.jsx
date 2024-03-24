import Image from "next/image";
import React from "react";

function Button({ title, type, variant, icon }) {
  // btn_dark_green : bg-green-90 px-8 py-4 text-white transition-all hover:bg-black

  return (
    <button
      className={`flex items-center justify-center gap-3 border rounded-full ${variant}`}
      type={type}
    >
      <label className="text-[16px] font-[700]">{title}</label>
      {icon && <Image src={icon} alt={title} height={24} width={24} />}
    </button>
  );
}

export default Button;
