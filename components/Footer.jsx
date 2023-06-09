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
        <h4><span>Radgnarack </span>&copy; {year} All Rights Reserved.</h4>
      </div>
    </div>
  );
};

export default Footer;
