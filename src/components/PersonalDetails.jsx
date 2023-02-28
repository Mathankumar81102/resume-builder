import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux"
import { setName,setAddress,setAge,setDate,setEmail,setFatherName,setGender,setLanguages,setMotherTongue,setPhone,nextStep } from "../app/DataSlice"
import FileBase64 from 'react-file-base64';

function PersonalDetails() {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [address, setAddress] = useState("");
    // const [date, setDate] = useState(null);
    // const [gender, setGender] = useState("");
    // const [age,setAge]=useState(20)
    // const [fatherName,setFatherName]=useState("")
    // const [motherTongue,setMotherTongue]=useState("")
    // const [languages,setLanguages]=useState("")
    // const [step,setStep]=useState(1)
    const [selectedFile, setSelectedFile] = useState('');

    const handleFileUpload = (file) => {
      setSelectedFile(file.base64);
      // console.log("File ",file)
    };
    function handleGenderChange(event){
      dispatch(setGender(event.target.value))
      }
  
    const dispatch=useDispatch();
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
    };

    const userData=useSelector((state)=>state.userData)
    console.log("From Personal User Data",userData)


  return (
<div className="p-10 pt-20 max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className="mb-6 change-font pl-10 text-blue-700 font-extraboldbold text-3xl">
          Personal Details
        </h1>
<div className="grid grid-cols-2 space-x-10">

<div className="mb-6 ml-10">
          <label className="block text-lg text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="bg-zinc-50 shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={userData.name}
            onChange={(e) => dispatch(setName(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="bg-zinc-50 shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={userData.email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg  text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="bg-zinc-50 shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            value={userData.phone}
            onChange={(e) => dispatch(setPhone(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-lg text-gray-700 font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <textarea rows={4}
            className="bg-zinc-50 shadow-xl border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            value={userData.address}
            onChange={(e) => dispatch(setAddress(e.target.value))}
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-lg text-gray-700 font-bold mb-2" htmlFor="phone">
            Date of Birth
          </label>
          <input
            className="bg-zinc-50 shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dob"
            type="date"
            value={userData.date}
            onChange={(e) => dispatch(setDate(e.target.value))}
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg text-gray-700 font-bold mb-2" htmlFor="phone">
            Age
          </label>
          <input
            className="bg-zinc-50 shadow-xl  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="number"
            value={userData.age}
            onChange={(e) => dispatch(setAge(e.target.value))}
          />
        </div>
        <div className="mt-2">
      <h1 className="text-lg  text-gray-700 font-bold">Gender</h1>
        <div className="flex mb-8 p-2 pl-1 rounded shadow-xl bg-zinc-50 justify-between ">
            <div>
                <label className="text-lg text-gray-700">
                    Male
                <input className="ml-2 " type="radio" value="male" checked={userData.gender === 'male' } onChange={handleGenderChange} />
                </label>
            </div>
            <div>
                <label className="text-lg text-gray-700 ">
                    Female
                <input className="ml-2" type="radio" value="female" checked={userData.gender === 'female'} onChange={handleGenderChange} />
              </label>
            </div>
            <div>
                <label className="text-lg text-gray-700">
                    Other
                <input className="ml-2" type="radio" value="other" checked={userData.gender === 'other'} onChange={handleGenderChange} />
                </label>
            </div>
      </div>

        </div>
    
     <div className="mb-6 ">
          <label className="block text-lg  text-gray-700 font-bold mb-3" htmlFor="name">
          Father's  Name
          </label>
          <input
            className="bg-zinc-50 shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fathername"
            type="text"
            value={userData.fatherName}
            onChange={(e) => dispatch(setFatherName(e.target.value))}
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg text-gray-700 font-bold mb-2" htmlFor="name">
            Mother Tongue
          </label>
          <input
            className="bg-zinc-50 shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="motherTongue"
            type="text"
            value={userData.motherTongue}
            onChange={(e) => dispatch(setMotherTongue(e.target.value))}
          />
        </div>


      <div className="mb-6">
          <label
            className="block text-lg text-gray-700 font-bold mb-2"
            htmlFor="address"
          >
              Languages Known
            </label>
          <textarea rows={5}
            className="bg-zinc-50 shadow-xl border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="languages"
            placeholder="Enter the known languages, each line as a separate item&#10;For example:&#10;English&#10;Spanish&#10;"
            value={userData.languages}
            onChange={(e) => dispatch(setLanguages(e.target.value))}
          ></textarea>
        </div>

</div>
        <hr className="border-t-4 solid mt-4"></hr>
    <div className="flex items-center justify-evenly">
          <div className="mt-6 mb-6">
          <label
            className="block text-lg text-gray-700 font-bold mb-2"
            htmlFor="address"
          >
              Hobbies
            </label>
          <textarea rows={5} cols={25}
            className="bg-zinc-50 shadow-xl border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="hobbies"
            placeholder="Enter your hobbies, each line as a separate item"
            value={userData.languages}
            onChange={(e) => dispatch(setLanguages(e.target.value))}
          ></textarea>
        </div>
        <div className="mt-6 mb-6">
          <label
            className="block text-lg text-gray-700 font-bold mb-2"
            htmlFor="address"
          >
              CO-CURRICULAR ACTIVITIES

            </label>
          <textarea rows={5} cols={35}
            className="bg-zinc-50 shadow-xl border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="languages"
            placeholder="Enter all your co-curricular activities, each line as a separate item"
            value={userData.languages}
            onChange={(e) => dispatch(setLanguages(e.target.value))}
          ></textarea>
        </div>
      
    </div>
    <div className="flex flex-col items-center justify-center mt-6">
    <pre className="change-font text-gray-700  font-extrabold text-lg">Add Your Profile Photo Here                           </pre>
      <div className="mt-4 flex ">
    <FileBase64
        multiple={false}
        onDone={handleFileUpload}
      /> 
      </div> 
    </div>
        <div className="mt-10 flex items-center justify-end  ">
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={()=>dispatch(nextStep())}
          >
            Continue
          </button>
        </div>
      </form>
    </div>  )
}

export default PersonalDetails