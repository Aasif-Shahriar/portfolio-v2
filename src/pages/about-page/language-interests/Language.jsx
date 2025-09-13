import React from "react";
import HorizontalLine from "../../../components/horizontal-line/HorizontalLine";

const Language = () => {
  const lang = ["Bengali", "Hindi", "English"];
  return (
    <section>
      <div className="flex items-center gap-6 mb-8">
        <h3 className="section-head-styles">Language</h3>
        <HorizontalLine />
      </div>
      <ul className="flex items-center justify-between">
        {lang.map((item, idx) => (
          <li
            key={idx}
            className="w-[120px] h-[120px] rounded-full border-2 border-[#333]/30 flex items-center justify-center"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Language;
