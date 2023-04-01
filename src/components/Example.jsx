import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../app/DataSlice";
import previewIcon from '../assets/preview.png'

import { ComponentToPrint } from "./ComponentToPrint";

export const Example = ({ show, setShow }) => {
  const dispatch = useDispatch();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "@page { size: A4 }",
  });

  const step = useSelector((state) => state.userData.step)

  const handleClose = () => {
    setShow(false)
  }

  const handleShow = () => setShow(true);

  return (
    <div className="lg:col-span-3">
      <div onClick={handleShow} id="previewIcon" className="fixed right-2 bottom-2 p-3 rounded-full bg-[#adf6de]">
        <img style={{ width: "32px" }} alt='preview' src={previewIcon}></img>
      </div>

      <div className={step === 5 || show ? "m-auto w-full" : "hidden md:block"}>
        <ComponentToPrint ref={componentRef} />

        <div className="flex items-center justify-center pb-7 pt-5 ">
          {step === 5 && <button
            className=" bg-zinc-500 m-10 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => dispatch(prevStep())}
          >
            Edit
          </button>}
          <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-xl p-4 text-xl font-bold" onClick={handlePrint}>Print This Out !</button>

        </div>

      </div>
    </div>
  );
};
