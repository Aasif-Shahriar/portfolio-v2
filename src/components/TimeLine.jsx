import React from "react";

const EducationTimeline = () => {
  const data = [
    {
      year: "2014 - running",
      title: "Oxford University",
      degree: "Master Degree",
    },
    {
      year: "2010 - 2014",
      title: "Texas University",
      degree: "Bachelor Degree",
    },
    {
      year: "2008 - 2010",
      title: "Simone College",
      degree: "Associate Degree",
    },
  ];

  return (
    <div className="relative border-l border-gray-300 pl-6 space-y-8">
      {data.map((item, index) => (
        <div key={index} className="flex items-start gap-6">
          {/* Left: Year with circle */}
          <div className="absolute -left-[11px] bg-white border-2 border-gray-400 rounded-full h-5 w-5"></div>
          <div className="bg-gray-100 px-4 py-1 rounded-full text-sm text-gray-700">
            {item.year}
          </div>

          {/* Right: Details */}
          <div>
            <h3 className="font-bold text-gray-900">{item.title}</h3>
            <p className="text-gray-500 text-sm">{item.degree}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationTimeline;
