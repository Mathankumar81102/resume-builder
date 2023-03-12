import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useDispatch, useSelector } from "react-redux";
import { nextStep, prevStep } from "../app/DataSlice";

import { ComponentToPrint } from "./ComponentToPrint";

export const Example = () => {
  const dispatch = useDispatch();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: "@page { size: A4 }",
  });

  const step = useSelector((state) => state.userData.step)
  return (
    <div className={step === 5 ? "m-auto w-full" : ""}>
      <ComponentToPrint ref={componentRef} />

      <div className="mt-2 flex items-center justify-center pb-7 pt-5 ">
        {step === 5 && <button
          className=" bg-zinc-500 m-10 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => dispatch(prevStep())}
        >
          Edit
        </button>}
        <button className="bg-blue-500 hover:bg-blue-700 text-white rounded-xl p-4 text-xl font-bold" onClick={handlePrint}>Print This Out !</button>

      </div>

    </div>
  );
};
