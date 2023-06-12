import React from 'react'
import Image from 'next/image'

const events = () => {
  return (
    <div className="px-3 flex flex-col items-center justify-center gap-7  h-screen bg-black text-white">
        <h1 className="text-2xl uppercase">Events</h1>
        <div>
        <Image 
            src="/images/summer-event.png"
            width={500}
            height={500}
            alt="Summer Event"
        />
        </div>
    </div>
  )
}

export default events