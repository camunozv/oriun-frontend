import React from "react";

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
  

  return (
    <>
      <nav className="fixed w-full h-24 Shadow-xl bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
          <div>Left side</div>
          <div>Right side</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
