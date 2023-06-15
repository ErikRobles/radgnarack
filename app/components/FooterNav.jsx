"use client"
import React from 'react';
import Link from 'next/link';

const FooterNav = () => {
  return (
    <nav>
        <ul className="text-white flex flex-row justify-center uppercase">
            <li className="p-4 hover:text-gray-500">
                <Link href="/">
                  Home
                </Link>
            </li>
            <li className="p-4 hover:text-gray-500">
                <Link href="/about">
                  About
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default FooterNav