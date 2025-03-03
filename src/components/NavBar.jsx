import React, { useEffect, useState } from "react";

const NavBar = ({menuOpen, setMenuOpen}) => {

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <nav className="fixed top-0 w-full z-40 bg-[#161a1d] backdrop-blur-lg">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          {/* fazxie :> */}
          <a href="/" className="md:text-2xl font-bold text-white sm:text-xl">
            fazxie<span className="text-orange-200">.</span>
          </a>

          {/* navbar content */}
          <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-gray-200 hover:text-orange-200 transition-colors font-semibold text-lg">
              Home
            </a>
            <a href="#about" className="text-gray-200 hover:text-orange-200 transition-colors font-semibold text-lg">
              About
            </a>
            <a href="#projects" className="text-gray-200 hover:text-orange-200 transition-colors font-semibold text-lg">
              Projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
