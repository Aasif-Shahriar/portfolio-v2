// Education and Certificate Section.
import React from "react";
import HorizontalLine from "../../components/horizontal-line/HorizontalLine";
import EducationTimeline from "../../components/TimeLine";

const EducationSection = () => {
  const education = [
    {
      year: "2022-running",
      college: "Titumir College, Dhaka",
      degree: "Bachelor Degree",
    },
    {
      year: "2018-2020",
      college: "City College, Gopalganj",
      degree: "Higher Education",
    },
  ];
  const certificates = [
    {
      year: "JAN 25-JUL 25",
      title: "Complete Web Development Bootcamp",
      institution: "Programming Hero",
    },
  ];
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-12">
      {/* Education section */}
      <div>
        <div className="flex items-center gap-6 mb-8">
          <h3 className="section-head-styles">Education</h3>
          <HorizontalLine />
        </div>

        <div className="relative border-l border-[#333]/10 pl-6 space-y-8">
          {education.map((item, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-6 items-center">
              <div className="absolute -left-[10px] border bg-white border-[#333]/30 rounded-full w-5 h-5"></div>
              <div>
                <p className="bg-[#333]/10 inline-block px-4 py-2 rounded-full text-sm">
                  {item.year}
                </p>
              </div>
              {/* right side content */}
              <div>
                <h3 className="text-lg font-medium">{item.college}</h3>
                <p className="text-sm text-[#333]/50">{item.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Certificate section */}
      <div>
        <div className="flex items-center gap-6 mb-8">
          <h3 className="section-head-styles">Certification</h3>
          <HorizontalLine />
        </div>

        <div className="relative border-l border-[#333]/10 pl-6 space-y-8">
          {certificates.map((item, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-5 items-center">
              <div className="absolute -left-[10px] border bg-white border-[#333]/30 rounded-full w-5 h-5"></div>
              <div>
                <p className="bg-[#333]/10 inline-block px-4 py-2 rounded-full text-sm">
                  {item.year}
                </p>
              </div>
              {/* right side content */}
              <div>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-[#333]/50">{item.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
