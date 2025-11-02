import React from "react";
import chat from "../assets/project 1.png";
import tolltax from "../assets/Toll-Tax-Management-System-Dashboard.png";
import rag from "../assets/project 2.jpeg";

const projects = [
  {
    id: 1,
    name: "Role-Based Chat Application (Academics)",
    technologies: "Python Flask",
    image: chat,
    github: "https://github.com/ShwethaS17/Role-based-Chat-Application",
  },
  {
    id: 2,
    name: "Retrieval-Augmented Generation (RAG) using Large Language Models (LLMs)",
    technologies: "Python Flask",
    image: rag,
    github: "https://github.com/ShwethaS17/Retrieval-Augmented-Generation-RAG-using-Large-Language-Models-LLMs-",
  },
  {
    id: 3,
    name: "Toll Tax Management",
    technologies: "PHP",
    image: tolltax,
    github: "https://github.com/ShwethaS17/toll_tax_mgt/tree/main/ttms",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 flex flex-col rounded-2xl overflow-hidden hover:shadow-xl 
              transform transition-transform duration-300 hover:scale-105"
            >
              {/* Image */}
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-grow p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-400 mb-4">{project.technologies}</p>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-medium hover:scale-105 transition-transform duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
