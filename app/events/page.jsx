import React from "react";
import Image from "next/image";
import Link from "next/link";

const events = () => {
  return (
    <div className="px-3 flex flex-col items-center justify-center gap-7 bg-[#222] text-white">
      <div className="spacer pt-[90px]"></div>

      <h1 className="text-2xl uppercase">Events</h1>
      <div>
        <Image
          src="/images/summer-event.png"
          width={500}
          height={500}
          alt="Summer Event"
        />
      </div>
      <Link
        href="https://outdoorretailer.com/"
        target="_blank"
        rel="noreferrer noopener"
        className="max-w-[500px] text-center px-8 py-2 font-bold uppercase bg-[#FFC000] text-[#333333] hover:bg-[#8d6a02] hover:text-white shadow-xl rounded-md w-full mt-5 mb-7"
      >
        Click Here to Find Out More!
      </Link>
    </div>
  );
};

export default events;
