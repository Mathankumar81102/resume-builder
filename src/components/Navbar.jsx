import React from 'react';
import { Link } from 'react-router-dom';
// import { RiAccountCircleFill } from 'react-icons/ri'
const Navbar = () => {
    const address = window.location.href
    return (
        <nav className="bg-slate-100 p-2 flex h-[10vh] top-0 left-0 right-0 z-10 justify-evenly items-center">
            <Link to="/home" className="text-black font-bold"><h1 className='md:text-3xl'><span className='md:text-5xl'>R</span>esume<span className='text-red-500'><span className='md:text-5xl'>C</span>raft</span></h1></Link>
            <div className="flex md:space-x-8 md:text-2xl">
                {address !== "http://localhost:3000/" && <Link to="/Home/templates" className="change-font text-slate-900 p-2 change-font bg-emerald-300 font-bold mr-4">Create Resume</Link>}
                {address === "http://localhost:3000/" ? <Link to="/" className="text-black p-3 font-bold">Login </Link> : <Link to="/" className="text-black p-3 font-bold">Logout
                </Link>}
            </div>
        </nav>
    );
}

export default Navbar;
