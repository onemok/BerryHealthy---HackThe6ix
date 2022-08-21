import React from "react";
import { useHistory } from "react-router-dom";
import child from "../../assets/images/signup/child.png";

function CheckPoints() {
  const [points, setPoints] = React.useState(12);
  const history = useHistory();
  const levelLimit = 50;
  return (
    <div className="max-w-full">
      <div className="flex flex-col justify-center items-center gap-8">
        <div>
          <img src={child} />
        </div>
        <div className="bg-purple-500 rounded-3xl py-20 px-40 text-black">
          <span className="font-bold text-7xl">{points} Points</span>
        </div>
        <div className="w-52 h-96 bg-white border-1 border-solid  relative">
          <strong
            className="w-full block bg-yellow-500 absolute bottom-0 "
            style={{ height: `${(points / levelLimit) * 100}%` }}
          ></strong>
        </div>
        <div>
          <p className="text-white text-2xl font-bold ">
            38 more points to level up!
          </p>
        </div>

        <button
          className="btn btn-warning rounded-full w-1/4"
          onClick={() => history.push("/app")}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default CheckPoints;
