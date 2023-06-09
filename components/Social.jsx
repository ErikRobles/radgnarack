import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'


const Social = () => {
  return (
    <div>
        <div className="flex flex-row justify-center items-center gap-x-8 mb-4">
            <Link href="https://www.facebook.com/people/Radgnarack/100092649026430/">
                <a target="_blank">
                    <FaFacebook size={30} />
                </a>
            </Link>
            <Link href="https://www.linkedin.com/company/radgnarack/">
                <a target="_blank">
                    <FaLinkedin size={30} />
                </a>
            </Link>
        </div>
    </div>
  )
}

export default Social