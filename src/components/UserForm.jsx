import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import { useSelector } from "react-redux";
import Academics from "./Academics";
function UserForm() {
  const {
    state: { template },
  } = useLocation();
    console.log(template);
  const step=useSelector((state)=>state.userData.step)
    
    switch(step){
    case 1:
     return (

     <PersonalDetails/>
     
     )
      break;
    default :
    return (<Academics/>)
    }
    
    
  
}

export default UserForm;
