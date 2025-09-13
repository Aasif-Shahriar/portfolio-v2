import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import HorizontalLine from "../../components/horizontal-line/HorizontalLine";
import { FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";

const SkillsPage = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Firebase",
    "axios",
    "npm",
    "TanStack Query",
    "React Router",
    "REST APIs",
    "Figma",
    "VS Code",
    "Netlify",
    "Vercel",
    "Responsive Design",
  ];

  const icons = [
    <FaHtml5 />,
    <FaCss3Alt />,
    <RiJavascriptFill />,
    <FaReact />,
    <RiTailwindCssFill />,
    <FaGitAlt />,
    <FaGithub />,
    <FaNodeJs />
  ];

  return (
    <section
      className="min-h-for-sec py-12 lg:p-12 xl:p-14 2xl:p-16"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="800"
    >
      <div className="flex items-center gap-6  mb-8">
        <h2 className="section-head-styles">FrontEnd Skills</h2>
        <HorizontalLine />
      </div>
      <div className="flex items-center gap-5 flex-wrap">
        {skills.map((skill, idx) => (
          <span key={idx} className="px-5 py-3 border border-[#333]/30">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
