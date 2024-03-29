"use client"
import React from 'react'

const HeroComingSoon = () => {
  return (
        <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img text-center">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
            <div className="p-5 text-white z-[2]">
        {/*<h2 className="text-5xl font-bold">Heading</h2>*/}
            <p className="py-6 text-6xl uppercase">Coming Soon!</p>
            </div>
        </div>
  )
}

export default HeroComingSoon