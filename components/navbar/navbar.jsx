import Link from "next/link";
import React from "react";
import { NAV_LINKS } from "@/constants";

function Navbar() {
  // NOTES:
  // "fixed" means no matter if we scroll the nav will pasted on top of the page.

  // "w-full" means it takes the full width of the page

  // "shadow-xl" puts the big shadow under the component

  // "bg-white" sets the background color of the element to white

  // "w-full" makes the component to occupy the whole width of its parent component

  // "h-24" makes the element to have a height of 24 pixels

  // "bg-inherit" means the child component to inherit the background color of its parent component

  // "justify-between" splits the components but keeps a nice justification between them.

  // "items-center" fixed the elements to the center of the father component, but it won't do anything
  // if the child component isn't taking the whole width and height fromt its father component, that is why
  // we need "h-full" & "w-full".

  // "h-full" & "w-full" make the component to take the whole height & width from its parent component beziehungsweise.

  // "px-4" gives a padding of 16 pixels: 4 is in rem units. so we multiply by 4 to obtain the number in pixels. For our
  // particular case it would be like "px-16" 16 pixels.

  // "2xl: px-16" means we want a padding of 64 pixels in a screen of 2xl size.

  // "flex": allows to dynamically arrange elements within a container. When we apply this utility to an element we make it a flex
  // container and its children become flex items. By default elements will be aligned horizontally bce of the "flex-direction:row"
  // property.

  // Including: @tailwind base, @tailwind components, @tailwind utilities; within our "globals.css" we are ensuring that tailwind
  // is applied consistently within our next.js project

  // Images can be wrapped within link tags to make them clickable.

  // "mx-auto" centers automatically the content of the container in horizontal axis
  // "max-w-[1440px]" sets the width to a maximum of 1440 pixels given

  // "relative" sets postiion of an element,to the position it will have in the regular document flow. If it is moved
  // it will still be in the relative position and won't be bothered by other elements.

  // "z-30" sets the height of the z index, which is perpendicular to the screen. this allows to deal with element overlapping
  // elements with higher z index are placed above the elements with lower z-index.

  // in the "ul": we use hidden for small screens, but flex on large screens or bigger, by using the utility: "lg".
  // "gap-12" : sets spacing between elements of grid, ul, or flex elements 12 is multiplied by 4 to obtain size in pixels

  // text & font utilites are different: text is used for setting up text appearance whereas font is used to set up the font
  // characteristics, such as family, or weight, whereas text can set up color, alignment, etc

  // cursor-pointer: changes the appearance of a cursor while hovering over the element whit this utility
  // tansition-all: provides a smooth transition to all css properties when their value changes

  // overflow-hidden: is a utility class which hides anything that breaks the bounds of its container
  return (
    <nav
      className="flex items-center justify-between mx-auto max-w-[1580px]
    px-6 lg:px-20 3xl:px-0 z-30 py-5 border-2 border-red-500"
    >
      <Link href="/" className="pl-6">
        <h1 className="text-black font-bold text-[60px]">ORIUN</h1>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {
          NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="flex items-center justify-center text-[16px] font-[400]
            hover:font-bold cursor-pointer pb-1.5 transition-all">
              {link.label}
            </Link>    
          ))
        }
      </ul>

      <Link href="/" className="transition-all hover:font-bold text-[20px] font-[400] pr-10">
        Fuck you
      </Link>
    </nav>
  );
}

export default Navbar;
