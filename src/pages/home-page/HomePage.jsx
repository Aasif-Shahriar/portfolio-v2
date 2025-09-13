import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <section
      className="min-h-for-sec flex flex-col justify-center gap-16"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="800"
    >
      {/* This hero image will be shown on small device */}
      <div className="w-full lg:hidden">
        <img
          src="https://res.cloudinary.com/dnh9rdh01/image/upload/v1757264036/portfolio-v2-banner_nxfazf.jpg"
          alt="owner_image"
          className=""
        />
      </div>
      {/* name, role and contact button */}
      <div className="space-y-5 lg:p-16">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase">
          Asif Shahriar
        </h2>
        <div className="w-16 h-1 bg-[#333]"></div>
        {/* role animation */}
        <p className="text-2xl">
          I'm a <span className="font-semibold">Front-End Developer</span>
        </p>
        <div className="flex items-center gap-6">
          <Link to={"/contact"}>
            <button className="btn-primary">Get in Touch</button>
          </Link>
          <button className="btn-outline"><a href="https://drive.google.com/file/d/1A39xXOsvt-n7LYFgWj2ejdvnWd5X119w/view?usp=drive_link" target="_blank">See Resume</a></button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
