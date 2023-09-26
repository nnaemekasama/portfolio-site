import React from "react"
import { skills } from "../data"

const Skills = () => {
  return (
    <div name="skills" className="py-16 w-full  bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full lg:px-16">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={skill.image} alt="HTML icon" />
              <p className="my-4">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
