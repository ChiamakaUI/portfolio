import React from "react";
import { Link } from "react-router-dom";
import ToggleIcon from "./ToggleIcon";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between max-w-screen-2xl w-[85%] mx-auto pt-8">
      <Link to="/">
        <h2 className="text-5xl font-abril dark:text-white">CE.</h2>
      </Link>
      <div className="flex flex-row items-center justify-between text-gray-500 dark:text-white text-lg font-gabriela w-[40%]">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <ToggleIcon />
      </div>
    </div>
  );
};

export default Navbar;

// absolute  top-6 left-7