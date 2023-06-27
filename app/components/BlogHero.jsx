"use client"
import Image from "next/image";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-[30vh] mb-12 bg-fixed bg-[center_bottom_8rem] md:bg-bottom bg-cover custom-img-three text-center pt-[60px]">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 h-[30vh] bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2]">
        <h2 className="text-5xl font-bold">{heading}</h2>
          <p className="py-8 text-2xl max-w-lg">{message}</p>
      </div>
    </div>
  );
};

export default Hero;
