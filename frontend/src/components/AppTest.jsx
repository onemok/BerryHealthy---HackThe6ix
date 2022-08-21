import React from "react";
import { useHistory } from "react-router-dom";
import child from "../assets/images/signup/child.png";
function AppTest() {
  const history = useHistory();
  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <div className="py-4 md:py-24 flex flex-col md:flex-row justify-center items-center space-y-20 md:space-y-0  text-center md:text-left">
          <div className="relative w-full md:w-5/12 flex flex-col justify-start items-start gap-2">
            <img src={child} />
          </div>
          <div className="w-full md:w-5/12 flex flex-col items-center">
            <h1 class="font-extrabold text-4xl md:text-5xl tracking-tight text-center mb-5">
              Welcome Back
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-10 justify-center mt-40">
        <button
          className="rounded-full h-80 w-80  text-base-content font-bold btn btn-primary"
          onClick={() => history.push("/points")}
        >
          Check your Points
        </button>
        <button
          className="rounded-full h-80 w-80  text-base-content font-bold btn btn-warning text-white md:-translate-y-1/2 animate-none"
          onClick={() => history.push("/record")}
        >
          Record a Meal
        </button>
        <button className="rounded-full h-80 w-80  text-base-content font-bold btn btn-primary">
          Food of the Day
        </button>
      </div>
    </div>
  );
}

export default AppTest;
