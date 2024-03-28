"use client";
import React from "react";
import { CiWarning } from "react-icons/ci";

function Modal({ isVisible, onClose }) {
  // fixed: positions the element relative to the viewport independent from the scroll position
  // inset-0: this utility manipulates the positioning of the element relative to its container, it is just a shorcut
  // to manipulate at the same time the properties: left, right, bottom, & top.
  // bg-opacity-value: manipulates the transparency gradient for the background of an element in a scale from 0-100
  // where 0 is full trasnparent & 100 is full opace.
  // backdrop-blur-value: is used to apply a blur effect to the elements behind an element with this property.

  // This functions allows correct closing of the Modal when blurred background is clicked.
  const handleOnClose = (e) => {
    if (e.target.id === "wrapper")
    {
      onClose();
    }
  }

  if (isVisible == true) {
    return (
      <div
        id = "wrapper"
        className="flex fixed justify-center items-center bg-black inset-0 backdrop-blur-sm bg-opacity-25"
        onClick={handleOnClose}
      >
        <div className="flex flex-col justify-center items-center bg-white border-2 border-rose-500 rounded-md w-96 p-6">
          <div className="flex justify-between items-center w-[70%]">
            <h1 className="font-bold text-[30px]">Advertencia</h1>
            <CiWarning className="h-[40px] w-[40px]" />
          </div>
          <p className="font-bold text-center">
            ¿Esta seguro que desea eliminar la convocatoria?
          </p>

          <div className="flex justify-between items-center w-96 mt-3">
            <div className="w-full p-2">
              <button
                type="button"
                className="w-full font-semibold bg-white border-2 rounded-full border-figma_blue text-figma_blue py-2"
              >
                Si
              </button>
            </div>
            <div className="w-full p-2">
              <button
                type="button"
                className="w-full font-semibold bg-figma_blue border-2 rounded-full border-figma_blue text-white py-2"
                onClick={() => {
                  onClose();
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
