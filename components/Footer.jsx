import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black p-12">
      <div className="flex items-center justify-center text-center text-white">
        <span className="font-bold">Radgnarack </span>&nbsp; &copy; {year} All
        Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
