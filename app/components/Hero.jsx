"use client";
import Image from "next/image";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <div className="relative flex flex-col items-center justify-evenly h-screen bg-fixed bg-center bg-cover custom-img text-center">
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      {/* <div className="flex flex-col items-center justify-between "> */}
        <div className="text-white z-20 ">
          <Image
            src="/images/logo2.webp"
            width={500}
            height={500}
            alt="Radgnarack"
            priority={true}
          
          />
        </div>
        <div className="text-white z-10">
          <p className="text-xl md:text-2xl">
            Racks that make your life easier through mechanics and metal
          </p>
          <p className="py-5">
            <span className="uppercase font-bold text-lg md:text-2xl">
              Radgnarack Electric Bike Rack
            </span>
          </p>
        </div>
        <div className="text-white z-10">
          <button
            className="px-8 py-2 mt-8 font-bold border border-[#000000] uppercase bg-[#FFC000] text-[#333333] hover:bg-[#8d6a02] hover:text-white shadow-xl rounded-md"
            onClick={() => router.push("/sales")}
          >
            Get yours now
          </button>
        </div>
      {/* </div> */}
      
    </div>
  );
};

export default Hero;
