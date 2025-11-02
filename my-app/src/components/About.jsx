import React from "react";
import { FaGithub, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          
{/* Mission Statement / Quote Card */}
<div className="relative mb-8 md:mb-0 w-full md:w-72 mx-auto md:mx-0">
  <div className="bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-2xl shadow-2xl">
    <div className="bg-black text-white p-6 rounded-2xl min-h-[360px] flex items-center justify-center">
      <p className="text-lg italic text-center">
        “I build modern, responsive web applications that turn ideas into seamless digital experiences. I thrive on solving complex problems and delivering solutions that blend functionality, performance, and design.”
      </p>
    </div>
  </div>
</div>


          {/* About Text & Skills */}
          <div className="flex-1">
            <p className="text-lg mb-8">
              I am a passionate full-stack developer specializing in building modern, responsive, and user-friendly web applications. I leverage my expertise in frontend and backend technologies to create seamless, efficient, and engaging digital experiences. I thrive in collaborative environments and continuously explore new tools and technologies to deliver high-quality solutions.
            </p>

            {/* Skills */}
            <div className="space-y-6">
              
              <div>
                <h3 className="text-2xl font-bold mb-2 text-green-400">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {["C/C++", "Python", "Java", "SQL", "HTML", "CSS"].map((lang, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full hover:bg-green-500 transition-colors cursor-default">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2 text-blue-400">Web Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {["React.js", "REST API", "AWS", "Docker"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full hover:bg-blue-500 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2 text-purple-400">Databases</h3>
                <div className="flex flex-wrap gap-3">
                  {["MySQL", "MongoDB"].map((db, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full hover:bg-purple-500 transition-colors cursor-default">
                      {db}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">Tools & Platforms</h3>
                <div className="flex flex-wrap gap-3">
                  {["Git", "GitHub", "Visual Studio Code"].map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-800 rounded-full hover:bg-yellow-500 transition-colors cursor-default">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* GitHub & LeetCode Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/ShwethaS17"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-transform transform hover:scale-105"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://leetcode.com/u/SHWETHA__S/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-400 px-6 py-3 rounded-full transition-transform transform hover:scale-105"
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
