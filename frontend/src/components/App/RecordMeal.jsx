import React from "react";
import record from "../../assets/images/app/record.png";
function RecordMeal() {
  return (
    <div>
      <div id="">
        <div className="shadow-lg p-8 mb-4 bg-white md:max-w-3xl flex flex-col justify-center items-center gap-4">
          <div>
            <img src={record} />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p>Click to take a picture</p>
            <button className="bg-gray-500 p-5 rounded-full"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordMeal;
