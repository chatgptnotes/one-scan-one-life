"use client"

import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Banner image background */}
      <div className="absolute inset-0 w-full h-full">
        <Image 
          src="/images/doctor and patient.png"
          alt="Doctor consulting with patient"
          fill
          priority
          unoptimized={true}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 via-cyan-800/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-10 lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Expert Healthcare at Your Fingertips
              </h1>
              <p className="mt-3 text-lg text-white sm:mt-5 sm:text-xl max-w-xl">
                One scan connects you with the best doctors and medical facilities for your needs
              </p>
              
              <div className="mt-8">
                <button 
                  className="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center"
                >
                  <span>Get Started Now</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="mt-10 sm:mx-auto sm:max-w-2xl lg:mx-0">
                <div className="bg-white p-3 rounded-xl shadow-lg flex">
                  <div className="w-1/5">
                    <div className="relative inline-block w-full">
                      <select 
                        className="block appearance-none w-full bg-white border border-gray-200 p-3 pr-8 rounded-l-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option>Delhi</option>
                        <option>Mumbai</option>
                        <option>Bangalore</option>
                        <option>Chennai</option>
                        <option>Nagpur</option>
                        <option>Chhindwara</option>
                        <option>Seoni</option>
                        <option>Betul</option>
                        <option>Satna</option>
                        <option>Rewa</option>
                        <option>Sagar</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-4/5">
                    <div className="flex w-full">
                      <input
                        type="text"
                        placeholder="Search Condition, Treatment, Doctor or Hospital"
                        className="flex-grow border border-gray-200 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 min-w-[400px]"
                      />
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-5 rounded-r-lg hover:shadow-lg flex items-center justify-center transition-all duration-300"
                      >
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* One Scan One Life section with tagline (no image placeholder) */}
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                <span className="text-gray-900">One Scan</span>
                <span className="text-cyan-600"> One Life</span>
              </h2>
              <p className="text-gray-700 mt-1">Point, Scan, Connect to Care. We help you find the right doctor.</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#services" className="text-cyan-600 font-medium hover:text-cyan-700">
                Our Services
              </a>
              <a href="#doctors" className="text-cyan-600 font-medium hover:text-cyan-700">
                Find Doctors
              </a>
              <a href="#hospitals" className="text-cyan-600 font-medium hover:text-cyan-700">
                Hospitals
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 