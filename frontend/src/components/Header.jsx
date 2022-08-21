import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../assets/temp_logo.png";
import { GemsContext } from "./Auth/GemContext";
function Header() {
  const location = useLocation();
  const { gems } = useContext(GemsContext);
  if (location.pathname === "/app") {
    return (
      <div className="navbar bg-base-100 justify-between mb-8  text-base-content rounded-box w-full   mx-auto ">
        <div>
          <p>{gems}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="navbar bg-base-100 justify-between mb-8  text-base-content rounded-box w-full  max-w-7xl mx-auto ">
        <div className="flex-initial">
          <a href="/">
            <img src={Logo} className="w-28" />
          </a>
          <div></div>
        </div>

        <div>
          <button className="btn btn-outline">Contact Us</button>
        </div>
      </div>
    );
  }
}

export default Header;
