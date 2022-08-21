import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Logo from "../assets/temp_logo.png";
import { GemsContext } from "./Auth/GemContext";
function Header() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  const history = useHistory();
  const gemData = useContext(GemsContext);
  const [gems, setGems] = useState(0);
  console.log(location.pathname);
  useEffect(() => {
    console.log(location.pathname);
    setPath(location.pathname);
  }, [location.pathname]);

  if (
    path === "/app" ||
    path === "/app/" ||
    path === "/record" ||
    path === "/points" ||
    path === "/settings" ||
    path === "/calendar" ||
    path === "/leaderboard"
  ) {
    return (
      <div className="navbar bg-purple-700 text-white justify-between mb-8  text-base-content rounded-box w-full  max-w-7xl mx-auto px-5 ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-yellow-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
              clipRule="evenodd"
            />
          </svg>
          <p className="font-bold text-lg">{gems}</p>
        </div>
        <div>
          <a
            href="/calendar"
            className="normal-case font-bold text-lg btn btn-ghost"
          >
            Calendar
          </a>
        </div>
        <div>
          <a
            href="/leaderboard"
            className="normal-case font-bold text-lg btn btn-ghost"
          >
            Leaderboard
          </a>
        </div>
        <div>
          <a href="/settings">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </a>
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
