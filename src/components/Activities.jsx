import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { nextStep, setCoCurricularActivities, setProfessionalObjective,setExtraCurricularActivities, setAchievements, setHobbies, prevStep } from "../app/DataSlice"
import FileBase64 from 'react-file-base64';

import ListInput from "./ListInput";

function Activities() {

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const userData = useSelector((state) => state.userData)

  console.log("From Personal User Data", userData)

  const { professionalObjective, achievements, coCurricularActivities, extraCurricularActivities, hobbies } = useSelector((state) => state.userData)

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    if (name === 'coCurricularActivities') {
      const list = [...coCurricularActivities];
      list[index] = value
      dispatch(setCoCurricularActivities(list));
    }
    else if (name === 'extraCurricularActivities') {
      const list = [...extraCurricularActivities];
      list[index] = value
      dispatch(setExtraCurricularActivities(list));
    }
    else if (name === 'achievements') {
      const list = [...achievements];
      list[index] = value
      dispatch(setAchievements(list));
    }
    else if (name === "hobbies") {
      const list = [...hobbies];
      list[index] = value
      dispatch(setHobbies(list));
    }
  };

  const handleAddItem = (event) => {
    console.log(event.target.name);
    if (event.target.name === 'coCurricularActivities') {
      dispatch(setCoCurricularActivities([...coCurricularActivities, ""]));
    }
    else if (event.target.name === 'hobbies') {
      dispatch(setHobbies([...hobbies, ""]));
    }
    else if (event.target.name === 'extraCurricularActivities') {
      dispatch(setExtraCurricularActivities([...extraCurricularActivities, ""]));
    }
    else if (event.target.name === 'achievements') {
      console.log("Here")
      dispatch(setAchievements([...achievements, ""]));
    }

  };

  const handleRemoveItem = (name, index) => {
    if (name === 'coCurricularActivities') {
      const list = [...coCurricularActivities];
      list.splice(index, 1);
      dispatch(setCoCurricularActivities(list));
    }
    else if (name === 'hobbies') {
      const list = [...hobbies];
      list.splice(index, 1);
      dispatch(setHobbies(list));
    }
    else if (name === 'extraCurricularActivities') {
      const list = [...extraCurricularActivities];
      list.splice(index, 1);
      dispatch(setExtraCurricularActivities(list));
    }
    else if (name === 'achievements') {
      const list = [...achievements];
      list.splice(index, 1);
      dispatch(setAchievements(list));
    }
  };


  return (
    <div className="p-10 pt-20 max-w-4xl ">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="mb-6 change-font pl-10 text-blue-700 font-extraboldbold text-3xl">
          Activities
        </h1>
        
        <div className="mb-4 mx-10">
            <label
              className="block text-lg text-gray-700 font-bold mb-2"
              htmlFor="professionalObjective"
            >
              Professional Objective
            </label>
            <textarea rows={4}
              className="bg-zinc-50 shadow-xl border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="professionalObjective"
              value={userData.professionalObjective}
              onChange={(e) => dispatch(setProfessionalObjective(e.target.value))}
            ></textarea>
          </div>

        <ListInput label="achievements" list={achievements} handleAddItem={handleAddItem} handleInputChange={handleInputChange} handleRemoveItem={handleRemoveItem} />
        <ListInput label="coCurricularActivities" list={coCurricularActivities} handleAddItem={handleAddItem} handleInputChange={handleInputChange} handleRemoveItem={handleRemoveItem} />
        <ListInput label="extraCurricularActivities" list={extraCurricularActivities} handleAddItem={handleAddItem} handleInputChange={handleInputChange} handleRemoveItem={handleRemoveItem} />

        <ListInput label="hobbies" list={hobbies} handleAddItem={handleAddItem} handleInputChange={handleInputChange} handleRemoveItem={handleRemoveItem} />


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
    </div>)
}


export default Activities;