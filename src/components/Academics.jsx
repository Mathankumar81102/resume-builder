import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setName,
  setAddress,
  setAge,
  setDate,
  setEmail,
  setFatherName,
  setGender,
  setLanguages,
  setMotherTongue,
  setPhone,
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
    const { name,value } = event.target;
    const list = [...educationList];
    console.log(name+" "+list[index][name]+" "+value)
    list[index][name] = value;
    dispatch(setEducationList(list));
  };

  const handleAddItem = () => {
    setEducationList([
      ...educationList,
      { school: "", degree: "", field: "", startYear: "", endYear: "",marks:"" },
    ]);
  };

  const handleRemoveItem = (index) => {
    const list = [...educationList];
    list.splice(index, 1);
    setEducationList(list);
  };

  return (
    <div className="p-10 pt-20 max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="mb-6 change-font pl-10 text-blue-700 font-extraboldbold text-3xl">
          Academic Details
        </h1>
        <div className=" space-x-10">
          
          <div className="mb-6">
            {educationList.map((education, index) => (
              <div key={index}>
                <div className="block text-lg text-gray-700 font-bold mb-2 mt-6 flex justify-between">
                  Education-{index + 1}
                  {index !== 0 && <button type="button" >
                    <img alt="delete" name="hobbies" onClick={() => handleRemoveItem('hobbies',index)} className="w-5 " src={DeleteIcon} />
                  </button>}
                </div>
                <label>
                  School/College: 
                  <input
                    type="text"
                    name="school"
                    className="bg-zinc-50 shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    value={education.school}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </label>
                <label>
                  Degree:
                  <input
                    type="text"
                    name="degree"
                    className="bg-zinc-50 shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    value={education.degree}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </label>
                <label>
                  Field:
                  <input
                    type="text"
                    name="field"
                    className="bg-zinc-50 shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    value={education.field}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </label>
                <label>
                  CGPA/Percentage:
                  <input
                    type="text"
                    name="field"
                    className="bg-zinc-50 shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                    value={education.marks}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </label>
                <div className="mt-2 flex" style={{justifyContent:"spaceBetween"}}>
                <label>
                  Start Year:
                  <input
                    type="text"
                    name="startYear"
                    className="bg-zinc-50 shadow-xl appearance-none border rounded w-[45%] py-2 px-3 text-gray-700 leading-tight"
                    value={education.startYear}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </label>
                <label>
                  End Year:
                  <input
                    type="text"
                    name="endYear"
                    className="bg-zinc-50 shadow-xl appearance-none border rounded w-[45%] py-2 px-3 text-gray-700 leading-tight"
                    value={education.endYear}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </label>
                </div>
                {index === educationList.length - 1 && (
                  <button type="button" name='hobbies' className="mt-2 w-full flex justify-center items-baseline" onClick={(e)=>{handleAddItem(e)}}>
                      <div><img alt="add" name="hobbies" className="w-6 mt-3" src={AddIcon} /></div>
                      <div>Add Education</div>
                    </button>
                )}
                
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between ">
          <button
            className=" bg-zinc-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
