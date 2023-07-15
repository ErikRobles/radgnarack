"use client"
import React from "react";
import FooterNav from "./FooterNav";
import Social from "./Social";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black pt-8 pb-12">
      <div className="flex flex-col items-center justify-center text-center text-white">
        
        <FooterNav />
        <Social />
        <h4><span>Radgnarack </span>&copy; {year} <br /> All Rights Reserved.</h4>
        <h4>Site Powered by <a href="https://algovisoftware.com/"  className="font-bold text-lg hover:text-xl transition-all" target="_blank" rel="noopener noreferrer"><span>Algovi Software</span></a></h4>
      </div>
    </div>
  );
};

export default Footer;
