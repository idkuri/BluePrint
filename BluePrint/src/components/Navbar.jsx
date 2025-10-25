"use client"
import React, { useState, useEffect } from "react";
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
  setIsMenuOpen(false); // Close menu after navigation
};


// Disable scroll when menu is open
useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'unset';
    }
  
    console.log(document.body.style)
    
    // Cleanup function
    return () => {
      document.body.style.overflowY = 'unset';
    };
}, [isMenuOpen]);

return (
  <>
    <nav className="flex justify-between items-center h-[111px] px-8 py-4 bg-white text-black z-50 relative">
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

    {/* Mobile Menu Modal */}
    <div 
      className={`fixed left-0 right-0 bg-white z-40 xl:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'top-[111px] opacity-100' : 'top-[-100vh] opacity-0'
      }`}
      style={{ height: 'calc(100vh - 111px)' }}
    >
      <div className="flex flex-col items-center justify-center h-full ">
        <ul className="flex flex-col gap-8 text-center text-black">
          <li>
            <button onClick={() => {scrollToSection("intro"); setIsMenuOpen(false)}}  className="text-2xl font-semibold hover:cursor-pointer">INTRO</button>
          </li>
          <li>
            <button onClick={() => {scrollToSection("agenda"); setIsMenuOpen(false)}} className="text-2xl font-semibold hover:cursor-pointer">AGENDA</button>
          </li>
          <li>
            <button onClick={() => {scrollToSection("speaker"); setIsMenuOpen(false)}} className="text-2xl font-semibold hover:cursor-pointer">SPEAKERS</button>
          </li>
        </ul>
        <button className="relative overflow-hidden border-l-2 border-b-2 border-black w-[200px] h-10 font-medium group hover:cursor-pointer mt-12">
          <div className="absolute top-0 left-0 h-full w-0 bg-black transition-all duration-250 ease-linear group-hover:w-full"></div>
          <span className="relative right-8 top-0.5 z-10 font-normal text-black transition-colors duration-250 ease-linear group-hover:text-white">
            GET TICKETS
          </span>
        </button>
      </div>
    </div>
  </>
  );
};

export default Navbar;