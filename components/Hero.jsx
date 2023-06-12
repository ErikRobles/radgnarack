import Image from "next/image";
import React from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/router";

const Hero = ({ message }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img text-center">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2]">
        {/*<h2 className="text-5xl font-bold">Heading</h2>*/}
        <Image
          src="/images/logo2.webp"
          width={467}
          height={268}
          alt="Radgnarack"
          priority={true}
        />
        <p className="py-6 text-2xl">Racks that make your life easier through mechanics and metal<br /><span className="uppercase font-bold">Radgnarack Electric Bike Rack</span></p>
        <button
          className="px-8 py-2 mt-5 font-bold border border-[#000000] uppercase bg-[#FFC000] text-[#333333] hover:bg-[#8d6a02] hover:text-white shadow-xl rounded-md"
          onClick={() => router.push("/contact")}
        >
          Get yours now
        </button>
      </div>
    </div>
  );
};

export default Hero;
