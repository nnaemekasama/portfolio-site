import React from "react"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

const Footer = () => {
  return (
    <div className=" lg:hidden w-full h-[80px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300">
      <ul className="flex justify-evenly w-1/2 max-w-[1000px]">
        <li>
          <a
            href="/"
            className=" flex justify-between items-center w-full text-gray-300 "
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li>
          <a
            href="/"
            className=" flex justify-between items-center w-full text-gray-300"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a
            href="/"
            className=" flex justify-between items-center w-full text-gray-300"
          >
            <BsFillPersonLinesFill size={30} />
          </a>
        </li>
        <li>
          <a
            href="/"
            className=" flex justify-between items-center w-full text-gray-300"
          >
            <HiOutlineMail size={30} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
