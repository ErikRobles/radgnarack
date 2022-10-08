import Image from "next/image";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-[60vh] mb-12 bg-fixed bg-center bg-cover custom-img-two text-center">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 h-[60vh] bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2]">
        <h2 className="text-5xl font-bold">{heading}</h2>

        <p className="py-5 text-xl">{message}</p>
      </div>
    </div>
  );
};

export default Hero;
