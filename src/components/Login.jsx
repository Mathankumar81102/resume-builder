import Header from './Header';
import { useSelector, useDispatch } from "react-redux"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setusername } from '../app/DataSlice';
function Login() {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate = useNavigate();
  const Navigate = useNavigate();
  const [islogin, setisLogin] = useState(false);
  const dispatch = useDispatch();
  const [isSignedIn,setIsSignedIn]=useState(false)
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(islogin)
        if(islogin){
          axios.post(process.env.REACT_APP_BACKEND_URL+"/login",{username:username,password:password}).then((response)=>
          {
            if(response.data.status==="1"){
            localStorage.setItem("user" ,response.data.user);
            dispatch(setusername(username));
            alert("User Logged In");
            setIsSignedIn(true)
            navigate("/Home",{state:{username}});
            }
            else if(response.data==="Invalid username"){
            alert("Invalid Username");
            }
            else if(response.data==="Invalid password"){
              alert("Invalid Password");
              }
    }
    ).catch((err)=>{console.log(err,"Error has occured")})
    }
        
    
    else{
        axios.post(process.env.REACT_APP_BACKEND_URL+"/signup",{username:username,email:email,password:password},{ withCredentials: true })
        .then((response)=>
        {
            if(response.data==="User Already exists"){
            alert("Username already exists ...")
            }
            else if(response.data==="User created successfully"){
              alert("User Created Successfully !!")

            }
            else{
            alert("User Registered Successfully. LOGIN NOW");

        }
        
        
        }).catch((err)=>{console.log(err,"Error has occured")});
    
    }
    setUsername("");setEmail("");setPassword("");   


  };

 


  return (
    <div>
      <Header />

      <div className={`Login  background-pic grid grid-cols-2 bg-cover bg-opacity-50  bg-gradient-to-br  h-full w-full bg-slate-200 justify-center items-center`}>
        <div className='col-start-1 w-full flex justify-end items-center'>
          <img src={require("../assets/login-img.jpg")} width="481px" alt="login-img" />

        </div>

        <div className="bg-cover bg-center h-screen flex  items-center justify-start">

          <form className="bg-white p-6 h-[30.1rem] border-l-slate-300 border-l-4 " >
            <h2 className="text-lg font-bold mb-4">Welcome Back!</h2>
            <p className="text-gray-700 text-center mb-4">Hello there! Ready to build your perfect resume?</p>
            <div className="mb-4">


              {<label className="block text-gray-700 font-bold mb-2 ">
                Username
                { (<input
                className={"border border-gray-400 p-2 rounded-lg w-full "}
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="yourusername"
              />)}
              </label>}
              



              {(!islogin)&&(<label className={"block text-gray-700 mt-2 font-bold mb-2 "}>
                Email

              </label>)}
              {(!islogin)&& (<input
                className={"border border-gray-400 p-2 rounded-lg w-full "}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="*******"
              />
            </div>

            <button onClick={handleSubmit} className={((islogin) ? 'mt-6' : 'mt-0') + ` bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 `}>
              {((islogin) ? 'Log in' : 'Register')}
            </button>
            <div className="text-center text-gray-700 bg-white mt-6">

              {(islogin) ? "Don't have an account ? " : "You already have an account ?  "}
               <button onClick={(e) => {e.preventDefault(); setisLogin((val) => !val) }} className="text-blue-500 hover:text-blue-600"> {((!islogin) ? 'Log in' : 'Register')}</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;
