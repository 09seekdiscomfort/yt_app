import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md my-1">
      <div className="flex items-center">
        <RxHamburgerMenu
          className="h-8 w-8 mx-2 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt="YouTube logo"
          className="h-10"
        />
      </div>
      <div className="flex flex-grow mx-4 max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 px-4 border border-gray-300 rounded-l-full focus:outline-none"
        />
        <button className="bg-gray-300 w-20 rounded-r-full flex items-center justify-center">
          <CiSearch />
        </button>
      </div>
      <div className="flex items-center">
        <FaUserCircle className="h-10 w-10 cursor-pointer" />
      </div>
    </div>
  );
};

export default Head;
