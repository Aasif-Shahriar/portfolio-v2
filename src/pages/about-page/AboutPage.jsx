import AboutMe from "./AboutMe";
import ServiceCard from "./ServiceCard";
import EducationSection from "./EducationSection";
import Language from "./language-interests/Language";
import Interest from "./language-interests/Interest";

const AboutPage = () => {
  return (
    <section
      className="min-h-for-sec py-12 lg:p-12 xl:p-14 2xl:p-16"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="800"
    >
      {/* about me */}
      <AboutMe />
      <ServiceCard />
      <EducationSection />
      <div className="my-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-12">
        <Language />
        <Interest />
      </div>
    </section>
  );
};

export default AboutPage;
