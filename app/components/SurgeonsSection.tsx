"use client"

import Link from "next/link";

const surgeonData = [
  {
    name: "Dr. Murali BK",
    specialization: "Orthopaedic Surgeon, Joint Replacement, Spine Specialist",
    photo: "/images/dr-murali.jpeg",
    experience: "25+ Years Experience",
    recommendation: "98% Recommended",
    profileLink: "/doctor"
  },
  {
    name: "Dr. Akshay Anil Akulwar",
    specialization: "Colon and Rectal Surgeon, General Surgeon",
    photo: "/images/Akshay.png",
    experience: "13+ Years Experience",
    recommendation: "99% Recommended",
    profileLink: "/doctor/akshay"
  },
  {
    name: "Dr. Dhiraj Gupta",
    specialization: "Orthopaedic and Joint Replacement Surgeon",
    photo: "/images/Dhiraj.png",
    experience: "13 Years Experience",
    recommendation: "100% Recommended (22 Ratings)",
    profileLink: "/doctor/dhiraj"
  }
];

export default function SurgeonsSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Top Surgeons</h2>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {surgeonData.map((surgeon, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col items-center">
                <div className="h-32 w-32 rounded-full overflow-hidden mb-6 bg-white p-1">
                  <img 
                    src={surgeon.photo} 
                    alt={surgeon.name} 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium text-center text-gray-900 mb-2">{surgeon.name}</h3>
                <p className="text-gray-600 text-center text-sm mb-4 line-clamp-2">{surgeon.specialization}</p>
                <p className="text-gray-700 font-medium text-center mb-2">{surgeon.experience}</p>
                <div className="flex items-center text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{surgeon.recommendation}</span>
                </div>
                {surgeon.profileLink && (
                  <Link href={surgeon.profileLink} className="mt-4 text-cyan-600 hover:text-cyan-800 font-medium flex items-center">
                    View Profile
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
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