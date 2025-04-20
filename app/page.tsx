"use client"

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CardsSection from './components/CardsSection'
import ServicesSection from './components/ServicesSection'
import ConditionsSection from './components/ConditionsSection'
import ProceduresSection from './components/ProceduresSection'
import StatsSection from './components/StatsSection'
import HospitalsSection from './components/HospitalsSection'
import SurgeonsSection from './components/SurgeonsSection'
import AnohraSection from './components/AnohraSection'
import EnterpriseServicesSection from './components/EnterpriseServicesSection'
import HospitalServicesSection from './components/HospitalServicesSection'
import Footer from './components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <CardsSection />
      <ServicesSection />
      <ConditionsSection />
      <ProceduresSection />
      <StatsSection />
      <HospitalsSection />
      <SurgeonsSection />
      <AnohraSection />
      <div className="bg-white py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Looking for a specific doctor?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Check out one of our top doctors or browse our full directory of specialists.
          </p>
          <Link href="/doctor" className="bg-cyan-600 text-white font-medium py-3 px-8 rounded-lg hover:bg-cyan-700 inline-flex items-center">
            <span>View Dr. Murali's Profile</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Why One Scan, One Life? Section */}
      <div className="bg-gradient-to-b from-blue-50 to-cyan-50 py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-200 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 -left-24 w-64 h-64 bg-blue-300 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-indigo-200 opacity-20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="bg-cyan-100 text-cyan-800 text-sm font-medium px-4 py-1.5 rounded-full inline-block mb-4">Emergency Medical Service</span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Why "One Scan, One Life"?</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              At Raftaar Emergency Seva, we know that in emergencies, every second counts. That's why we've created "One Scan, One Life" — a fast and effective way to ensure immediate medical help when you need it most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 backdrop-blur-sm bg-opacity-80">
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  When you're in need of urgent medical assistance, all you need to do is scan your personalized QR code. The scan instantly triggers a callback from our team, ensuring you get the help you need right away. Additionally, the QR code captures your location, allowing emergency services to be dispatched directly to you, reducing response time to under <span className="font-semibold text-cyan-700">10 minutes</span>.
                </p>
                <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                  This simple action can save lives. By connecting you directly with emergency services, "One Scan, One Life" ensures a quick and efficient response in your time of need.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 w-10 h-1 rounded-full inline-block mr-3"></span>
                  How It Works
                </h3>
                
                <div className="space-y-8">
                  <a href="https://bachaobachao.in" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-start transform transition-all duration-300 hover:translate-x-2 hover:bg-blue-50 p-3 rounded-lg cursor-pointer">
                      <div className="flex-shrink-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-4 shadow-lg text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                        </svg>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Scan the QR Code</h4>
                        <p className="text-gray-600 leading-relaxed">When you need urgent medical assistance, simply scan your personalized QR code with any smartphone camera.</p>
                      </div>
                    </div>
                  </a>
                  
                  <a href="https://bachaobachao.in" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-start transform transition-all duration-300 hover:translate-x-2 hover:bg-blue-50 p-3 rounded-lg cursor-pointer">
                      <div className="flex-shrink-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-4 shadow-lg text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Instant Callback</h4>
                        <p className="text-gray-600 leading-relaxed">Within seconds, our emergency response team will call you back to verify your situation and needs.</p>
                      </div>
                    </div>
                  </a>
                  
                  <a href="https://bachaobachao.in" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="flex items-start transform transition-all duration-300 hover:translate-x-2 hover:bg-blue-50 p-3 rounded-lg cursor-pointer">
                      <div className="flex-shrink-0 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-4 shadow-lg text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="ml-6">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">Get Help Fast</h4>
                        <p className="text-gray-600 leading-relaxed">An ambulance with medical professionals will be dispatched immediately to your precise location, cutting response time dramatically.</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-10 rounded-bl-full"></div>
                
                <div className="p-8 md:p-10">
                  <div className="flex justify-center mb-8">
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-600 opacity-10 rounded-2xl transform rotate-6"></div>
                      <div className="absolute inset-0 bg-white rounded-2xl shadow-inner p-4 flex items-center justify-center transform -rotate-3">
                        <div className="w-full h-full border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center p-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-cyan-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Generate Your Unique QR Code</h3>
                  <p className="text-gray-600 text-center mb-8">
                    Be prepared for any medical emergency with your personal emergency QR code. It takes just seconds to set up but could save your life.
                  </p>
                  
                  <div className="bg-gray-50 rounded-xl p-6 mb-8">
                    <div className="flex items-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-gray-700 font-medium">Secured personal information</span>
                    </div>
                    <div className="flex items-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-700 font-medium">Precise location tracking</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700 font-medium">Response time under 10 minutes</span>
                    </div>
                  </div>
                  
                  <a href="https://bachaobachao.in" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-4 px-8 rounded-xl hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Generate QR Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enterprise Services Section */}
      <EnterpriseServicesSection />
      
      {/* Hospital Services Section */}
      <HospitalServicesSection />
      
      <Footer />
      </main>
  )
}
