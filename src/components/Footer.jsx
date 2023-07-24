import React from "react"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

const Footer = () => {
  return (
    <div className=" lg:hidden w-full h-[50px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300">
      <ul className="flex justify-evenly w-1/2 max-w-[900px]">
        <li>
          <a href="https://www.linkedin.com/in/nnaemeka-nnodim-717b9b199/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/nnaemekasama">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="https://docs.google.com/document/d/1KD6DBstzk8NFQAlOr2Cv5aNf_JX3fEVdP5xCX-_SG08/edit?usp=sharing">
            <BsFillPersonLinesFill />
          </a>
        </li>
        <li>
          <a href="mailto:mannynnodim@gmail.com">
            <HiOutlineMail />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
