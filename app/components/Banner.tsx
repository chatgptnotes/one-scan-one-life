"use client"

import Image from "next/image"

const Banner = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px]">
      {/* Banner Image */}
      <Image 
        src="/images/doctor and patient.png"
        alt="Doctor consulting with patient"
        fill
        className="object-cover"
        priority
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/60 to-cyan-700/50"></div>
      
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Expert Healthcare at Your Fingertips
        </h1>
        <p className="text-sm md:text-base text-white mb-6">
          One scan connects you with the best doctors and medical facilities for your needs.
        </p>
        <button className="bg-gradient-to-r from-red-500 to-red-600 text-white py-3 px-6 rounded-full 
          shadow-lg flex items-center w-fit hover:shadow-xl transition duration-300">
          Get Started Now
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Banner 