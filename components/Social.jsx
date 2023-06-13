import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Social = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-x-8 mb-4">
        <Link
          href="https://www.facebook.com/people/Radgnarack/100092649026430/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} />
        </Link>
        <Link
          href="https://www.linkedin.com/company/radgnarack/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Social;
