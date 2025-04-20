"use client"

import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <main className="bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-cyan-800 py-24">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-cyan-800"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">About One Scan One Life</h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              A joint venture of Betser and Raftaar, revolutionizing healthcare with trust and technology.
            </p>
          </div>
        </div>
      </div>
      
      {/* About Us Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-gray-700 mb-6">
              One Scan One Life is a joint venture between Betser and Raftaar, combining their expertise to create a human-first, tech-enabled healthcare platform committed to making healthcare personal, trusted, and easily accessible.
            </p>
            <p className="text-gray-700 mb-6">
              Designed especially for patients navigating complex decisions and families caring from afar, we provide personalized support and expert guidance every step of the way.
            </p>
            <div className="rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 p-6 border border-cyan-100">
              <h3 className="text-xl font-semibold text-cyan-800 mb-3">Our Platform Connects You With:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>250+ top specialists across 40+ medical fields</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>A trusted network of JCI, NABH, and NABL-accredited hospitals, labs, and clinics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Verified pharmacies, homecare, and wellness services</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Advanced health technologies like Digital Twin and Digital Nurse</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/about.jpeg"
              alt="Healthcare professionals working together"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Joint Venture Partners */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Joint Venture Partners</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Betser */}
            <div className="bg-white rounded-xl shadow p-8 border border-gray-100">
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-3xl font-bold px-6 py-3 rounded-lg mb-4">
                  BETSER
                </div>
                <div className="w-48 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/betser logo.png" 
                    alt="Betser Logo" 
                    width={192}
                    height={96}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                At its core, Betser bridges the gap between trust and technology, making healthcare more informed, less overwhelming, and truly human. Betser continuously innovates to offer real-time solutions that simplify healthcare decisions, ensuring patients receive timely care and support when they need it most.
              </p>
              
              {/* Team Members in a single line */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {/* Biji Thomas */}
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-blue-100">
                    <Image 
                      src="/images/biji thomas.png" 
                      alt="BIJI THOMAS" 
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900">BIJI THOMAS</h4>
                  <p className="text-sm text-gray-600">CO-FOUNDER & CEO</p>
                  <a href="https://www.linkedin.com/in/bijitharakanthomas/" className="text-blue-500 hover:text-blue-700 text-xs mt-1 inline-block">
                    <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
                
                {/* Jean John */}
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-blue-100">
                    <Image 
                      src="/images/jean john.png" 
                      alt="JEAN JOHN" 
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900">JEAN JOHN</h4>
                  <p className="text-sm text-gray-600">CO-FOUNDER & COO</p>
                  <a href="https://www.linkedin.com/in/jean-john-co-founder-betser-life/" className="text-blue-500 hover:text-blue-700 text-xs mt-1 inline-block">
                    <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
                
                {/* Liju Mathew */}
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-blue-100">
                    <Image 
                      src="/images/liju.png" 
                      alt="LIJU MATHEW" 
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900">LIJU MATHEW</h4>
                  <p className="text-sm text-gray-600">CHIEF STRATEGY OFFICER</p>
                  <a href="https://www.linkedin.com/in/liju-mathew/" className="text-blue-500 hover:text-blue-700 text-xs mt-1 inline-block">
                    <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            {/* Raftaar */}
            <div className="bg-white rounded-xl shadow p-8 border border-gray-100">
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 text-white text-3xl font-bold px-6 py-3 rounded-lg mb-4">
                  RAFTAAR
                </div>
                <div className="w-32 h-16 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/Raftaar.png" 
                    alt="Raftaar Logo" 
                    width={134}
                    height={67}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Raftaar is dedicated to providing exceptional healthcare services with a focus on specialized medical care, including orthopedics, general surgery, and emergency services.
              </p>
              <p className="text-gray-700 mb-6">
                With a network of top-tier hospitals and specialists, Raftaar ensures patients receive the highest quality care with a patient-centric approach.
              </p>
              
              {/* Team Members in a single line */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-cyan-100">
                    <Image 
                      src="/images/dr-murali.jpeg" 
                      alt="Dr. Murali B.K." 
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900">Dr. Murali B.K.</h4>
                  <p className="text-sm text-gray-600">Orthopaedic Surgeon</p>
                  <a href="https://www.linkedin.com/in/murali-balasundaram/" className="text-blue-500 hover:text-blue-700 text-xs mt-1 inline-block">
                    <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-cyan-100">
                    <Image 
                      src="/images/Akshay.png" 
                      alt="Dr. Akshay Anil Akulwar" 
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900">Dr. Akshay Anil Akulwar</h4>
                  <p className="text-sm text-gray-600">Colon and Rectal Surgeon</p>
                  <a href="https://www.linkedin.com/in/dr-akshay-akulwar/" className="text-blue-500 hover:text-blue-700 text-xs mt-1 inline-block">
                    <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
                
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-cyan-100">
                    <Image 
                      src="/images/ishita.png" 
                      alt="ISHITA MURALI" 
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900">ISHITA MURALI</h4>
                  <p className="text-sm text-gray-600">TECHNOLOGY CONSULTANT</p>
                  <a href="https://www.linkedin.com/in/ishita-murali/" className="text-blue-500 hover:text-blue-700 text-xs mt-1 inline-block">
                    <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Medical Advisory Board */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Medical Advisory Board</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our distinguished Medical Advisory Board consists of internationally recognized healthcare experts who guide our clinical and service quality standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Dr. G.S. Kailash",
                credentials: "MD, DTCD",
                specialty: "Specialist in Asthma Care & Obstructive Airway Disorders",
                location: "Chennai, Tamil Nadu",
                linkedin: "https://www.linkedin.com/in/dr-gs-kailash/"
              },
              {
                name: "Dr. Sweta Prakash Adatia",
                credentials: "MBBS, MD, DNB, FACP, Cambridge MBA",
                specialty: "Specialist Neurologist, Head of Neurology",
                location: "Gargash Hospital, UAE",
                linkedin: "https://www.linkedin.com/in/dr-sweta-adatia/"
              },
              {
                name: "Dr. Bobby Jose",
                credentials: "MBBS, DNB",
                specialty: "Interventional Neuroradiology & Neurosurgeon",
                location: "Dubai, UAE",
                linkedin: "https://www.linkedin.com/in/dr-bobby-jose/"
              },
              {
                name: "Dr. Murali B. K.",
                credentials: "MBBS, MS",
                specialty: "Orthopedic Surgery",
                location: "Chairman & MD of Ayushman Nagpur Hospital and Hope Hospital",
                linkedin: "https://www.linkedin.com/in/murali-balasundaram/"
              },
              {
                name: "Dr. Philip Mathew",
                credentials: "MD",
                specialty: "Internal Medicine",
                location: "New York, USA",
                linkedin: "https://www.linkedin.com/in/dr-philip-mathew/"
              },
              {
                name: "Dr. Sanoop Kumar",
                credentials: "MBBS, MD, FCPM",
                specialty: "Renowned Physician",
                location: "",
                linkedin: "https://www.linkedin.com/in/dr-sanoop-kumar/"
              },
              {
                name: "Dr. Suresh Prabhakar",
                credentials: "B.Sc, MBBS, FRCS, Dip. Urology",
                specialty: "Director ICME",
                location: "Trivandrum, India",
                linkedin: "https://www.linkedin.com/in/dr-suresh-prabhakar/"
              },
              {
                name: "Dr. Preeti Nair",
                credentials: "MBBS, FRACP, FASLM",
                specialty: "Specialist Geriatrician, Rheumatologist and Lifestyle Physician",
                location: "Victoria, Australia",
                linkedin: "https://www.linkedin.com/in/dr-preeti-nair/"
              }
            ].map((advisor, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-lg p-6 hover:shadow-md transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  {advisor.name.split(' ')[1].charAt(0)}
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-1">{advisor.name}</h3>
                <p className="text-cyan-600 text-sm text-center mb-2">{advisor.credentials}</p>
                <p className="text-gray-700 text-sm text-center mb-1">{advisor.specialty}</p>
                {advisor.location && <p className="text-gray-500 text-xs text-center mb-2">{advisor.location}</p>}
                <div className="text-center mt-2">
                  <a href={advisor.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 text-xs inline-block">
                    <svg className="w-4 h-4 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Us in Revolutionizing Healthcare</h2>
            <p className="text-lg text-gray-700 mb-8">
              Experience the future of healthcare with One Scan One Life, where trust meets technology to create a seamless, patient-centered healthcare journey.
            </p>
            <Link 
              href="/"
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-3 px-6 rounded-full shadow hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1"
            >
              Get Started Today
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
