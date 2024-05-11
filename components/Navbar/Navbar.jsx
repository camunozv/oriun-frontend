import Link from "next/link";
import React from "react";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

function Navbar() {
  // NOTES:
  // "fixed" means no matter if we scroll the nav will pasted on top of the page.

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

  // in the "ul": we use hidden for small screens, but flex on large screens or bigger, by using the utility: "lg: flex".
  // "gap-12" : sets spacing between elements of grid, ul, or flex elements 12 is multiplied by 4 to obtain size in pixels

  // text & font utilites are different: text is used for setting up text appearance whereas font is used to set up the font
  // characteristics, such as family, or weight, whereas text can set up color, alignment, etc

  // cursor-pointer: changes the appearance of a cursor while hovering over the element whit this utility
  // tansition-all: provides a smooth transition to all css properties when their value changes

  // overflow-hidden: is a utility class which hides anything that breaks the bounds of its container
  // hover:"custom utility" we put what we want to change on hovering.

  // inline: displays element to occupy only the necessary width they need to be rendered. Meaning other elements could be
  // rendered to their sides. By putting "inline-block"

  // block: this utility means elements start on a new line and can be stretched as much they can. These kind of elements
  // doesn't leave other elements to be on the same line with them.

  // inline-block: this allows other elements to be on the same line with them but, can be stretched as much as they can
  // just like block elements.

  return (
    <nav
      className="flex items-center justify-between mx-auto max-w-[1580px]
    px-6 lg:px-20 3xl:px-0 z-30 py-5"
    >
      <h1 className="text-black font-bold text-[60px]">ORIUN</h1>

      <div className="flex items-center gap-3 w-80">
        <button
          type="button"
          className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white hover:text-figma_blue hover:bg-white py-2"
          onClick={signIn}
        >
          Ingresar
        </button>
        <Link href="/CodigoRegistro" className="w-full">
          <button
            type="button"
            className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue hover:text-white hover:bg-figma_blue py-2"
          >
            Registrate
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
