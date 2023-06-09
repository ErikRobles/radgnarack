import React from 'react';
import Link from 'next/link';

const FooterNav = () => {
  return (
    <nav>
        <ul className="text-white flex flex-row justify-center">
            <li className="p-4 hover:text-gray-500">
                <Link href="/">
                  <a>Home</a>
                </Link>
            </li>
            <li className="p-4 hover:text-gray-500">
                <Link href="/about">
                  <a>About</a>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default FooterNav