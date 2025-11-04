import React from 'react'
import HeroImage from '../assets/icon.jpeg'

const Hero = () => {
  return (
    <section className="text-center py-16 bg-transparent transition-colors duration-500">
      <img
        src={HeroImage}
        alt="Shwetha S"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform
        transition-transform duration-300 hover:scale-105 shadow-lg"
      />

      <h1 className="text-4xl font-bold mb-8 dark:text-white">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Shwetha S — a passionate
        </span>
        , Software Developer.
      </h1>

      <h5 className="text-3xl font-semibold mb-8 dark:text-gray-200 mt-2">
        Fresher
      </h5>

      <p className="mt-8 mx-auto max-w-4xl px-6 text-lg tmb-8 leading-relaxed">
        <span className="text-lg mb-8 font-medium">
          I am passionate about
        </span>{" "}
        building modern, responsive, and user-friendly web applications. I
        specialize in leveraging <strong>JavaScript, React,</strong> and
        contemporary web technologies to transform ideas into seamless digital
        experiences. With a strong focus on clean, maintainable code and
        intuitive design, I enjoy solving complex problems and creating
        solutions that deliver both functionality and a great user experience.
        I thrive in collaborative environments and continuously seek to learn
        and adopt emerging technologies to stay at the forefront of web
        development.
      </p>

      <div className="mt-8 space-x-4">
        <a
          href="https://www.linkedin.com/in/shwetha--s/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Connect With Me
          </button>
        </a>

        <a href="/resume.pdf" download="shwetha_resume.pdf">
          <button
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Resume
          </button>
        </a>
      </div>
    </section>
  )
}

export default Hero
