"use client"

import Link from "next/link";
import Image from "next/image";

const hospitalData = [
  {
    name: "Hope Hospital",
    location: "Teka Naka, Kamptee Road, Nagpur",
    logo: "/images/hope.jpeg",
    reviews: 85,
    rating: 4.7,
    link: "/hospital/hope",
    featured: true
  },
  {
    name: "Ayushman Nagpur Hospital",
    location: "Ramdaspeth, Nagpur",
    logo: "/images/Ayushman.png",
    reviews: 92,
    rating: 4.8,
    link: "/"
  },
  {
    name: "Gandhi Hospital",
    location: "Ramdaspeth, Nagpur",
    logo: "/images/gandhi.png",
    reviews: 76,
    rating: 4.5,
    link: "/"
  }
];

export default function HospitalsSection() {
  return (
    <div className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-gray-900 mb-12">Top Hospitals</h2>
        
        {/* Featured Hospital Card */}
        <Link href="/hospital/hope" className="block mb-12">
          <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-8 flex flex-col items-center">
              <div className="w-64 h-auto mb-6">
                <div className="relative w-full h-24 flex flex-col items-center justify-center">
                  <div className="text-left" style={{ paddingLeft: "5px" }}>
                    <h2 className="text-red-700 text-[9px]">Dr. Murali's</h2>
                    <h1 className="text-4xl font-bold text-blue-700">HOPE<span className="text-gray-700">HOSPITAL</span></h1>
                    <p className="text-sm text-gray-500 mt-1">Assured | Committed | Proficient</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Hope Hospital</h3>
              <p className="text-xl text-gray-600 mb-6 text-center">Teka Naka, Kamptee Road, Nagpur</p>
              
              <p className="text-xl font-semibold text-gray-700 mb-4 text-center">85 Reviews</p>
              
              <div className="flex items-center justify-center mb-2">
                <span className="text-green-600 text-2xl font-bold mr-2">★</span>
                <span className="text-2xl font-bold text-green-600">4.7/5 Rating</span>
              </div>
            </div>
          </div>
        </Link>
        
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Other Hospitals</h3>
          <div className="flex space-x-2">
            <button className="h-10 w-10 bg-white rounded-full shadow flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="h-10 w-10 bg-white rounded-full shadow flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hospitalData.filter(hospital => !hospital.featured).map((hospital, index) => (
            <Link href={hospital.link} key={index}>
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-8 flex flex-col items-center">
                  <div className="h-16 w-full flex items-center justify-center mb-6">
                    <img 
                      src={hospital.logo} 
                      alt={hospital.name} 
                      className="max-h-full"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-center text-gray-900 mb-1">{hospital.name}</h3>
                  <p className="text-gray-600 text-center mb-4">{hospital.location}</p>
                  <p className="text-gray-700 text-center mb-2">{hospital.reviews} Reviews</p>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-green-600 font-medium ml-1">{hospital.rating}/5 Rating</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-cyan-600"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 