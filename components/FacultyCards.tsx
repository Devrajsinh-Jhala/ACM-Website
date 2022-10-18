import Image from "next/image";
import React from "react";
interface Props {
  name: string;
  designation?: string;
  image: any;
}

const FacultyCards = ({ name, designation, image }: Props) => {
  return (
    <div className="text-center">
      <div className=" px-5 w-[170px] sm:w-[200px] h-fit py-5 bg-white text-black rounded-lg flex flex-col items-center justify-start">
        {/* <Image className="rounded-full " width={80} height={80} src={image} /> */}
        <img
          src={image}
          alt="Team Members"
          className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] rounded-full"
        />
        <p className="text-sm sm:text-base">{name}</p>
        <p className="text-xs ">{designation}</p>
      </div>
    </div>
  );
};

export default FacultyCards;
