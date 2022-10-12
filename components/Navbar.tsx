import React from "react";
import Image from "next/image";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = [
    { index: 1, name: "Home", link: "home" },
    { index: 2, name: "About Us", link: "about" },
    { index: 3, name: "Team", link: "team" },
    { index: 4, name: "Contact Us", link: "contact" },
  ];
  return (
    <div
      className={
        "navbar_container px-24 py-4 flex items-center justify-between"
      }
    >
      <div className="navbar_left">
        <Image src={logo} alt="ACM PDEU Logo" width={80} height={80} />
      </div>
      <div className={"navbar_right"}>
        <ul className=" flex items-center justify-center space-x-10">
          {navLinks.map((navLink) => (
            <li key={navLink.index}>
              <a className="text-white hover:text-blue-500" href={"#"}>
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
