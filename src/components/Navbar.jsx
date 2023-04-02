import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { setName, setAddress, setAge, setRegno, setDate, setEmail, setSignature, setProgrammingLanguages, setAreasOfInterest, setToolsAndTechnologies, setProjectList, setFatherName, setGender, setLanguages, setMotherTongue, setPhone, setHobbies, setProfilePhoto, setEducationList, setCoCurricularActivities, setExtraCurricularActivities, setAchievements, setProfessionalObjective,setusername } from "../app/DataSlice"
import "../index.css"
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import addtoStore from '../addtoStore';

const Navbar = () => {
    const Navigate=useNavigate()
    const dispatch=useDispatch()
    const userData = useSelector((state) => state.userData)
    const username=localStorage.getItem("user");
    console.log(username)
    const handleGetResume=async (e)=>{
        axios.post("http://localhost:3001/getData",{username:username}).then((response)=>
        {
        console.log(response.data)
        if(response.data==="No username"){
        alert("You Don't have any saved Resume")
        }
        else {
            const data=response.data
            console.log("response data",data)
            dispatch(setName(data.name))
            dispatch(setAddress(data.address))
            dispatch(setAge(data.age))
            dispatch(setRegno(data.regno))
            dispatch(setDate(data.date))
            dispatch(setEmail(data.email))
            dispatch(setSignature(data.signature))
            dispatch(setAreasOfInterest(data.areasOfInterest))
            dispatch(setProgrammingLanguages(data.programmingLanguages))
            dispatch(setToolsAndTechnologies(data.toolsAndTechnologies))
            dispatch(setProjectList(data.projectList))
            dispatch(setFatherName(data.fatherName))
            dispatch(setGender(data.gender))
            dispatch(setLanguages(data.languages))
            dispatch(setMotherTongue(data.motherTongue))
            dispatch(setPhone(data.phone))
            dispatch(setHobbies(data.hobbies))
            dispatch(setProfilePhoto(data.profilePhoto))
            dispatch(setEducationList(data.educationList))
            dispatch(setCoCurricularActivities(data.coCurricularActivities))
            dispatch(setExtraCurricularActivities(data.extraCurricularActivities))
            dispatch(setProfessionalObjective(data.professionalObjective))
            dispatch(setusername(data.username))
            dispatch(setAchievements(data.achievements))
        }
        })
        .catch((err)=>{console.log(err,"Error has occured")})
        
        Navigate("/Home/UserForm")
        
    }
    const handleLogout=()=>{
        
        if(window.confirm("Do you want to logout ?")){
            localStorage.removeItem('user');
            Navigate("/")
        }
    }
    return (
        <nav className="bg-slate-100 p-2 flex h-[10vh] top-0 left-0 right-0 z-10 justify-evenly items-center">
            <Link to="/home" className="text-black font-bold"><h1 className='md:text-3xl'><span className='md:text-5xl'>R</span>esume<span className='text-red-500'><span className='md:text-5xl'>C</span>raft</span></h1></Link>
            <div className="flex md:space-x-8 md:text-2xl">
                <button onClick={handleGetResume} className="rounded-xl text-slate-900 p-3 change-font bg-emerald-300  chang-font-2 font-bold mr-4">My Resume !</button>
                 <button onClick={handleLogout} className="text-black p-3 font-bold">Logout </button>
            </div>
        </nav>
    );
}

export default Navbar;
