import React, { useState } from "react";
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

  const [show, setShow] = useState(false);

  switch (step) {
    case 1:
      return (
        <div className="mx-2 lg:mx-0 lg:ml-10 mt-10 grid lg:grid-cols-5 lg:gap-2">
          <PersonalDetails />
          <Example show={show} setShow={setShow} />
        </div>
      )
    case 2:
      return (
        <div className="mx-2 lg:mx-0 lg:ml-10 mt-10 grid lg:grid-cols-5 lg:gap-2">
          <Academics />
          <Example show={show} setShow={setShow} />
        </div>
      )
    case 3:
      return (
        <div className="mx-2 lg:mx-0 lg:ml-10 mt-10 grid lg:grid-cols-5 lg:gap-2">
          <Activities />
          <Example show={show} setShow={setShow} />
        </div>
      )
    case 4:
      return (
        <div className="mx-2 lg:mx-0 lg:ml-10 mt-10 grid lg:grid-cols-5 lg:gap-2">
          <Projects />
          <Example show={show} setShow={setShow} />
        </div>
      )
    case 5:
      return (
        <div>
          <Example show={show} setShow={setShow} />
        </div>

      )
    default:
      return (
        <div className="mx-2 lg:mx-0 lg:ml-10 mt-10 grid lg:grid-cols-5 lg:gap-2">
          <Activities />
          <Example show={show} setShow={setShow} />
        </div>
      )
  }



}

export default UserForm;
