"use client"
import React, { useState } from "react";
import Hamburger from "@/components/Hamburger";
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (!section) return;

  let yOffset = 0;

  switch (id) {
    case "agenda":
      yOffset = -150; // adjust as needed
      break;
    case "intro":
      yOffset = 0; // example for another section
      break;
    // Add more cases as you introduce new sections
    case "speaker":
      yOffset = -200;
      break;
    default:
      yOffset = 0;
      break;
  }

  const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
};


return (
  <nav className="flex justify-between items-center h-[111px] px-8 py-4 bg-white text-black z-10 relative">
    {/* Left-side: Logo */}
    <Link className="flex items-center justify-center gap-4" href="/">
      <img
        src="/images/logo.svg"
        alt="Logo"
        className="w-[280px] h-[70.28px] md:w-[477px] md:h-[70.28px] transition-all duration-150"
      />
    </Link>
    {/* Right-side navigation - hidden on mobile when menu is closed */}
    <div className={`flex items-center`}>
      {/* Show hamburger on mobile only */}
      <div className="flex items-center justify-center mt-5 md:mt-0 xl:hidden">
        <Hamburger 
          type="spin" 
          isActive={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      
      <div className="hidden xl:flex flex-row justify-center items-center gap-[1%] md:gap-[70px] mt-6 mr-15">
          <ul className="flex gap-7">
              <li>
                  <button onClick={() => scrollToSection("intro")} className="font-semibold hover:cursor-pointer">INTRO</button>
              </li>
              <li>
                  <button onClick={() => scrollToSection("agenda")} className="font-semibold hover:cursor-pointer">AGENDA</button>
              </li>
              <li>
                  <button onClick={() => scrollToSection("speaker")} className="font-semibold hover:cursor-pointer">SPEAKERS</button>
              </li>
          </ul>
          <button className="relative overflow-hidden border-l-2 border-b-2 border-black w-[200px] h-10 font-medium group hover:cursor-pointer">
            <div className="absolute top-0 left-0 h-full w-0 bg-black transition-all duration-250 ease-linear group-hover:w-full"></div>
            <span className="relative right-8 top-0.5 z-10 font-normal text-black transition-colors duration-250 ease-linear group-hover:text-white">
              GET TICKETS
            </span>
          </button>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;