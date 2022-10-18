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
        <div className=" w-full flex items-center flex-col justify-center md:max-w-[590px] 2xl:mx-14 text-center lg:text-left my-10">
          <h1 className=" text-4xl md:text-5xl font-bold my-5">
            PDEU ACM STUDENT CHAPTER
          </h1>
          <p className="my-5 lg:mr-10">
            ACM brings together computing educators, researchers, and
            professionals to inspire dialogue, share resources, and address the
            field's challenges. As the world’s largest computing society, ACM
            strengthens the profession's collective voice through strong
            leadership, promotion of the highest standards, and recognition of
            technical excellence.
          </p>
          <a href="#contact">
            <button className="bg-blue-500 hover:bg-blue-700 mt-5 p-3 rounded-lg ">
              Let's get in touch
            </button>
          </a>
        </div>

        <Image
          priority
          width={550}
          height={400}
          src={"https://www.pdpu.ac.in/infra/3.jpg"}
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
