import Navbar from './Navbar';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { auth } from '../fire-base';
function Login() {
  const [registeremail, setregisterEmail] = useState('');
  const [loginemail, setloginEmail] = useState('');
  const [registerusername, setregisterUsername] = useState("");
  const [loginpassword, setloginPassword] = useState('');
  const [registerpassword, setregisterPassword] = useState('');
  const Navigate = useNavigate();
  const [islogin, setisLogin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  };

  const register = async ()=>{
    try{
  const user = await createUserWithEmailAndPassword(auth,registeremail,registerpassword)
  console.log(user)
  alert("User Registered")
     }catch(error){
      console.log(error.message)
    }
}
  
  const login = async  ()=>{}

  const logout = async  ()=>{}



  return (
    <div>
      <Navbar />

      <div className={`Login  background-pic grid grid-cols-2 bg-cover bg-opacity-50  bg-gradient-to-br  h-full w-full bg-slate-200 justify-center items-center`}>
        <div className='col-start-1 w-full flex justify-end items-center'>
          <img src={require("../assets/login-img.jpg")} width="481px" alt="login-img" />

        </div>

        <div className="bg-cover bg-center h-screen flex  items-center justify-start">

          <form className="bg-white p-6 h-[30.1rem] border-l-slate-300 border-l-4 " >
            <h2 className="text-lg font-bold mb-4">Welcome Back!</h2>
            <p className="text-gray-700 text-center mb-4">Hello there! Ready to build your perfect resume?</p>
            <div className="mb-4">


              {(!islogin)&&<label className="block text-gray-700 font-bold mb-2 ">
                Username
                { (<input
                className={"border border-gray-400 p-2 rounded-lg w-full "}
                type="text"
                value={registerusername}
                onChange={(e) => setregisterUsername(e.target.value)}
                placeholder="yourusername"
              />)}
              </label>}
              



              {(<label className={"block text-gray-700 mt-2 font-bold mb-2 "}>
                Email

              </label>)}
              { (<input
                className={"border border-gray-400 p-2 rounded-lg w-full "}
                type="email"
                value={(!islogin)?registeremail:loginemail}
                onChange={(e) => setregisterEmail(e.target.value)}
                placeholder="example@email.com"
              />)}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Password
              </label>
              <input
                className="border border-gray-400 p-2 rounded-lg w-full"
                type="password"
                value={(!islogin)?registerpassword:loginpassword}
                onChange={(e) => setregisterPassword(e.target.value)}
                placeholder="*******"
              />
            </div>

            <button onClick={register} className={((islogin) ? 'mt-6' : 'mt-0') + ` bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 `}>
              {((islogin) ? 'Log in' : 'Register')}
            </button>
            <div className="text-center text-gray-700 bg-white mt-6">

              {(islogin) ? "Don't have an account ? " : "You already have an account ?  "} <button onClick={() => { setisLogin((val) => !val) }} className="text-blue-500 hover:text-blue-600"> {((!islogin) ? 'Log in' : 'Register')}</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;
