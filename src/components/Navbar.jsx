import React, { useState } from "react"
import Logo from "../assets/n.jpg"
import {
  FaBars,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTimes,
} from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import { BsFillPersonLinesFill } from "react-icons/bs"
import { Link } from "react-scroll"

const Navbar = () => {
  const [toggleNavBar, setToggleNavBar] = useState(false)

  const handleClick = () => {
    setToggleNavBar(!toggleNavBar)
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo img" style={{ width: "50px" }} />
      </div>

      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10 cursor-pointer" onClick={handleClick}>
        {toggleNavBar ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}

      <ul
        className={
          toggleNavBar
            ? " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/nnaemeka-nnodim-717b9b199/"
              className=" flex justify-between items-center w-full text-gray-300"
            >
              Linkedln
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              href="https://github.com/nnaemekasama"
              className=" flex justify-between items-center w-full text-gray-300"
            >
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-500">
            <a
              href="mailto:mannynnodim@gmail.com"
              className=" flex justify-between items-center w-full text-gray-300"
            >
              Email
              <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              href="https://docs.google.com/document/d/1KD6DBstzk8NFQAlOr2Cv5aNf_JX3fEVdP5xCX-_SG08/edit?usp=sharing"
              className=" flex justify-between items-center w-full text-gray-300"
            >
              Resume
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
