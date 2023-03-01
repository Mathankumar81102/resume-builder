import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react';
import { tce} from '../assets';
import { basic} from '../assets';
import { modern } from '../assets';
import Footer from './Footer';
import { useNavigate,Link } from 'react-router-dom';
const Templates = () => {
  const Navigate = useNavigate();

  const images=[basic,tce,modern]
  const heading=["Basic Template","TCE Template","Modern Template"]
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + images.length-1)%images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex + 1)%images.length);
  };

  return (
    <div className=''>
    <div className='flex justify-center text-4xl change-font p-9'><h1>Choose Your Template</h1> </div>
    <div className='flex p-11  justify-center items-center'> 
    <div className="flex  items-center">
    <div>

      <button className="rounded-full p-4 mr-4 hover:bg-gray-300" onClick={handlePrev}>
        <svg className="w-8  h-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
    </div>

    {/**Slider Images */}
      <div className="grid grid-cols-3 gap-x-6 ">

      <Link  to="/Home/UserForm" state={{template:heading[(currentIndex)%heading.length]}} className='flex flex-col hover:border-[5px] hover:p-1 hover:rounded-lg hover:border-cyan-500 hover:scale-x-105 hover:scale-y-105'  >
        
      <img src={images[currentIndex]}  alt="" className="w-full h-[500px]" />
      <div className=" p-2 text-white w-full bg-black opacity-75">
        <h3 className="text-xl text-center   font-medium">{heading[(currentIndex)%heading.length]}</h3>
      </div>
      </Link>
      <Link  to="/Home/UserForm" state={{template:heading[(currentIndex+1)%heading.length]}} className='hover:scale-x-105 hover:border-[5px] hover:p-1 hover:rounded-lg hover:border-cyan-500 hover:scale-y-105 flex flex-col'  >
        
      <img src={images[(currentIndex+1)%images.length]}  alt="" className="w-full h-[500px]" />
      <div className=" p-2 text-white w-full bg-black opacity-75">
        <h3 className="text-xl text-center   font-medium">{heading[(currentIndex+1)%heading.length]}</h3>
      </div>
      </Link>
      <Link to="/Home/UserForm" state={{template:heading[(currentIndex+2)%heading.length]}} className='flex flex-col hover:border-[5px] hover:p-1 hover:rounded-lg hover:border-cyan-500 hover:scale-x-105 hover:scale-y-105' >
        
      <img src={images[(currentIndex+2)%images.length]}  alt="" className="w-full h-[500px]" />
      <div className=" p-2 text-white w-full bg-black opacity-75">
        <h3 className="text-xl text-center   font-medium">{heading[(currentIndex+2)%heading.length]}</h3>
      </div>
      </Link>
     
      </div>
      
          {/**Slider Images */}

    <div>

      <button className=" rounded-full p-4 ml-4 hover:bg-gray-300" onClick={handleNext}>
        <svg className="w-8  h-8" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    </div>
    </div>
    </div>
    
    
  );
};


export default Templates;