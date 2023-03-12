import Navbar from './Navbar';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState('');
  const Navigate = useNavigate();
  const [islogin, setisLogin] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', { email, password });
      localStorage.setItem('token', res.data.token);
      Navigate('/');
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div>
      <Navbar />

      <div className={`Login  background-pic grid grid-cols-2 bg-cover bg-opacity-50  bg-gradient-to-br  h-full w-full bg-slate-200 justify-center items-center`}>
        <div className='col-start-1 w-full flex justify-end items-center'>
          <img src={require("../assets/login-img.jpg")} width="481px" alt="login-img" />

        </div>

        <div className="bg-cover bg-center h-screen flex  items-center justify-start">

          <form className="bg-white p-6 h-[30.1rem] border-l-slate-300 border-l-4 " onSubmit={handleSubmit}>
            <h2 className="text-lg font-bold mb-4">Welcome Back!</h2>
            <p className="text-gray-700 text-center mb-4">Hello there! Ready to build your perfect resume?</p>
            <div className="mb-4">


              <label className="block text-gray-700 font-bold mb-2 ">
                Username

              </label>
              <input
                className="border border-gray-400 p-2 rounded-lg w-full"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="yourusername" />



              {(!islogin) && (<label className={"block text-gray-700 mt-2 font-bold mb-2 "}>
                Email

              </label>)}
              {(!islogin) && (<input
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

            <button className={((islogin) ? 'mt-8' : 'mt-0') + ` bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 `}>
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
