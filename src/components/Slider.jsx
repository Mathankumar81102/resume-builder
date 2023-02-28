import React, { useState } from 'react';

const Slider = ({ images ,onSubmit},) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1)%images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex + images.length-1)%images.length);
  };

  return (
    <div className="flex items-center">
    <div>

      <button className=" rounded-full p-2 hover:bg-gray-300" onClick={handlePrev}>
        <svg className="w-4 h-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
    </div>
    
    {/**Slider Images */}
      <div className="grid grid-cols-4 gap-x-6 ">

      <button className='flex flex-col hover:scale-x-105 hover:scale-y-105' onClick={()=>onSubmit(images[currentIndex].heading)} >
        
      <img src={require("../assets/"+images[currentIndex].src)}  alt="" className="w-full h-[300px]" />
      <div className=" p-2 text-white w-full bg-black opacity-75">
        <h3 className="text-xl text-center   font-medium">{images[currentIndex].heading}</h3>
      </div>
      </button>
      <button className='hover:scale-x-105 hover:scale-y-105 flex flex-col' onClick={()=>onSubmit(images[(currentIndex+1)%images.length].heading)} >
        
      <img src={require("../assets/"+images[(currentIndex+1)%images.length].src)}  alt="" className="w-full h-[300px]" />
      <div className=" p-2 text-white w-full bg-black opacity-75">
        <h3 className="text-xl text-center   font-medium">{images[(currentIndex+1)%images.length].heading}</h3>
      </div>
      </button>
      <button className='flex flex-col hover:scale-x-105 hover:scale-y-105' onClick={()=>onSubmit(images[(currentIndex+2)%images.length].heading)}>
        
      <img src={require("../assets/"+images[(currentIndex+2)%images.length].src)}  alt="" className="w-full h-[300px]" />
      <div className=" p-2 text-white w-full bg-black opacity-75">
        <h3 className="text-xl text-center   font-medium">{images[(currentIndex+2)%images.length].heading}</h3>
      </div>
      </button>
      <button className='flex flex-col hover:scale-x-105 hover:scale-y-105' onClick={()=>onSubmit(images[(currentIndex+3)%images.length].heading)} >
        
      <img src={require("../assets/"+images[(currentIndex+3)%images.length].src)}  alt="" className="w-full h-[300px]" />
      <div className=" p-2 text-white w-full bg-black opacity-75">
        <h3 className="text-xl text-center   font-medium">{images[(currentIndex+3)%images.length].heading}</h3>
      </div>
      </button>
      </div>
      
          {/**Slider Images */}

    <div>

      <button className=" rounded-full p-2 hover:bg-gray-300" onClick={handleNext}>
        <svg className="w-4 h-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    </div>
  );
};

export default Slider;
