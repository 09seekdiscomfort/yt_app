import React from "react";
import { FaHome, FaMusic, FaGamepad, FaFilm, FaTrophy } from "react-icons/fa";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const { isMenuOpen } = useSelector((store) => store.app);

  const categories = [
    { name: "Home", icon: <FaHome /> },
    { name: "Music", icon: <FaMusic /> },
    { name: "Gaming", icon: <FaGamepad /> },
    { name: "Movies", icon: <FaFilm /> },
    { name: "Trending", icon: <FaTrophy /> },
  ];

  return (
    <div
      className={`h-screen bg-white text-gray-800 shadow-lg transition-width duration-300 ${
        isMenuOpen ? "w-64" : "w-20"
      }`}
    >
      <ul className="mt-4">
        {categories.map(({ name, icon }) => (
          <li
            key={name}
            className="flex items-center p-4 hover:bg-gray-100 cursor-pointer transition duration-200"
          >
            <span className="mr-3 text-lg">{icon}</span>
            {isMenuOpen && <span>{name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
