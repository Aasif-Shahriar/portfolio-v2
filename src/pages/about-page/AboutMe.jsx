import React from "react";
import HorizontalLine from "../../components/horizontal-line/HorizontalLine";

const AboutMe = () => {
  return (
    <section>
      <div className="flex items-center gap-6 mb-8">
        <h3 className="section-head-styles">About me</h3>
        <HorizontalLine />
      </div>
      <div className="space-y-4 text-gray-500">
        <p className="text-sm sm:text-base">
          I'm a frontend developer who builds modern, user-friendly websites. My
          journey into tech started from a curiosity about how websites work,
          which I developed while managing traffic for a blog website. This
          passion led me to fully commit to web development in 2023.
        </p>

        <p className="text-sm sm:text-base">
          I have learned <b>MERN Stack Development</b>, and I am proficient in
          Frontend technology like <b>React, JavaScript, Tailwind, Firebase,</b>{" "}
          and some other libraries and frameworks. I have built some full-stack
          projects with these technologies and also built an e-commerce website
          using Next.js.
        </p>

        <p className="text-sm sm:text-base">
          My goal is to become a <b>Full-Stack Developer</b>. I'm currently
          deepening my expertise in my core skills with a plan to master{" "}
          <b>TypeScript</b> and
          <b> Data Structure</b> next. I'm eager to join a great team where I
          can apply my skills, learn from others, and enhance my skills.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
