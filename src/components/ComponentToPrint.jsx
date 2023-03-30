import React from "react";
import tceheader from "../assets/tce-header.png";
import { useSelector } from "react-redux";
import { setProgrammingLanguages } from "../app/DataSlice";
import List from "./List";
import './ComponentToPrint.css'

export const ComponentToPrint = React.forwardRef((props, ref) => {
  const userData = useSelector((state) => state.userData)
  let today = new Date();
  return (

    <div className="md: flex justify-center mx-auto items-center zoom">
      <div className="h-[297mm] overflow-y-scroll shadow-2xl border-zinc-400 bg-white border-4 m-0 p-0">
        <div ref={ref} className="w-[210mm] h-full" >
          <div className="w-[210mm] m-0"><img src={tceheader} alt="tceheader"></img></div>
          <div className="pt-2 absolute right-[2.5cm] ">
            {userData.profilePhoto !== "" && <img src={userData.profilePhoto} className="h-[3.0cm] w-[2.5cm]" alt="profilephoto"></img>}
          </div>
          <div className="text-[12pt] mt-6 w-[210mm] px-[2cm] " >
            <div><span className="font-bold">NAME :</span> {userData.name}</div>
            <div><span className="font-bold">REG NO :</span> {userData.regno}</div>
            <div><span className="font-bold">DEGREE :</span> {userData.educationList[userData.educationList.length - 1].degree}</div>

            <div className="mt-6 ">
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
                      <td className=" border-x-2 py-2 px-4 border-[#322432] text-center">{userData.educationList[userData.educationList.length - 1]?.degree}</td>
                      <td className=" border-x-2 py-2 px-4 border-[#322432] text-center">{userData.educationList[userData.educationList.length - 1]?.school}</td>
                      <td className=" border-x-2 py-2 text-center px-4 border-[#322432]">
                        {userData.educationList[userData.educationList.length - 1]?.board}
                      </td>
                      <td className=" border-x-2 py-2 px-4 border-[#322432] text-center">
                        {userData.educationList[userData.educationList.length - 1]?.endYear}</td>
                      <td className=" border-x-2 py-2 px-4 border-[#322432] text-center">
                        {userData.educationList[userData.educationList.length - 1]?.marks}</td>
                    </tr>
                    <tr>
                      <td className=" border-x-2 py-2 px-4 text-center border-[#322432]">
                        {userData.educationList[1]?.dregree !== '' ? userData.educationList[1]?.degree : 'XII'}
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
              <h1 className="font-bold mt-6">TECHNICAL EXPERTISE:</h1>
              <h2 className="mt-3">Programming Languages :   {userData.programmingLanguages.join(" , ")} <span>{ }</span></h2>
              <div>
                <ul className="list-none">
                  {userData.toolsAndTechnologies.map((element, index) => {
                    return (<li className="mt-2" key={index}>{element}</li>)
                  }
                  )}
                </ul>
              </div>
            </div>

            <div>
              <h1 className="font-bold mt-6">AREAS OF INTEREST:</h1>
              <List arr={userData.areasOfInterest} />
            </div>

            <div>
              <h1 className="font-bold mt-6">ACADEMIC PROJECTS:</h1>
              {userData.projectList.map((element, index) => {
                return (
                  <div className="mt-2" key={index}>
                    <div className="flex justify-between bg-[#d3d3d3]">
                      <h1 className="font-bold italic">{element.name === "" ? "Project Title:" : element.name}</h1>
                      <a className="underline text-[blue]" href={/^http[s]*:\/\/[\w]+/i.test(element.link) ? element.link : `http://${element.link}`}>Project Link</a>
                    </div>

                    <p className="mt-2 indent-[0.5in]">{element.description}</p>
                  </div>)
              })}
            </div>

            <div>
              <h1 className="font-bold mt-6">ACHIEVEMENTS:</h1>
              <List arr={userData.achievements} />
            </div>

            <div>
              <h1 className="font-bold mt-6">CO-CURRICULAR ACTIVITIES:</h1>
              <List arr={userData.coCurricularActivities} />
            </div>

            <div>
              <h1 className="font-bold mt-6">EXTRA CURRICULAR ACTIVITIES:</h1>
              <List arr={userData.extraCurricularActivities} />
            </div>

            <div>
              <h1 className="font-bold mt-6">HOBBIES:</h1>
              <List arr={userData.hobbies} />
            </div>

            <div>
              <h1 className="font-bold mt-6">PERSONAL DETAILS:</h1>
              <div className="flex justify-between">
                <div className="w-[105mm] mr-8">
                  <h2 className="font-bold">Contact Address:</h2>
                  <p>C/o. The Placement Officer</p>
                  <p> Thiagarajar College of Engineering</p>
                  <p>Thirupparankundram, Madurai-625 015.</p>
                  <p>Ph.no: 0452-2482243</p>
                  <p>Email: placement@tce.edu</p>

                </div>
                <div className="">
                  <h2 className="font-bold">Permanent Address:</h2>
                  <p>{userData.address}</p>
                  <p>Ph.no: {userData.phone}</p>
                  <p>Email: {userData.email}</p>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-6 ">
                <div className="flex">
                  <h2 className="font-bold">DATE OF BIRTH:</h2>
                  <p>{userData.date}</p>
                </div>
                <div className="flex">
                  <h2 className="font-bold">AGE:</h2>
                  <p>{userData.age}</p>
                </div>
                <div className="flex">
                  <h2 className="font-bold">GENDER:</h2>
                  <p>{userData.gender}</p>
                </div>
              </div>

              <div className="flex">
                <h2 className="font-bold">FATHER'S NAME: </h2>
                <p>{userData.fatherName}</p>
              </div>

              <div className="flex">
                <h2 className="font-bold">MOTHER TONGUE: </h2>
                <p>{userData.motherTongue}</p>
              </div>

              <div className="flex">
                <h2 className="font-bold">LANGUAGES KNOWN: </h2>
                <p>{userData.languages.join(", ")}</p>
              </div>
            </div>

            <div className="relative mt-6">
              <p>I, <span className="font-bold">{userData.name}</span>, do hereby confirm that the information given above is true to the best of my knowledge.</p>
              <p>Place: Madurai</p>
              <p>Date: {today.toLocaleDateString()}</p>
              <div className="absolute right-12 top-8 flex flex-col justify-center items-center">
                <div>
                  {userData.signature !== "" && <img src={userData.signature} className="h-[1.25cm] w-[4.8cm]" alt="signature"></img>}
                </div>
                <div>Signature</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
});
