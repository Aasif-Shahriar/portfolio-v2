import React, { useState } from "react";
import { NavLink } from "react-router";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="lg:hidden">
      {/* open/close button */}
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <MdClose size={30} /> : <FiMenu size={25} />}
      </button>
      {/* menu items */}

      <aside
        className={`absolute top-16 right-0 z-10 min-h-[calc(100vh-64px)] w-64 p-4 bg-white shadow-md transition-all duration-300 ${
          isOpen
            ? "translate-x-0 opacity-100 visible"
            : "translate-x-full opacity-0 invisible"
        }`}
      >
        {/* my photo */}
        <div className="mt-10 flex items-center justify-end">
          <img
            src="https://res.cloudinary.com/dnh9rdh01/image/upload/v1757264036/portfolio-v2-banner_nxfazf.jpg"
            alt="owner_image"
            className="w-24 h-20 object-cover"
          />
        </div>
        {/* aside links */}
        <ul className="flex flex-col items-end gap-4 my-16">
          <li>
            <NavLink to={"/"} className={({isActive})=>`text-lg font-semibold text-gray-500 ${isActive?'text-gray-800':''}`}>Home</NavLink>
          </li>
          <li >
            <NavLink to={"/about"} className={({isActive})=>`text-lg font-semibold text-gray-500 ${isActive?'text-gray-800':''}`}>About</NavLink>
          </li>
          <li >
            <NavLink to={"/projects"} className={({isActive})=>`text-lg font-semibold text-gray-500 ${isActive?'text-gray-800':''}`}>Projects</NavLink>
          </li>
          <li >
            <NavLink to={"/skills"} className={({isActive})=>`text-lg font-semibold text-gray-500 ${isActive?'text-gray-800':''}`}>Skills</NavLink>
          </li>
          <li >
            <NavLink to={"/blogs"} className={({isActive})=>`text-lg font-semibold text-gray-500 ${isActive?'text-gray-800':''}`}>Blogs</NavLink>
          </li>
          <li >
            <NavLink to={"/contact"} className={({isActive})=>`text-lg font-semibold text-gray-500 ${isActive?'text-gray-800':''}`}>Contact</NavLink>
          </li>
        </ul>
        {/* social links */}
        <div className="flex items-center justify-end gap-4">
          <a href="https://www.linkedin.com/in/asif-shahriar01" target="_blank">
            <FaLinkedinIn size={22} />
          </a>
          <a href="https://github.com/Aasif-Shahriar" target="_blank">
            <FaGithub size={22} />
          </a>
          <a href="https://x.com/asif_shahriar1" target="_blank">
            <FaXTwitter size={22} />
          </a>
        </div>
        {/* copyrights */}
        <div className="text-right mt-3">
          <small>© 2025 Asif Shahriar</small>
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;
