import React from "react";
interface Props {
  name: string;
  designation: string;
}

const FacultyCards = ({ name, designation }: Props) => {
  return (
    <div className="w-[200px] h-fit py-5 bg-white text-black rounded-lg flex flex-col items-center justify-start">
      <p>{name}</p>
      <p className="text-sm">{designation}</p>
    </div>
  );
};

export default FacultyCards;
