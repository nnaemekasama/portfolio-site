import React from "react"
import { projects } from "../data"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const Work = () => {
  return (
    <div name="work" className="w-full py-16 bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full lg:px-16">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-start overflow-hidden gap-5"
            >
              {/* Project Image */}
              <a
                href={project.link}
                className=" md:w-1/3 hover:scale-95 md:hover:scale-110 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full"
                />
              </a>

              {/* Project Details */}
              <div className="md:w-2/3 p-8 bg-[#0a191a] flex flex-col gap-4  hover:scale-95 transition-all duration-300">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-gray-300  mt-2">{project.description}</p>
                <div className="flex gap-1 flex-wrap">
                  {project.stacks.map((tech, i) => (
                    <div
                      key={i}
                      className=" border-2 border-white rounded-lg px-2"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.code}>
                    <FaGithub size={20} />
                  </a>
                  <a href={project.link}>
                    <FiExternalLink size={20} />
                  </a>
                </div>
                {/* Add any other project details here */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
