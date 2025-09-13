import React from "react";
import HorizontalLine from "../../components/horizontal-line/HorizontalLine";

const ServiceCard = () => {
  const services = [
    {
      id: 1,
      title: "Front-End Development",
      description:
        "Creating responsive, interactive user interfaces with React and modern CSS",
    },
    {
      id: 2,
      title: "Back-End Architecture",
      description:
        "Building scalable APIs and database solutions with Node.js and MongoDB",
    },
    {
      id: 3,
      title: "Full Stack Integration",
      description:
        "Seamlessly connecting frontend and backend for complete web applications",
    },
    {
      id: 4,
      title: "Authentication System",
      description:
        "Integrate authentication system with firebase auth and secure API with HTTP-Only cookie with JWT",
    },
  ];
  return (
    <section className="my-12">
      <div className="flex items-center gap-6 mb-8">
        <h3 className="section-head-styles">Services</h3>
        <HorizontalLine />
      </div>
      {/* services card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
        {services.map((service) => (
          <div key={service.id} className="border-2 border-[#333]/10 p-3">
            <h3 className="text-xl font-semibold mb-3 text-gray-600">{service.title}</h3>
            <p className="text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCard;
