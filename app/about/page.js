"use client";
import React from "react";
import HeroTwo from "../components/HeroTwo";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <div>
      <HeroTwo heading="About Radgnarack" />
      <div className="min-h-[50vh] p-6 custom-container">
        <div className="flex flex-col justify-center gap-y-7">
          <h1 className="text-2xl mb-3 uppercase">About Us</h1>
          <p className="text-lg">
          Rad Gnar Products was born out of a shared vision of Don Serra and Tyson Creager.  Founded in 2022 by this duo of passionate entrepreneurs who aimed to revolutionize the way cyclists transport their electric bikes and other adventure equipment.
          </p>
          <p className="text-lg">
          At Rad Gnar Products, we are committed to providing the highest quality adventure racks. Our goal is to make it easy and convenient for people to transport their equipment wherever they want to go. Whether you&apos;re a seasoned outdoor enthusiast or just getting started, we believe that Rad Gnar Products has the power to transform the way you begin your next adventure.
          </p>
          <button
            className="px-8 py-2 font-bold uppercase bg-[#FFC000] text-[#333333] hover:bg-[#8d6a02] hover:text-white shadow-xl rounded-md w-full mt-5 mb-7"
            onClick={() => router.push("/sales")}
          >
            Place your order
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;