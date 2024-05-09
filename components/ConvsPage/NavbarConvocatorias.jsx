"use client";
import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

function NavbarConvocatorias({ links }) {
  if (!links) {
    return (
      <nav className="flex items-center justify-between mx-auto max-w-[1580px] p-5 shadow-md rounded-xl">
        <h1 className="text-black font-bold text-[60px]">ORIUN</h1>
        <div className="w-40">
          <Link href="/api/auth/signin">
            <button
              type="button"
              className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            >
              Log In
            </button>
          </Link>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="flex items-center justify-between mx-auto max-w-[1580px] p-5 shadow-md rounded-xl">
        <Link href="/Convocatorias">
          <h1 className="text-black font-bold text-[60px]">ORIUN</h1>
        </Link>
        <ul className="hidden h-full gap-12 lg:flex">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="flex items-center justify-center text-[16px] font-[400]
            hover:font-bold cursor-pointer pb-1.5 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div className="w-40">
          <button
            type="button"
            className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
            onClick={signOut}
          >
            Cerrar Sesión
          </button>
        </div>
      </nav>
    );
  }
}

export default NavbarConvocatorias;
