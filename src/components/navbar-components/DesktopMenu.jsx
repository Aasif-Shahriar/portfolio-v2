import React from "react";
import { NavLink } from "react-router";

const DesktopMenu = () => {
  return (
    <ul className="hidden lg:flex items-center">
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-6 py-2 ${
              isActive ? "bg-[#333] text-white" : "bg-none text-[#333]"
            } transition-colors duration-300 text-lg font-medium`
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-6 py-2 ${
              isActive ? "bg-[#333] text-white" : "bg-none text-[#333]"
            } transition-colors duration-300 text-lg font-medium`
          }
          to={"/about"}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-6 py-2 ${
              isActive ? "bg-[#333] text-white" : "bg-none text-[#333]"
            } transition-colors duration-300 text-lg font-medium`
          }
          to={"/projects"}
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-6 py-2 ${
              isActive ? "bg-[#333] text-white" : "bg-none text-[#333]"
            } transition-colors duration-300 text-lg font-medium`
          }
          to={"/skills"}
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-6 py-2 ${
              isActive ? "bg-[#333] text-white" : "bg-none text-[#333]"
            } transition-colors duration-300 text-lg font-medium`
          }
          to={"/blogs"}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            `px-6 py-2 ${
              isActive ? "bg-[#333] text-white" : "bg-none text-[#333]"
            } transition-colors duration-300 text-lg font-medium`
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default DesktopMenu;
