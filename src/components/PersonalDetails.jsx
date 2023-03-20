import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { setName, setSignature, setAddress, setRegno, setAge, setDate, setEmail, setFatherName, setGender, setLanguages, setMotherTongue, setPhone, nextStep, setProfilePhoto } from "../app/DataSlice"
import FileBase64 from 'react-file-base64';

import DeleteIcon from '../assets/delete.png'
import AddIcon from '../assets/add.png'

function PersonalDetails() {

  const handleProfilePhotoUpload = (file) => {
    dispatch(setProfilePhoto(file.base64));
    console.log("File ", file)
  };

  const handleSignatureUpload = (file) => {
    dispatch(setSignature(file.base64));
    console.log("File ", file)
  };

  function handleGenderChange(event) {
    dispatch(setGender(event.target.value))
  }

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  const userData = useSelector((state) => state.userData)
  console.log("From Personal User Data", userData)

  // const [languages, setLanguages] = useState(["English"]);
  const { languages, profilePhoto } = useSelector((state) => state.userData)

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    if (name === 'language') {
      const list = [...languages];
      list[index] = value
      dispatch(setLanguages(list));
    }
  };

  const handleAddItem = (event) => {
    if (event.target.name === 'language') {
      dispatch(setLanguages([...languages, ""]));
    }
  };

  const handleRemoveItem = (name, index) => {
    if (name === 'language') {
      const list = [...languages];
      list.splice(index, 1);
      dispatch(setLanguages(list));
    }
  };


  return (
    <div className="md:p-10 md:pt-20 max-w-4xl">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 w-[100vw]"
      >
        <h1 className="mb-6 change-font text-blue-700 font-extraboldbold text-3xl">
          Personal Details
        </h1>
        <div className="grid md:grid-cols-2 md:space-x-10">

          <div className="mb-6">
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
            <label className="block text-lg  text-gray-700 font-bold mb-2" htmlFor="regno">
              Regno
            </label>
            <input
              className="bg-zinc-50 shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="regno"
              type="text"
              value={userData.regno}
              onChange={(e) => dispatch(setRegno(e.target.value))}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-lg text-gray-700 font-bold mb-2"
              htmlFor="address"
            >
              Address
            </label>
            <textarea rows={5}
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
                  <input className="ml-2 " type="radio" value="male" checked={userData.gender === 'male'} onChange={handleGenderChange} />
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
            {languages.map((education, index) => (
              <div key={index} className=" mb-2">
                <label className="flex">

                  <input className="mr-2 bg-zinc-50 shadow-xl appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder={`Language ${index + 1}`}
                    type="text" name="language" value={languages[index]} onChange={(e) => handleInputChange(e, index)} />
                  {index !== 0 && <button type="button" >
                    <img alt="delete" name="language" onClick={() => handleRemoveItem('language', index)} className="w-5" src={DeleteIcon} />
                  </button>}
                </label>

                <div className="flex justify-center align-center text-lg">
                  {index === languages.length - 1 && (
                    <button type="button" name='language' onClick={(e) => { handleAddItem(e) }}>
                      <img alt="add" name="language" className="w-5 mt-3" src={AddIcon} />
                    </button>

                  )}
                </div>
              </div>
            ))}
          </div>

        </div>


        <div className="flex flex-col items-center justify-center mt-6">
          <pre className="change-font text-gray-700  font-extrabold text-lg">Add Your Profile Photo Here</pre>
          <div className="mt-4 ml-28 flex justify-center items-center ">
            <FileBase64
              accept="image/*"
              multiple={false}
              onDone={handleProfilePhotoUpload}
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-6">
          <pre className="change-font text-gray-700  font-extrabold text-lg">Add Your Signature Here</pre>
          <div className="mt-4 ml-28 flex justify-center items-center ">
            <FileBase64
              accept="image/*"
              multiple={false}
              onDone={handleSignatureUpload}
            />
          </div>

        </div>

        <div className="mt-10 flex items-center justify-end  ">

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


export default PersonalDetails;