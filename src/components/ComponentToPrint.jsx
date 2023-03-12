import React from "react";
import tceheader from "../assets/tce-header.png";
import { useSelector } from "react-redux";
import { setProgrammingLanguages } from "../app/DataSlice";
export const ComponentToPrint = React.forwardRef((props, ref) => {
  const userData = useSelector((state) => state.userData)
  return (
    <div className="flex justify-center mt-20 mx-auto  items-center">
      <div className="h-[297mm] overflow-y-scroll shadow-2xl border-zinc-400 border-4   w-[210mm] m-0 p-0">
        <div ref={ref} className="bg-white h-full" >
          <div className="w-full m-0"><img src={tceheader} alt="tceheader"></img></div>
          <div className="pt-2 absolute right-[2.5cm] ">
            {userData.profilePhoto !== "" && <img src={userData.profilePhoto}  className="h-[3.0cm] w-[2.5cm]" alt="profilephoto"></img>}
          </div>
          <div className="text-[12pt] mt-6 mx-[2cm]" >
            <div><span className="font-bold">NAME :</span> {userData.name}</div>
            <div><span className="font-bold">REG NO :</span> {userData.regno}</div>
            <div><span className="font-bold">DEGREE :</span> {userData.educationList[userData.educationList.length-1].degree}</div>

            <div className="mt-8 ">
              <div className="font-bold">PROFESSIONAL OBJECTIVE:  <div className="font-medium mt-2">{userData.professionalObjective}
              </div>
              </div>
              
            </div>

            <div className="mt-6">
              <span className="font-bold">ACADEMIC RECORD:</span>
              <div className="mt-4">
              <table className="border-collapse border border-black table-fixed ">
                <thead className="bg-gray-300">
                <tr>
                  <th className="border-2 px-2 py-2 border-[#322432]">CLASS&#10;/COURSES</th>
                  <th className="border-2 px-2 py-2 border-[#322432]">NAME OF THE INSTITUTION </th>
                  <th className="border-2 px-2 py-2 border-[#322432]">BOARD OF STUDY</th>
                  <th className="border-2 px-2 py-2 border-[#322432]">YEAR OF PASSING </th>
                  <th className="border-2 px-2 py-2 border-[#322432]">MARKS&#10;/CGPA %</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td className=" border-x-2 py-2 px-4 border-[#322432] text-center">{userData.educationList[userData.educationList.length-1]?.degree}</td>
                  <td className=" border-x-2 py-2 px-4 border-[#322432] text-center">{userData.educationList[userData.educationList.length-1]?.school}</td>
                  <td className=" border-x-2 py-2 text-center px-4 border-[#322432]">
                  {userData.educationList[userData.educationList.length-1]?.board}
                  </td>
                  <td className=" border-x-2 py-2 px-4 border-[#322432] text-center">
                  {userData.educationList[userData.educationList.length-1]?.endYear}</td>
                  <td className=" border-x-2 py-2 px-4 border-[#322432] text-center">
                  {userData.educationList[userData.educationList.length-1]?.marks}</td>
                </tr>
                <tr>
                  <td className=" border-x-2 py-2 px-4 text-center border-[#322432]">
                  {userData.educationList[1]?.dregree!==''?userData.educationList[1]?.degree:'XII'}
                  </td>
                  <td className=" border-x-2 py-2 px-4 border-[#322432] text-center">{userData.educationList[1]?.school}</td>
                  <td className=" border-x-2 py-2 text-center px-4 border-[#322432]">
                  {userData.educationList[1]?.board}
                  </td>
                  <td className=" border-x-2 py-2 px-4 border-[#322432] text-center">
                  {userData.educationList[1]?.endYear}</td>
                  <td className=" border-x-2 py-2 px-4 border-[#322432] text-center">
                  {userData.educationList[1]?.marks}</td>
                </tr>
                <tr>
                  <td className=" border-x-2 py-2 px-4 text-center border-[#322432]">
                  X
                  </td>
                  <td className=" border-x-2 py-2 px-4 border-[#322432] text-center">{userData.educationList[0]?.school}</td>
                  <td className=" border-x-2 py-2 text-center px-4 border-[#322432]">
                  {userData.educationList[0]?.board}
                  </td>
                  <td className=" border-x-2 py-2 px-4 border-[#322432] text-center">
                  {userData.educationList[0]?.endYear}</td>
                  <td className=" border-x-2 py-2 px-4 border-[#322432] text-center">
                  {userData.educationList[0]?.marks}</td>
                </tr>
                </tbody>
              </table>



              </div>
            </div>
            <div>
            <h1 className="font-bold mt-8">TECHNICAL EXPERTISE</h1>
            <h2 className="mt-3">Programming Languages :   {userData.programmingLanguages.join(" , ")} <span>{}</span></h2>
            <div>
            <ul className="list-none">
            {userData.toolsAndTechnologies.map((element,index)=>{
            return (<li className="mt-2" key={index}>{element}</li>)
            }
            )}
            </ul>
            </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
});
