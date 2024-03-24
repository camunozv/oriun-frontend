import "./globals.css"; // this affects all classes and all components
import { Lato, Lobster, Inter } from "next/font/google";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

// It is possible to create different css file outside of the folders
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "oriun",
  description: "manejo de convocatorias unal",
};

// Regular html tags cannot be inside the body tag.

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
