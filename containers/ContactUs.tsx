import React from "react";
import Contact from "../assets/contact image.svg";
import Image from "next/image";
import { BsFacebook, BsLinkedin, BsInstagram } from "react-icons/bs";
import { InputElement } from "../components";
import { FaTelegramPlane } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section id="contact" className="text-white mt-20 mb-10">
      <div className="contact_us_container flex flex-col-reverse  lg:flex-row items-center justify-between xl:justify-center xl:space-x-14 px-24">
        <div className="left_section flex items-center">
          <ul className="pr-8 hidden md:block -mt-24">
            <li className="my-8">
              <a target={"_blank"} href="http://www.facebook.com">
                <BsFacebook
                  className="hover:scale-125 transition-all duration-200 ease-in-out"
                  color="white"
                  size={30}
                />
              </a>
            </li>
            <li className="mb-8">
              <a target={"_blank"} href="http://www.instagram.com">
                <BsInstagram
                  className="hover:scale-125 transition-all duration-200 ease-in-out"
                  color="white"
                  size={30}
                />
              </a>
            </li>
            <li className="">
              <a target={"_blank"} href="http://www.linkedin.com">
                <BsLinkedin
                  className="hover:scale-125 transition-all duration-200 ease-in-out"
                  color="white"
                  size={30}
                />
              </a>
            </li>
          </ul>
          <div className=" lg:mt-28">
            <form
              action="https://formspree.io/f/myyvpqzw"
              method="POST"
              className="flex items-center md:items-start flex-col space-y-8"
            >
              <div className="">
                <p className="font-inter font-semibold text-white text-[13px] mb-2 ">
                  Name
                </p>
                <input
                  className=" w-full sm:w-[250px] leading-[1.3rem] tracking-[-0.015em] font-inter pl-[15px] border border-gray-400 rounded-lg text-[14px] text-black focus:outline-none  py-[13px] h-[43px] "
                  type="text"
                  name={"Name"}
                  placeholder={`Enter your name`}
                  // value={input}
                  // onChange={(e) => setInput(e.target.value)}
                />
              </div>

              <div>
                <p className="font-inter font-semibold text-white text-[13px] mb-2 ">
                  E-mail
                </p>
                <input
                  className=" w-full  sm:w-[250px] leading-[1.3rem] tracking-[-0.015em] font-inter pl-[15px] border border-gray-400 rounded-lg text-[14px] text-black focus:outline-none  py-[13px] h-[43px] "
                  type="email"
                  name={"Email"}
                  placeholder={`Enter your email address`}
                  // value={input}
                  // onChange={(e) => setInput(e.target.value)}
                />
              </div>

              <div>
                <p className=" font-inter font-semibold text-white text-[13px] mb-1">
                  Message
                </p>
                <textarea
                  className="border w-[250px] sm:w-full tracking-[-0.015em] text-black leading-[1.3rem] text-[14px] focus:outline-none focus:border-blue-500 py-2 px-2 border-slate-400 rounded-md resize-none font-inter "
                  name="bio"
                  id="bio"
                  placeholder="Write your thoughts here..."
                  cols={48}
                  rows={3}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 flex items-center justify-center text-sm hover:bg-blue-700 w-fit mt-5 p-3 rounded-lg "
              >
                Send Message
                <span className="pl-2 mt-1">
                  <FaTelegramPlane />
                </span>
              </button>
            </form>
          </div>
        </div>
        <div className="right_section">
          <Image src={Contact} width={500} height={500} />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
