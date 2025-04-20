"use client"

import Image from "next/image";

const proceduresData = [
  {
    imageSrc: "/images/angioplasty.png",
    label: "Angioplasty"
  },
  {
    imageSrc: "/images/TKR.png",
    label: "Knee Replacement"
  },
  {
    imageSrc: "/images/IVF.png",
    label: "IVF"
  },
  {
    imageSrc: "/images/pacemaker-icon.png",
    label: "Pacemaker"
  },
  {
    imageSrc: "/images/arthroscopy.png",
    label: "Arthroscopy"
  },
  {
    imageSrc: "/images/hysterectomy.png",
    label: "Hysterectomy"
  }
];

export default function ProceduresSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Procedures</h2>
          <div className="flex space-x-2">
            <button className="h-10 w-10 bg-gray-100 rounded-full shadow flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="h-10 w-10 bg-gray-100 rounded-full shadow flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {proceduresData.map((procedure, index) => (
            <div key={index} className="flex flex-col items-center bg-blue-50 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300">
              <div className="w-10 h-10 mb-4 group-hover:scale-105 transition duration-300">
                <Image
                  src={procedure.imageSrc}
                  alt={procedure.label}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="text-gray-800 font-medium text-center">{procedure.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 