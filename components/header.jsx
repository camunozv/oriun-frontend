import Link from "next/link";
import React from "react";
import logoImage from "@/assets/logo_1_unal.png";
import classes from "./headerClasses.module.css";
import Image from "next/image";
// "logoImage" is a special object

function Header({ children }) {
  return (
    <header className={classes.Header}>
      {children}
      <Link href="/" className={classes.logo}>
        {
          /**
           * Es ist besser, wenn wir "<Image>" benutzen.
           */
        }
        <Image src={logoImage} alt="unal logo" priority/> {
          /**
           * The "logoImage" object already contains useful information parsed underthehood to image tag
           * by next js
           * 
           * "Priority: Avoids lazy loading & page lickering if the image is important to be loaded"
           */
        }
        Bienvenidos a ORIUN
      </Link>

      <nav className={classes.nav}>
        {" "}
        {/**What does nav stands for? */}
        <ul>
          {" "}
          {/**Unordered list */}
          <li>
            {" "}
            {/**List item*/}
            <Link href="./">Ingresar</Link>
          </li>
          <li>
            <Link href="./">Ver convocatorias</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
