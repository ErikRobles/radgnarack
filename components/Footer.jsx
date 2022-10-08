import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-black p-12">
      <div className="flex  flex-col items-center justify-center text-center text-white">
        <h3>
          <span className="font-bold">Radgnarack </span>
        </h3>
        <h4>&copy; {year} All Rights Reserved.</h4>
      </div>
    </div>
  );
};

export default Footer;
