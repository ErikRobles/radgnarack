import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { useRouter } from "next/router";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const router = useRouter();

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto mb-9 min-h-[55vh]">
      <h1 className="text-2xl text-center p-4 uppercase">
        Radgnarack Electric Bike Racks
      </h1>
      <div className="relative flex justify-center p-4">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] ease-in duration-1000"
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={35}
              />
              {index === current && (
                <>
                  <Image
                    src={slide.image}
                    alt="/"
                    width="1440"
                    height="900"
                    objectFit="cover"
                    className="relative"
                  />
                  <div className="absolute bottom-[50px] left-[50%] ml-[-62px] ">
                    <button
                      className="px-3 py-1 font-bold border border-[#000000] uppercase bg-[#FFC000] text-[#333333] hover:bg-[#8d6a02] hover:text-white shadow-xl rounded-md"
                      onClick={() => router.push("/contact")}
                    >
                      ORDER NOW
                    </button>
                  </div>
                </>
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={35}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
