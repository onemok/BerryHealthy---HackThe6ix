import React from "react";

function Settings() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex flex-col justify-center gap-6 ">
        <button className="btn px-10 py-2 btn-warning rounded-3xl">
          CONTACT US
        </button>
        <a href="/" className="btn px-10 py-2 btn-primary  rounded-3xl">
          LOG OUT
        </a>
      </div>
    </div>
  );
}

export default Settings;
