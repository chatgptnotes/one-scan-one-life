"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import CallbackForm from "./CallbackForm"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [showCallbackTooltip, setShowCallbackTooltip] = useState(false)
  const [showCallbackModal, setShowCallbackModal] = useState(false)
  
  const toggleDropdown = (dropdown: string) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }
  
  const departmentsList = [
    "Cardiology",
    "ENT",
    "Neurosurgery",
    "Urology",
    "Gynaecology",
    "Orthopaedic",
    "Ophthalmology",
    "Plastic Surgery",
    "Gastroenterology",
    "Nephrology",
    "Surgical Oncology",
    "General Surgery"
  ]
  
  const treatmentsList = [
    "Weight Loss Surgery",
    "Proctology",
    "Laparoscopy",
    "Gynaecology",
    "Cardiology",
    "Orthopedics",
    "Urology",
    "Aesthetics/Plastic Surgery",
    "ENT",
    "Ophthalmology/Eye",
    "Neurosurgery",
    "Transplants"
  ]
  
  const conditionsList = [
    "Hernia",
    "Piles",
    "Gallstone",
    "Gynaecomastia",
    "Varicose Vein",
    "Kidney Stone",
    "Appendicitis",
    "Cataract",
    "Knee Pain",
    "Back Pain",
    "PCOD/PCOS",
    "Thyroid"
  ]
  
  return (
    <>
      <header className="bg-white shadow-sm relative">
        {/* Single line header */}
        <div className="bg-white py-2 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center">
                  <div className="w-10 h-10 relative mr-2">
                    <div className="absolute inset-0 bg-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">O</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-cyan-500 font-bold text-xl">One Scan</span>
                    <span className="text-gray-800 font-bold text-xl">One Life</span>
                  </div>
                </Link>
              </div>
              
              {/* Navigation and Buttons - all in one line */}
              <div className="flex items-center space-x-4">
                {/* Navigation */}
                <div className="hidden md:flex md:space-x-8 mr-6">
                  <div className="relative group">
                    <button 
                      onClick={() => toggleDropdown('departments')}
                      className="px-3 py-2 text-gray-700 hover:text-cyan-500 font-medium flex items-center"
                    >
                      Departments
                      <svg className={`ml-1 h-5 w-5 transition-transform ${activeDropdown === 'departments' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    {activeDropdown === 'departments' && (
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                        {departmentsList.map((dept, idx) => (
                          <Link 
                            key={idx} 
                            href={dept.toLowerCase() === 'cardiology' ? '/departments/cardiology' : '#'} 
                            className="block px-4 py-3 text-lg text-gray-800 hover:bg-gray-50 hover:text-cyan-600"
                          >
                            {dept}
                            {dept.toLowerCase() === 'cardiology' && (
                              <span className="float-right text-sm bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">New</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="relative group">
                    <button 
                      onClick={() => toggleDropdown('conditions')}
                      className="px-3 py-2 text-gray-700 hover:text-cyan-500 font-medium flex items-center"
                    >
                      Conditions
                      <svg className={`ml-1 h-5 w-5 transition-transform ${activeDropdown === 'conditions' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    {activeDropdown === 'conditions' && (
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                        {conditionsList.map((condition, idx) => (
                          <a key={idx} href="#" className="block px-4 py-3 text-lg text-gray-800 hover:bg-gray-50 hover:text-cyan-600">
                            {condition}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div className="relative group">
                    <button 
                      onClick={() => toggleDropdown('treatments')}
                      className="px-3 py-2 text-gray-700 hover:text-cyan-500 font-medium flex items-center"
                    >
                      Treatments
                      <svg className={`ml-1 h-5 w-5 transition-transform ${activeDropdown === 'treatments' ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    {activeDropdown === 'treatments' && (
                      <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                        {treatmentsList.map((treatment, idx) => (
                          <a key={idx} href="#" className="block px-4 py-3 text-lg text-gray-800 hover:bg-gray-50 hover:text-cyan-600">
                            {treatment}
                            {idx < treatmentsList.length - 1 && <span className="float-right text-gray-400">›</span>}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <Link 
                    href="/hospital/hope" 
                    className="px-3 py-2 text-gray-700 hover:text-cyan-500 font-medium flex items-center"
                  >
                    Hospitals
                  </Link>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center space-x-4">
                  {/* WhatsApp Button */}
                  <a 
                    href="https://wa.me/918412030400" 
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </a>
                  
                  {/* Phone Number Button */}
                  <a 
                    href="tel:18002330000" 
                    className="flex items-center justify-center px-6 py-2 rounded-full border-2 border-cyan-400 text-cyan-500 hover:bg-cyan-50 transition-colors"
                  >
                    <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm font-medium">18002330000</span>
                  </a>
                  
                  {/* Get Callback Button */}
                  <button 
                    className="flex items-center justify-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:shadow-lg"
                    onMouseEnter={() => setShowCallbackTooltip(true)}
                    onMouseLeave={() => setShowCallbackTooltip(false)}
                    onClick={() => setShowCallbackModal(true)}
                  >
                    <span className="text-sm font-medium">Get Callback</span>
                  </button>
                  
                  {/* Login Button */}
                  <Link 
                    href="/doctor" 
                    className="flex items-center justify-center px-8 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:shadow-lg"
                  >
                    <span className="text-sm font-medium">Login</span>
                  </Link>
                </div>
                
                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-md text-gray-700 hover:text-cyan-500 hover:bg-gray-100"
                  >
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-cyan-500 hover:bg-gray-50">Departments</a>
            <a href="#" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-cyan-500 hover:bg-gray-50">Conditions</a>
            <a href="#" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-cyan-500 hover:bg-gray-50">Treatments</a>
            <Link href="/hospital/hope" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-cyan-500 hover:bg-gray-50">Hospitals</Link>
            <a href="tel:18002330000" className="block px-4 py-2 text-base font-medium text-cyan-500 hover:bg-gray-50">18002330000</a>
            <button 
              className="flex items-center w-full px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-blue-400 to-blue-600 hover:shadow-lg"
              onClick={() => setShowCallbackModal(true)}  
            >
              <span className="text-sm">Get Callback</span>
            </button>
          </div>
        )}
        
        {/* Announcement bar */}
        <div className="bg-cyan-600 text-white py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
            <p>Get Second Opinion from Top Surgeons! <a href="#" className="underline font-medium">Book an Appointment »</a></p>
          </div>
        </div>
        
        {/* Tooltip and modals */}
        {showCallbackTooltip && (
          <div className="absolute top-16 right-48 transform -translate-x-1/2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg whitespace-nowrap z-50">
            <div className="relative">
              You'll get a call back soon
              <div className="absolute left-1/2 top-full transform -translate-x-1/2 text-gray-900">
                <svg width="16" height="8" viewBox="0 0 16 8" fill="currentColor">
                  <path d="M0 0L8 8L16 0H0Z"></path>
                </svg>
              </div>
            </div>
          </div>
        )}
        
        {/* Overlay to close dropdown when clicking outside */}
        {activeDropdown && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </header>

      {/* Callback Modal */}
      {showCallbackModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center">
          <div className="relative">
            <button 
              onClick={() => setShowCallbackModal(false)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <CallbackForm />
          </div>
        </div>
      )}
    </>
  )
} 