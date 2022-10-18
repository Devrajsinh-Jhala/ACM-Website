import React from "react";

const AboutUs = () => {
  return (
    <div
      id="about"
      className="text-white flex flex-col items-center justify-center  text-center py-10 px-10 lg:px-24 bg-black"
    >
      <h1 className="text-3xl cursor-pointer">About-Us</h1>

      <p className="py-5 2xl:max-w-[1120px]">
        ACM, Association of Computing Machinery is world's largest and oldest
        computer society that has been promoting education and scientific
        advancement in the field of computation. It has renowned global presence
        pertaining to its activity inclusive of seminars, workshops, programming
        contests, conferences, student research symposiums, summer schools and
        many more.
      </p>

      <p className="py-5 2xl:max-w-[1120px]">
        Its impact can be assessed from the publications from top computer
        scientists it has in its journal that has over the years revolutionized
        the computer science industry. To help students advance in the field of
        computer science and engineering, student chapters are developed in
        universities, a part of which is PDEU ACM Student Chapter
      </p>
    </div>
  );
};

export default AboutUs;
