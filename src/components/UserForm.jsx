import React from "react";
import { useLocation } from "react-router-dom";
import PersonalDetails from "./PersonalDetails";
import { useSelector } from "react-redux";
import Academics from "./Academics";
import { Example } from "./Example";
import Activities from "./Activities";
import Projects from "./Projects"
function UserForm() {
  const {
    state: { template },
  } = useLocation();
  console.log(template);
  const step = useSelector((state) => state.userData.step)

  switch (step) {
    case 1:
      return (
        <div className="grid grid-cols-2">
          <PersonalDetails />
          <Example />
        </div>
      )
    case 2:
      return (
        <div className="grid grid-cols-2">
          <Academics />
          <Example />
        </div>
      )
    case 3:
      return (
        <div className="grid grid-cols-2">
          <Activities />
          <Example />
        </div>
      )
    case 4:
      return (
        <div className="grid grid-cols-2">
          <Projects />
          <Example />
        </div>
      )
    case 5:
      return (
        <div>
          <Example />
        </div>

      )
    default:
      return (
        <div className="grid grid-cols-2">
          <Activities />
          <Example />
        </div>
      )
  }



}

export default UserForm;
