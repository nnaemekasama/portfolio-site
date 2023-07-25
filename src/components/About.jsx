import React from "react"

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full lg:px-12">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full  grid  px-4">
          <div>
            <p className="text-lg">
              I am a detail-oriented frontend developer with expertise in
              designing visually appealing and responsive websites. My skills
              encompass modern technologies like React, Redux, and React Router,
              and I have a solid grasp of HTML, CSS, and JavaScript. Experienced
              in integrating APIs and using GitHub for version control, I am
              eager to secure a junior position where I can apply my knowledge
              in creating user-friendly websites. My portfolio showcases
              projects that highlight my strong problem-solving abilities and my
              commitment to staying updated with the latest industry best
              practices. Constantly seeking to learn and improve, I am dedicated
              to delivering high-quality work in every project.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
