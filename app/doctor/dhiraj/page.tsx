"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, ReactNode, useEffect } from "react";

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

// Zoom Modal Component
interface ZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  meetingId: string;
  meetingPassword: string;
}

const ZoomModal = ({ isOpen, onClose, meetingId, meetingPassword }: ZoomModalProps) => {
  useEffect(() => {
    // Handle escape key to close modal
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-full max-w-4xl h-full max-h-[80vh] bg-white rounded-lg shadow-xl p-4">
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 z-10"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <h2 className="text-xl font-bold mb-4">Video Consultation with Dr. Dhiraj Gupta</h2>
        
        <div className="relative w-full h-[calc(100%-3rem)]">
          <iframe
            src={`https://zoom.us/j/${meetingId}?pwd=${meetingPassword}`}
            allow="microphone; camera; fullscreen"
            className="w-full h-full rounded-md border border-gray-300"
          ></iframe>
          
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-gray-500 text-sm mb-2">If the meeting doesn't load automatically, click below to join:</p>
            <a 
              href={`https://zoom.us/j/${meetingId}?pwd=${meetingPassword}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Join Zoom Meeting
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function DoctorProfile() {
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const meetingId = "9373111709";
  const meetingPassword = "9373111709";
  
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Doctor Header Section */}
      <div className="bg-white p-6 mb-8 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold text-blue-600">Dr. Dhiraj Gupta</h1>
              <svg className="w-6 h-6 text-blue-500 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            
            <div className="flex flex-wrap mt-2 gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Orthopaedic Surgeon</span>
              <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Joint Replacement Surgeon</span>
            </div>
            
            <p className="text-gray-600 mt-3">FRCS, MRCS, DNB, MBBS</p>
            
            <div className="flex items-center mt-6">
              <div className="mr-8">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-purple-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                  </svg>
                  <span className="font-semibold ml-2">13 Years</span>
                </div>
                <span className="text-gray-600 text-sm">Experience</span>
              </div>
              
              <div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 21l3-3m0 0l3 3m-3-3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold ml-2">5.0/5 Rating</span>
                </div>
                <span className="text-gray-600 text-sm">(22 Ratings)</span>
              </div>
            </div>
            
            <div className="mt-4 inline-block bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
              <span>Currently works at Ayushman Nagpur Hospital, Nagpur</span>
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
              <button className="bg-white border border-cyan-500 text-cyan-600 font-medium py-3 px-6 rounded-md hover:bg-gray-50 flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 8H17M7 12H11M21.0039 12C21.0039 16.9706 16.9745 21 12.0039 21C9.9675 21 8.0606 20.3364 6.5 19.1875L3 20L3.8125 16.5C2.6636 14.9394 2 13.0325 2 11C2 6.02944 6.02944 2 11 2C15.9706 2 20 6.02944 20 11V12H21.0039Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                WhatsApp Expert
              </button>
              <a href="tel:+919876543214" className="bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium py-3 px-6 rounded-md shadow hover:shadow-md flex items-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Call +91 9876543214
              </a>
              
              {/* Direct Zoom Meeting Link */}
              <a 
                href="https://zoom.us/j/9373111709?pwd=9373111709"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-blue-800 transition-colors flex items-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                  <path d="M15.2 14.6667V19C15.2 19.5523 14.7523 20 14.2 20H5C4.44772 20 4 19.5523 4 19V9.8C4 9.24772 4.44772 8.8 5 8.8H9.33333" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M11.4 15.6667L19.7333 7.33333" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M14.2 7.33333H19.7333V12.8667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                MEET DR. DHIRAJ VIA ZOOM
              </a>
            </div>
          </div>
          
          <div className="md:w-1/3 mt-6 md:mt-0 flex justify-center">
            <div className="w-48 h-48 relative overflow-hidden rounded-lg shadow-lg transform transition-all hover:scale-105">
              <Image 
                src="/images/Dhiraj.png" 
                alt="Dr. Dhiraj Gupta" 
                width={192}
                height={192}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Zoom Modal */}
      <ZoomModal 
        isOpen={isZoomModalOpen}
        onClose={() => setIsZoomModalOpen(false)}
        meetingId={meetingId}
        meetingPassword={meetingPassword}
      />
      
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
          Dr. Dhiraj Gupta is an Orthopaedic Surgeon Specializing in Hip and Knee Replacement and has 13 years of experience in the field. He had worked in prestigious institutes like Royal National Orthopaedic Hospital London and Royal London Hospital, London. Dr. Gupta had the honour of treating Olympic participants while working at Homerton University Hospital London which was the designated hospital for Olympic Athletes during The London Olympic games in 2012. His expertise is Hip & Knee Replacements, Knee, Fractures, Hand Surgery, Spine, Sports Injury, and Pediatric Orthopedics. Dr. Gupta has published scholarly papers in a variety of prominent medical journals.
        </p>
        <p className="text-blue-500 mt-2 cursor-pointer font-medium hover:text-blue-700 transition-all">read more</p>
      </div>
      
      {/* Specializations Section */}
      <div className="mb-10 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Specializations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-all">
            <div className="flex items-center">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="font-medium">Hip & Knee Replacements</h3>
            </div>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-all">
            <div className="flex items-center">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-medium">Fracture Management</h3>
            </div>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-all">
            <div className="flex items-center">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="font-medium">Hand Surgery</h3>
            </div>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-all">
            <div className="flex items-center">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
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
              <h3 className="font-medium">Sports Injury Management</h3>
            </div>
          </div>
          <div className="p-4 border border-gray-100 rounded-lg hover:shadow-md transition-all">
            <div className="flex items-center">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="font-medium">Pediatric Orthopedics</h3>
            </div>
          </div>
        </div>
      </div>
      
      {/* Professional Memberships Section */}
      <div className="mb-10 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Memberships</h2>
        <ul className="space-y-3">
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Indian Orthopaedic Association (IOA)</span>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Royal College of Surgeons, UK</span>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Nagpur Arthroscopy Society</span>
          </li>
          <li className="flex items-start">
            <svg className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>General Medical Council</span>
          </li>
        </ul>
      </div>
      
      {/* Previous Work Experience */}
      <div className="mb-10 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Work Experience</h2>
        <div className="space-y-4">
          <div className="flex flex-col">
            <span className="font-semibold">Consultant - Ayushman Nagpur Hospital, Nagpur</span>
            <span className="text-gray-600 text-sm">Present</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Royal National Orthopaedic Hospital, London</span>
            <span className="text-gray-600 text-sm">2010-2015</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Royal London Hospital, London</span>
            <span className="text-gray-600 text-sm">2008-2010</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Homerton University Hospital, London</span>
            <span className="text-gray-600 text-sm">Olympic Games 2012</span>
          </div>
        </div>
      </div>
      
      {/* FAQs */}
      <div className="mb-10 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        
        <FAQItem 
          question="What conditions does Dr. Dhiraj Gupta treat?" 
          answer="Dr. Dhiraj Gupta specializes in treating various orthopedic conditions including hip and knee problems, fractures, sports injuries, spine disorders, and pediatric orthopedic issues. He is known for his expertise in joint replacement surgeries, particularly hip and knee replacements."
        />
        
        <FAQItem 
          question="Where does Dr. Dhiraj Gupta practice?" 
          answer="Dr. Dhiraj Gupta currently practices at Ayushman Nagpur Hospital in Nagpur. He has previously worked at prestigious institutions including Royal National Orthopaedic Hospital London, Royal London Hospital, and Homerton University Hospital London."
        />
        
        <FAQItem 
          question="What are Dr. Dhiraj Gupta's qualifications?" 
          answer="Dr. Dhiraj Gupta holds several prestigious qualifications including FRCS (Fellowship of the Royal College of Surgeons), MRCS (Member of the Royal College of Surgeons), DNB (Diplomate of National Board), and MBBS. He has 13 years of experience in the field of orthopedics."
        />
        
        <FAQItem 
          question="How can I book an appointment with Dr. Dhiraj Gupta?" 
          answer="You can book an appointment with Dr. Dhiraj Gupta through our website, by calling our customer care at 1800 233 0000, or by visiting Ayushman Nagpur Hospital in Nagpur directly. Our platform offers hassle-free booking with the option to choose your preferred date and time slot."
        />
      </div>
    </main>
  );
} 