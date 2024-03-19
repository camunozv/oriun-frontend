import Link from "next/link";
import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";

// By default tailwind comes with 5 breakpoints defined for responsive design.
// sm, md, lg, xl, 2xl --> these are mobile first
// we can prefix any of our tailwind classes with one of the breakpoints
// by default classes work for every screen width

// <div className="grid h-[100vh] grid-rows-12">
//   <div className="grid grid-cols-3 grid-rows-2">
//     <header className="text-center w-full bg-figma_blue col-span-3 row-start-1">
//       hola
//     </header>
//   </div>

//   <div className="grid grid-cols-3">
//     <main className="col-span-3 h-full w-full text-center bg-black">
//       <h1 className="text-white">niggers</h1>
//     </main>
//   </div>

//   <div className="grid grid-cols-3 grid-rows-2">
//     <footer className="text-center w-full bg-figma_blue col-span-3 row-start-2">
//       hola
//     </footer>
//   </div>
// </div>

// <main className="relative overflow-hidden mx-auto max-w-[1580px] border-2 border-cyan-500">
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden mx-auto max-w-[1580px] border-2 border-cyan-700">
        Hello there fucker
      </main>
      
      <Footer />
    </>
  );
}
