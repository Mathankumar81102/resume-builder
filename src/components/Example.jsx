import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

import { ComponentToPrint } from "./ComponentToPrint";

export const Example = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <div className="flex justify-center items-center mt-10">
      <button  className="bg-blue-300 p-4 text-xl font-bold" onClick={handlePrint}>Print this out!</button>
      </div>
      
    </div>
  );
};
