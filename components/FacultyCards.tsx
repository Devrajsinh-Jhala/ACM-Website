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
      <div className="w-[200px] h-fit py-5 bg-white text-black rounded-lg flex flex-col items-center justify-start">
        <Image className="rounded-full" width={80} height={80} src={image} />
        <p>{name}</p>
        <p className="text-sm">{designation}</p>
      </div>
    </div>
  );
};

export default FacultyCards;
