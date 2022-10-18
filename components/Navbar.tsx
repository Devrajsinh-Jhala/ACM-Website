import React, { useState } from "react";
import Image from "next/image";
import logo from "../assets/logo.png";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const navLinks = [
    { index: 1, name: "Home", link: "#home" },
    { index: 2, name: "About Us", link: "#about" },
    { index: 3, name: "Team", link: "#team" },
    { index: 4, name: "Contact Us", link: "#contact" },
  ];
  // <Image src={logo} alt="ACM PDEU Logo" width={80} height={80} />
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={"shadow-md z-50 w-full fixed top-0 left-0"}>
      <div className="md:flex items-center justify-between bg-black py-4 md:px-20 px-7">
        <Image
          className="cursor-pointer"
          src={logo}
          alt="ACM PDEU Logo"
          width={50}
          height={50}
        />

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <AiOutlineClose /> : <BiMenu />}
        </div>
        <ul
          className={`md:flex md:items-center bg-black md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            isOpen ? "top-20" : "top-[-490px]"
          } `}
        >
          {navLinks.map((navLink) => (
            <li className="md:ml-8 md:my-0 my-7 text-base" key={navLink.index}>
              <a
                className="text-white hover:text-blue-500 duration-500"
                href={navLink.link}
              >
                {navLink.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
