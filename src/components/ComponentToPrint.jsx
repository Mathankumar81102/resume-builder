import React from "react";
import tceheader from "../assets/tce-header.png";
import { useSelector } from "react-redux";
export const ComponentToPrint = React.forwardRef((props, ref) => {
  const userData = useSelector((state) => state.userData)
  return (
    <div className="flex justify-center mt-20 mx-auto  items-center">
      <div className="h-[297mm] overflow-y-scroll shadow-2xl border-zinc-400 border-4 break-after-page  w-[210mm] m-0 p-0">
        <div ref={ref} className="bg-white" >
          <div className="w-full"><img src={tceheader} alt="tceheader"></img></div>
          <div className="absolute right-[2cm] ">
            {userData.profilePhoto !== "" && <img src={userData.profilePhoto}  className="h-[4.5cm] w-[3.5cm]" alt="profilephoto"></img>}
          </div>
          <div className="text-[12pt] mt-6 mx-[2cm]" >
            <div><span className="font-bold">Name :</span> {userData.name}</div>
            <div><span className="font-bold">Reg No :</span> {userData.regno}</div>
            <div><span className="font-bold">Degree :</span> {userData.educationList[1].degree}{' '}{userData.educationList[1].field}</div>

            <div className="mt-6 ">
              <span className="font-bold">PROFESSIONAL OBJECTIVE:</span>
              <div>{userData.professionalObjective}</div>
            </div>

            <div className="mt-6">
              <span className="font-bold">ACADEMIC RECORD:</span>
              <div></div>
            </div>


          </div>

        </div>
      </div>
    </div>
  );
});
