import React from "react";
import { Navbar } from "../components";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <section
        id="home"
        className="text-white flex flex-col lg:flex-row items-center justify-center px-10 lg:px-24 py-5 lg:py-10"
      >
        <div className=" w-full md:max-w-[590px] 2xl:mx-14 text-center lg:text-left my-10">
          <h1 className=" text-4xl md:text-5xl font-bold my-5">
            PDEU ACM STUDENT CHAPTER
          </h1>
          <p className="my-5">
            Computing is not just problem solving but it is a discipline to
            build for better Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Non dolorum est asperiores officiis optio iste possimus libero
            corrupti aperiam amet.
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 mt-5 p-3 rounded-lg ">
            Let's get in touch
          </button>
        </div>

        <Image
          priority
          width={550}
          height={400}
          src={"https://pdpu.ac.in/infra/9.jpg"}
        />
        {/* <div className="flex items-center justify-center w-[100%]">
          <div className="absolute bottom-10">
            <div className="flex space-x-4 cursor-pointer">
              <span className="animate-bounce text-2xl">↓</span>
              <span>Know more</span>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default HeroSection;
