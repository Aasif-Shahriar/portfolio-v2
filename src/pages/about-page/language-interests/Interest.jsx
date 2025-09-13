import React from "react";
import HorizontalLine from "../../../components/horizontal-line/HorizontalLine";
import { BiSolidRightArrow } from "react-icons/bi";

const Interest = () => {
  const interestsList = [
    "Coding Challenges",
    "Problems Solving",
    "Read & Writing",
    "Music & Cinema",
    "Travel & Picnic",
  ];
  return (
    <section>
      <div className="flex items-center gap-6 mb-8">
        <h3 className="section-head-styles">Interest</h3>
        <HorizontalLine />
      </div>
      <ul className="space-y-5 text-[#333]/60">
        {interestsList.map((item, idx) => (
          <li key={idx} className="flex items-center gap-2 text-lg">
            <BiSolidRightArrow size={15} />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Interest;
