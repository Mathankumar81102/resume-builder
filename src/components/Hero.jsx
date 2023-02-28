import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const Navigate = useNavigate();
  return (
    <div className="bg-custom-color">
      <div id="home-box" className="mt-4 ">
        <div>
          <h1 id="build-h1">
            <span className="text-4xl">Build a Professional Resume</span>
          </h1>
          <p className="top-para mt-5 font-light text-3xl">
            Create a standout resume that will get you noticed by employers.
          </p>
        </div>

        <div className="home-img bg-zinc-200 mt-10">
          <img
            alt="step-1"
            src={require("../assets/step-1-img.jpg")}
            width="400px"
          />

          <div className="home-img-div">
            <h1 className="text-4xl font-bold">Choose your design</h1>
            <p className="mt-8 text-2xl">
              Use our pre-designed templates and create the perfect resume for
              your job search. easily.
            </p>
            <h2 className="font-bold mt-2 text-2xl">
              Keep it easy and simple.
            </h2>
          </div>
        </div>

        <button
          onClick={() => {
            Navigate("/Home/Templates");
          }}
          className="home-btn mx-auto p-4 mt-8 font-extrabold text-2xl"
        >
          Get My Resume !
        </button>

        <div className="home-img bg-zinc-200 mt-10">
          <div className="home-img-div">
            <h1 className="text-4xl font-bold">Fill Your Contents</h1>
            <p className="mt-8 text-2xl">
              If you aren't sure how to write your Resume , don't worry.
            </p>
            <h2 className="font-bold mt-2 text-2xl">
              Let our Resume templates do the work for you.
            </h2>
          </div>

          <img
            alt="step-1"
            src={require("../assets/step-2-img.jpg")}
            width="400px"
          />
        </div>

        <div className="home-img bg-zinc-200 mt-10">
          <img
            alt="step-2"
            src={require("../assets/step-3-img.jpg")}
            width="400px"
          />

          <div className="home-img-div">
            <h1 className="text-4xl font-bold">
              Download in high definition PDF
            </h1>
            <p className="mt-8 text-2xl">
              A strong Resume makes all the difference when you have hundreds of
              competitors.
            </p>
            <h2 className="font-bold mt-2 text-2xl">
              Download your Resume in HD.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
