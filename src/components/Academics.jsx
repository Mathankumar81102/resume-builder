import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  nextStep,
  prevStep,
  setEducationList
} from "../app/DataSlice";

import AddIcon from '../assets/add.png'
import DeleteIcon from '../assets/delete.png'
function Academics() {
  // const name=useSelector((state)=>state.userData.name)
  // const gender=useSelector((state)=>state.userData.gender)

  // const [educationList, setEducationList] = useState([
  //   { school: "", degree: "", field: "", startYear: "", endYear: "",marks:"" },
  // ]);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const { educationList } = useSelector((state) => state.userData);

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...educationList];
    list[index] = { ...list[index], [name]: value };
    dispatch(setEducationList(list));
    console.log(educationList)
  };

  const handleAddItem = () => {
    dispatch(setEducationList([
      ...educationList,
      { school: "", degree: "", field: "", startYear: "", endYear: "", marks: "" },
    ]));
  };

  const handleRemoveItem = (index) => {
    const list = [...educationList];
    list.splice(index, 1);
    dispatch(setEducationList(list));
  };

  return (
    <div className="max-w-4xl lg:col-span-2  col-span-1 w-[100vw] md:w-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="change-font pl-10 text-blue-700 font-extraboldbold text-3xl">
          Academic Details
        </h1>
        <div className=" space-x-10">

          <div className="mb-6 px-10">
            {educationList.map((education, index) => (

              <div key={index}>
                {(index != 0) && (<hr className="border-t-neutral-400 solid mt-8" />)}
                <div className="text-lg text-gray-700 font-bold mb-6 mt-6 flex justify-between">
                  Education Details - {index + 1}
                  {index > 2 && <button type="button" >
                    <img alt="delete" name="education" onClick={() => handleRemoveItem('education', index)} className="w-5 " src={DeleteIcon} />
                  </button>}
                </div>
                <label className="my-6">
                  {index <= 1 ? 'School / College:' : 'College Name'}
                </label>
                <input
                  type="text"
                  name="school"
                  placeholder={(index === 0) ? `Enter your 10th School Name` : (index === 1) ? `Enter your 12th School Name (or) Diplomo College Name` : 'Enter your other College Name'}
                  className="my-2 bg-zinc-50 shadow-xl focus:outline-slate-300 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                  value={education.school}
                  onChange={(e) => handleInputChange(e, index)}

                />
                <div className="flex flex-col mt-3 w-full mb-6  justify-evenly">
                  <div>
                    <label>
                      Board of Study :
                    </label>
                    <input
                      type="text"
                      name="board"
                      className="my-2 ml-2 bg-zinc-50 shadow-xl focus:outline-slate-300 appearance-none border w-[50%] rounded  py-2 px-3 text-gray-700 leading-tight"
                      value={education.board}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </div>
                  <div className={index === 0 && `hidden`}>
                    <label>
                      {index == 1 ? 'Course :' : 'Degree :'}
                    </label>
                    <input
                      type="text"
                      name="degree"
                      className="my-2 bg-zinc-50 shadow-xl ml-2 focus:outline-slate-300 appearance-none w-[50%] border rounded py-2 px-3 text-gray-700 leading-tight"
                      placeholder={index === 1 ? 'Not for 12th Grade ' : 'eg. B.E (CSE) '}
                      value={education.degree}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </div>
                </div>


                <div className=" mt-3 flex" style={{ justifyContent: "spaceBetween" }}>
                  <div><label>
                    {index === 0 ? 'Marks in % :' : 'CGPA / Marks in % :'}
                  </label>

                    <input
                      type="text"
                      name="marks"
                      className="bg-zinc-50 shadow-xl ml-2 focus:outline-slate-300 appearance-none border rounded w-[45%] py-2 px-3 text-gray-700 leading-tight"
                      value={education.marks}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </div>
                  <div><label>
                    Start Year :
                  </label>

                    <input
                      type="text"
                      name="startYear"
                      className="bg-zinc-50 shadow-xl ml-2 focus:outline-slate-300 appearance-none border rounded w-[45%] py-2 px-3 text-gray-700 leading-tight"
                      value={education.startYear}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </div>
                  <div><label htmlFor="endYear">
                    End Year :
                  </label>

                    <input
                      type="text"
                      name="endYear"
                      className="bg-zinc-50 shadow-xl ml-2 appearance-none border rounded w-[45%] py-2 px-3 text-gray-700 leading-tight"
                      value={education.endYear}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </div>
                </div>
                {index === educationList.length - 1 && (
                  <button type="button" className="mt-14 mx-auto px-6 pb-3 bg-slate-200  flex justify-center space-x-3 items-baseline" onClick={(e) => { handleAddItem(e) }}>
                    <div ><img alt="add" name="hobbies" className="w-5 mt-5" src={AddIcon} /></div>
                    <div className="text-lg font-light"> Add Education</div>
                  </button>
                )}

              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between pb-7 pt-5 ">
          <button
            className=" bg-zinc-500 ml-10 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => dispatch(prevStep())}
          >
            Back
          </button>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => dispatch(nextStep())}
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export default Academics;
