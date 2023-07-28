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
              I, who? I'm Nnodim Nnaemeka, also known as Emeka, a frontend
              developer from West Africa, currently residing in Owerri, Nigeria.
              I enjoy building aesthetic and functional user interfaces via
              writing code. I've always had a keen interest in computers and
              technologies, and during the pandemic in 2020 I made the decision
              to start learning web development, and ever since then I've been
              learning, honing my web development skills, and keeping an open
              mind. I've worked with a lot of technologies, some of which are
              listed in the Skill Section. Right now, I'm open to full-time,
              part-time, or internship roles that would allow me to showcase
              what I've learnt so far in my Web Development journey and also,
              gain real-world experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
