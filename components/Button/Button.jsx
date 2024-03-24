import Image from "next/image";
import React from "react";
import Link from "next/link";

function Button({ title, type, variant, children }) {
  // btn_dark_green : bg-green-90 px-8 py-4 text-white transition-all hover:bg-black

  // "whitespace-nowrap" : allows manipulating the whitespace property from the text. Setting it up to nowrap means we allow
  // the text to continue in the same line, eventhought it exceeds teh with of its container.
  return (
    <button
      className={`flex transition-all items-center justify-center gap-3 border rounded-full ${variant}`}
      type={type}
    >
      <label className="text-[16px] font-[700] whitespace-nowrap">
        {title}
      </label>

      {children}
    </button>
  );
}

export default Button;
