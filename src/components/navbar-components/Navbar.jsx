import React from "react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white">
      <div className="section-w px-4 h-full mx-auto flex items-center justify-between">
        {/* logo */}
        <h2 className="text-2xl font-bold tracking-wider">ASIF</h2>
        {/* sidebar and nav-links */}
        <MobileMenu />
        <DesktopMenu />
      </div>
    </nav>
  );
};

export default Navbar;
