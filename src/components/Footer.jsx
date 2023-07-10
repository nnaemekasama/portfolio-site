import React from "react"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"

const Footer = () => {
  return (
    <div className=" lg:hidden w-full h-[80px] flex justify-center items-center px-4 bg-[#0a192f] text-gray-300">
      <ul className="flex justify-evenly w-1/2 max-w-[900px]">
        <li>
          <a href="/">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href="/">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="/">
            <BsFillPersonLinesFill />
          </a>
        </li>
        <li>
          <a href="/">
            <HiOutlineMail />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer
