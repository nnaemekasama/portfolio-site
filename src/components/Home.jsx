import React from "react"
import { HiArrowRight } from "react-icons/hi"
import { Link } from "react-scroll"

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full lg:px-16">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Nnodim Nnaemeka
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Frontend Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Nice to meet you, please take a look around
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex flex-0 items-center hover:bg-pink-600 hover:border-pink-500">
            <Link
              className="flex items-center"
              to="work"
              smooth={true}
              duration={500}
            >
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowRight className="ml-3" />
              </span>
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
