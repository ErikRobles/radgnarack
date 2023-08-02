"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useShoppingCart } from "use-shopping-cart";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const { cartCount } = useShoppingCart();

  const handleNav = () => {
    setNav(!nav);
    setDropdown(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdown(false);
    }
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

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-30 ease-in duration-300"
    >
      <div className="m-auto flex justify-between items-center p-4 text-white">
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
          <li className="p-4 relative" ref={dropdownRef}>
            <span
              onClick={() => setDropdown(!dropdown)}
              className="cursor-pointer"
            >
              Contact
            </span>
            <ul
              className={
                dropdown
                  ? "absolute left-0 mt-2 bg-[#222] border border-gray-200 shadow-lg rounded-lg cursor-pointer"
                  : "hidden"
              }
            >
              <li className="p-2">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="p-2">
                <Link href="/support">Support</Link>
              </li>
              <li className="p-2">
                <Link href="/sales">Sales</Link>
              </li>
            </ul>
          </li>
          <li className="p-4">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="pt-[8px]">
            <Link href="/cart">
              <Button size="sm" variant="ghost">
                <ShoppingBag className="h-5 w-5" />
                <span className="ml-2 text-sm font-bold">{cartCount}</span>
                <span className="sr-only">Cart</span>
              </Button>
            </Link>
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
            <li className="p-4">
              <Link href="/cart">
                <Button size="sm" variant="ghost">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="ml-2 text-sm font-bold">0</span>
                  <span className="sr-only">Cart</span>
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
