import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  // useState for navigation bar
  const [donut, setDonut] = useState(false);

  // Array of objects to be able to click through
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "project",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 text-orange-700 bg-slate-800 px-4 fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Alexander Havers</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-orange-700 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      {/* hide navigation donut/hambuger with screen at certain ratio */}
      <div
        onClick={() => setDonut(!donut)}
        className="cursor-pointer pr-4 z-10 text-orange-700 md:hidden"
      >
        {donut ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {donut && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-slate-800 text-orange-700">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
