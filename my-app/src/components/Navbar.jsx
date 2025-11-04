import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle theme
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Apply theme to the entire body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <nav
      className={`px-8 md:px-16 lg:px-24 fixed w-full top-0 z-50 transition-colors duration-500 ${
        isDarkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="container py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
          Shwetha S
        </div>

        {/* Nav Links */}
        <div className="space-x-6 text-center flex-1 md:flex-none">
          <a href="#home" className="hover:text-green-400 transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-green-400 transition-colors">
            About Me
          </a>
          <a href="#project" className="hover:text-green-400 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-green-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Moonlight Toggle Button */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full shadow-md transform hover:scale-105 transition-transform text-sm"
        >
          {isDarkMode ? (
            <>
              <FaSun /> Light
            </>
          ) : (
            <>
              <FaMoon /> Dark
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
