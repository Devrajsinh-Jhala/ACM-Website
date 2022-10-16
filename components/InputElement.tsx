import React, { useState } from "react";

interface Props {
  title: string;
  placeholder: string;
}

const InputElement = ({ title, placeholder }: Props) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <p className="font-inter font-semibold text-white text-[13px] mb-2 ">
        {title}
      </p>
      <input
        className=" w-full sm:w-[250px] leading-[1.3rem] tracking-[-0.015em] font-inter pl-[15px] border border-gray-400 rounded-lg text-[14px] text-black focus:outline-none  py-[13px] h-[43px] "
        type="text"
        name={`${title}`}
        placeholder={`${placeholder}`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default InputElement;
