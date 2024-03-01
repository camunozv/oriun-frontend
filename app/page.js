import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Main page</h1>
      <Header>Rick Sanchez</Header>
      <h2>Aqui irá la página principal de nuestro sitio web.</h2>
      <h2>Información sobre la DRE y la ORI etc, imagenes bonitas bla bla bla</h2>
      <h2>Aquí irá un link de acceso al módulo de login.</h2>
      <Link href="./ingreso">Ingresar</Link>
    </main>
  );
}
