import React from "react";
import HeroTwo from "../components/HeroTwo";
import { useRouter } from "next/router";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <HeroTwo heading="About Radgnarack" />
      <div className="min-h-[50vh] p-6 custom-container">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-3 font-bold">About Us</h1>
          <p className="text-lg">
            Radgnarack was founded by Utah e-bike enthusiast Don Serra who
            created the patent pending pedal lock rack that holds your bike
            making it more secure and as well as easy to mount. The racks are
            handmade here in Salt Lake City so please order your rack now here!
          </p>
          <button
            className="px-8 py-2 font-bold uppercase bg-[#FFC000] text-[#333333] hover:bg-[#8d6a02] hover:text-white shadow-xl rounded-md w-full mt-5"
            onClick={() => router.push("/contact")}
          >
            Place your order
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
