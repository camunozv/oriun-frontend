import "./globals.css"; // this affects all classes and all components
import AuthProvider from "./Context/AuthProvider";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "oriun",
  description: "manejo de convocatorias unal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <AuthProvider>
        <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
