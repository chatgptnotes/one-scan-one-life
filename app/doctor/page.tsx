"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, ReactNode } from "react";

// FAQ Item Component with Dropdown Functionality
interface FAQItemProps {
  question: string;
  answer: string;
  children?: ReactNode;
}

const FAQItem = ({ question, answer, children }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-gray-100 rounded-lg shadow-sm mb-4 overflow-hidden transition-all hover:shadow-md">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <svg 
          className={`w-6 h-6 text-blue-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      
      {isOpen && (
        <div className="p-4 border-t border-gray-100 animate-fade-in">
          <p className="text-gray-700">{answer}</p>
          {children}
        </div>
      )}
    </div>
  );
};

export default function DoctorProfile() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Doctor Header Section */}
      <div className="bg-white p-6 mb-8 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-blue-600">Dr. Murali BK</h1>
              <svg className="w-6 h-6 text-blue-500 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <div className="flex flex-wrap mt-2 gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Orthopaedic Surgeon</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Joint Replacement</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Spine Specialist</span>
            </div>
            
            <p className="text-gray-600 mt-3">MBBS, MS Orthopaedics, Fellowship in Joint Replacement</p>
            
            <div className="flex items-center mt-6">
              <div className="mr-8">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-purple-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <span className="font-semibold ml-2">25+ Years</span>
                </div>
                <span className="text-gray-600 text-sm">Experience</span>
              </div>
              
              <div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 21l3-3m0 0l3 3m-3-3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold ml-2">98% Recommended</span>
                </div>
                <span className="text-gray-600 text-sm">(102 Ratings)</span>
              </div>
            </div>
            
            <div className="mt-4 inline-block bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
              <span>53 patients enquired about the doctor in last 1 hour</span>
            </div>
            
            <div className="mt-6">
              <p className="font-semibold">Available Timings <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium ml-2">1</span> <span className="text-blue-500 ml-2 font-normal cursor-pointer">View Location</span></p>
              <div className="bg-gray-50 rounded-lg p-3 mt-2 inline-block border border-gray-100">
                <p className="font-medium flex items-center">
                  <svg className="w-4 h-4 mr-2 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Mon - Sat  10:00 AM - 08:00 PM
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium py-3 px-6 rounded-md shadow hover:shadow-md flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Book Appointment
              </button>
              <a href="tel:+919876543210" className="bg-gradient-to-r from-green-500 to-green-600 text-white font-medium py-3 px-6 rounded-md shadow hover:shadow-md flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.17721C10.8854 8.64932 10.6883 9.16531 10.2415 9.38787L7.61465 10.8243C8.85629 13.3354 10.6646 15.1437 13.1757 16.3854L14.6121 13.7585C14.8347 13.3117 15.3507 13.1146 15.8228 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Call +91 9876543210
              </a>
              <button className="bg-white border border-cyan-500 text-cyan-600 font-medium py-3 px-6 rounded-md hover:bg-gray-50 flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8H17M7 12H11M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 8.0606 20.3364 6.5 19.1875L3 20L3.8125 16.5C2.6636 14.9394 2 13.0325 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11V12H21.0039Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                WhatsApp Expert
              </button>
            </div>
          </div>
          
          <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
            <div className="w-48 h-48 relative overflow-hidden rounded-lg shadow-lg transform transition-all hover:scale-105">
              <Image 
                src="/images/dr-murali.jpeg" 
                alt="Dr. Murali BK" 
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Link to go back to home */}
      <div className="mb-6">
        <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Home
        </Link>
      </div>
      
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="flex space-x-8 overflow-x-auto">
          <button className="border-b-2 border-blue-500 text-blue-600 py-4 px-1 font-medium whitespace-nowrap">Overview</button>
          <button className="text-gray-600 py-4 px-1 font-medium whitespace-nowrap transition-all hover:text-gray-900">Treatments</button>
          <button className="text-gray-600 py-4 px-1 font-medium whitespace-nowrap transition-all hover:text-gray-900">Hospitals</button>
          <button className="text-gray-600 py-4 px-1 font-medium whitespace-nowrap transition-all hover:text-gray-900">FAQs</button>
          <button className="text-gray-600 py-4 px-1 font-medium whitespace-nowrap transition-all hover:text-gray-900">Health Articles</button>
        </nav>
      </div>
      
      {/* Doctor Overview */}
      <div className="mb-10 bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-800 leading-relaxed">
          Dr. Murali BK is an Orthopaedic Surgeon associated with Hope Hospital and Ayushman Nagpur Hospital in Nagpur. He has 25 years of experience in Orthopaedics, Joint Replacement and Spine Surgery and has worked as an expert in different cities in India. Dr. Murali is known for his exceptional patient care and treatment success rates. He specializes in complex joint replacement surgeries, spine disorders, and sports injuries.
        </p>
        <p className="text-blue-500 mt-2 cursor-pointer font-medium hover:text-blue-700 transition-all">read more</p>
      </div>
      
      {/* Treatments Section */}
      <div className="mb-10 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Treatments & Procedures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-all">
            <div className="flex items-center">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="font-medium">Joint Replacement Surgery</h3>
            </div>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-all">
            <div className="flex items-center">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-medium">Spine Surgery</h3>
            </div>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-all">
            <div className="flex items-center">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="font-medium">Sports Injury Treatment</h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQs */}
      <div className="mb-10 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <FAQItem 
          question="What conditions does Dr. Murali BK treat?" 
          answer="Dr. Murali specializes in treating various orthopedic conditions including joint problems, spine disorders, sports injuries, arthritis, fractures, and degenerative bone diseases. He is particularly known for his expertise in joint replacement surgeries and spine treatments."
        />
        
        <FAQItem 
          question="What is the cost of consultation with Dr. Murali BK?" 
          answer="The consultation fee with Dr. Murali BK ranges from ₹800 to ₹1200, depending on the hospital and type of consultation (first visit or follow-up). For precise information, it's recommended to check with the hospital where you're planning to visit him."
        />
        
        <FAQItem 
          question="How can I book an appointment with Dr. Murali BK?" 
          answer="You can book an appointment with Dr. Murali BK through our website, by calling our customer care at 1800 233 0000, or by visiting the hospital directly. Our platform offers hassle-free booking with the option to choose your preferred date and time slot."
        />
      </div>
    </main>
  );
} 