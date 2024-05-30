import React from "react";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";

function Header() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeights: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <div className="bg-headerbg w-full flex p-4 justify-around">
      <div>
        <Logo />
      </div>
      <div className="flex">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return (
              "transition-all delay-75 font-poppins text-lg mx-5 hover:text-black hover:bg-white rounded-lg px-2 py-1" +
              (isActive ? " bg-white text-black" : " text-white")
            );
          }}
        >
          Home
        </NavLink>
        <NavLink
          className="transition-all delay-75 font-poppins text-lg text-white mx-5 hover:text-black hover:bg-white rounded-lg px-2 py-1"
          onClick={() => {
            window.scrollTo({
              top: 600,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          Projects
        </NavLink>
        <NavLink
          className="transition-all delay-75 font-poppins text-lg text-white mx-5 hover:text-black hover:bg-white rounded-lg px-2 py-1"
          onClick={() => {
            window.scrollTo({
              top: 1218,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          Experience
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return (
              "transition-all delay-75 font-poppins text-lg mx-5 hover:text-black hover:bg-white rounded-lg px-2 py-1" +
              (isActive ? " bg-white text-black" : " text-white")
            );
          }}
          to="/about"
        >
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
