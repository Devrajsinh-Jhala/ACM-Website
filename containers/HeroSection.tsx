import React from "react";
import { Navbar } from "../components";

const HeroSection = () => {
  return (
    <>
      <Navbar />
      <section className="text-white px-24 py-10">
        <div className="max-w-[590px]">
          <h1 className="text-6xl font-bold my-5">PDEU ACM STUDENT CHAPTER</h1>
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
