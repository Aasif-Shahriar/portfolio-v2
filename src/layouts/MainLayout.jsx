import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/navbar-components/Navbar";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const MainLayout = () => {
  return (
    <div className="section-w h-screen flex flex-col">
      {/* static navbar */}
      <Navbar />

      {/* aside and dynamic pages */}
      <section className="grid lg:grid-cols-12  mt-16 flex-1 overflow-hidden">
        <aside className="col-span-5 hidden lg:block pl-4">
          <img
            src="https://res.cloudinary.com/dnh9rdh01/image/upload/v1757264036/portfolio-v2-banner_nxfazf.jpg"
            alt="website_owner_image"
            className="h-full w-full object-cover object-center"
          />
        </aside>
        <section className="col-span-7 h-full overflow-y-auto bg-[#f6fbff] px-4">
          <Outlet />
        </section>
      </section>

      {/* footer */}
      <footer className="hidden lg:flex h-16 items-center justify-between px-4">
        <small>All rights reserved by Asif Shahriar</small>
        {/* social */}
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
      </footer>
    </div>
  );
};

export default MainLayout;
