import React from "react";
import { useHistory } from "react-router-dom";
import record from "../../assets/images/app/record.png";
function RecordMeal() {
  const history = useHistory();
  return (
    <div>
      <div id="" className="flex flex-col justify-center items-center gap-6">
        <div className="shadow-lg p-8 mb-4 bg-white md:max-w-3xl flex flex-col justify-center items-center gap-4">
          <div>
            <img src={record} />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p>Click to take a picture</p>
            <button className="bg-gray-500 p-5 rounded-full btn"></button>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center gap-4 w-full">
          <label for="about" class="block text-lg font-bold text-warning ">
            Enter your Meal
          </label>
          <div class="mt-1 ">
            <input
              id="about"
              name="meal"
              type="text"
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div>
          <a type="submit" class="btn btn-warning btn-block " href="/calender">
            Add
          </a>
        </div>
      </div>
    </div>
  );
}

export default RecordMeal;
