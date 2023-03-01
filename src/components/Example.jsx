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
      <button  className="bg-blue-500 hover:bg-blue-700 text-white rounded-xl p-4 text-xl font-bold" onClick={handlePrint}>Print This Out !</button>
      </div>
      
    </div>
  );
};
