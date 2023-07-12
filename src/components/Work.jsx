import React from "react"
import { projects } from "../data"

const Work = () => {
  return (
    <div name="work" className="w-full h-auto bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full lg:px-16">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${project.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            >
              {/* Hover effects */}

              <div className="opacity-0 group-hover:opacity-100 ">
                <div className="px-4">
                  <p className="text-2xl font-bold text-white tracking-wider">
                    {project.title}
                  </p>

                  <p className="">{project.description}</p>
                </div>
                <div className="flex justify-center  text-sm sm:text-base">
                  <a href={project.link}>
                    <button className="text-center rounded-lg  px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                      Demo
                    </button>
                  </a>
                  <a href={project.code}>
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
