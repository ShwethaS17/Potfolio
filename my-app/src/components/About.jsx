import React from "react";
import { FaGithub, FaLaptopCode } from "react-icons/fa";

const About = () => {
  const skillStyle =
    "px-3 py-1 rounded-full border border-gray-500 text-[var(--box-text)] bg-[var(--box-bg)] transition-colors duration-300 cursor-default hover:opacity-90";

  return (
    <div className="py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>

        <div className="flex flex-col items-center">
          <div className="max-w-4xl text-center md:text-left">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer specializing in building
              modern, responsive, and user-friendly web applications. I leverage
              my expertise in frontend and backend technologies to create
              seamless, efficient, and engaging digital experiences. I thrive in
              collaborative environments and continuously explore new tools and
              technologies to deliver high-quality solutions.
            </p>

            {/* Skills */}
            <div className="space-y-6">
              {/* Languages */}
              <div>
                <h3 className="text-2xl font-bold mb-2 text-green-500">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {["C/C++", "Python", "Java", "SQL", "HTML", "CSS"].map(
                    (lang, i) => (
                      <span key={i} className={skillStyle}>
                        {lang}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Web Technologies */}
              <div>
                <h3 className="text-2xl font-bold mb-2 text-blue-500">
                  Web Technologies
                </h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {["React.js", "REST API", "AWS", "Docker"].map((tech, i) => (
                    <span key={i} className={skillStyle}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div>
                <h3 className="text-2xl font-bold mb-2 text-purple-500">
                  Databases
                </h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {["MySQL", "MongoDB"].map((db, i) => (
                    <span key={i} className={skillStyle}>
                      {db}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-2xl font-bold mb-2 text-yellow-500">
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {["Git", "GitHub", "Visual Studio Code"].map((tool, i) => (
                    <span key={i} className={skillStyle}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="https://github.com/ShwethaS17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-gray-500 bg-[var(--box-bg)] text-[var(--box-text)] hover:opacity-80 px-6 py-3 rounded-full transition-transform transform hover:scale-105"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://leetcode.com/u/SHWETHA__S/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-full transition-transform transform hover:scale-105"
              >
                <FaLaptopCode /> LeetCode
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
