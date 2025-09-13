import React from "react";
import HorizontalLine from "../../components/horizontal-line/HorizontalLine";

const ProjectsPage = () => {
  return (
    <section
      className="min-h-for-sec py-12 lg:p-12 xl:p-14 2xl:p-16"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="800"
    >
      <div className="flex items-center gap-6  mb-8">
        <h2 className="section-head-styles">Projects I've Done</h2> <HorizontalLine />
      </div>
      <ul className="flex items-center flex-wrap gap-6">
        <li>All</li>
        <li>React Projects</li>
        <li>Full-Stack Projects</li>
        <li>HTML & CSS Projects</li>
      </ul>
    </section>
  );
};

export default ProjectsPage;
