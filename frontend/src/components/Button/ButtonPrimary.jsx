import React from "react";

function ButtonPrimary({ onClick }) {
  return (
    <a
      onClick={onClick}
      class="inline-block px-4 py-3
    text-sm font-semibold text-center
    text-white uppercase transition
    duration-200 ease-in-out bg-indigo-600 
    rounded-md cursor-pointer
    hover:bg-indigo-700"
    >
      Button
    </a>
  );
}

export default ButtonPrimary;
