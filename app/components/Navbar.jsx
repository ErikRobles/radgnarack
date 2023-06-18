"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#000000");
        setTextColor("#ffffff");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <Image
            src="/images/logo-nav.webp"
            width={150}
            height={80}
            alt="Radgnarack logo"
          />
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex uppercase font-bold"
        >
          <li className="p-4">
            <Link href="/#racks">Racks</Link>
          </li>
          <li className="p-4">
            <Link href="/dealers">Dealers</Link>
          </li>
          <li className="p-4">
            <Link href="/events">Events</Link>
          </li>
          <li className="p-4">
            <Link href="/support">Support</Link>
          </li>
          <li className="p-4">
            <Link href="/sales">Sales</Link>
          </li>
        </ul>
        {/* Mobile button */}
        <div
          onClick={handleNav}
          className="block sm:hidden z-10 cursor-pointer"
        >
          {nav ? (
            <AiOutlineClose size={25} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={25} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li className="p-4" onClick={() => setNav(!nav)}>
              <Link href="/#racks">Racks</Link>
            </li>
            <li className="p-4" onClick={() => setNav(!nav)}>
              <Link href="/dealers">Dealers</Link>
            </li>
            <li className="p-4" onClick={() => setNav(!nav)}>
              <Link href="/events">Events</Link>
            </li>
            <li className="p-4" onClick={() => setNav(!nav)}>
              <Link href="/support">Support</Link>
            </li>
            <li className="p-4" onClick={() => setNav(!nav)}>
              <Link href="/sales">Sales</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;