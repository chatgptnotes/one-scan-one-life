"use client"

import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CardiologyDepartment() {
  const [activeTab, setActiveTab] = useState('conditions');
  
  return (
    <main>
      <Header />
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Cardiology Department - Services and Surgeries
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl">
            Looking for Hassle-free surgeries in Cardiology? Experience top-notch care and seamless procedures with our expert Cardiology team.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg text-gray-700">Free consultations for 50+ conditions across India</p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg text-gray-700">In-person and offline consultations with experienced doctors</p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg text-gray-700">Personalised assistance throughout the treatment</p>
            </div>
            
            <div className="flex items-start">
              <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-lg text-gray-700">Post-treatment care and support</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-cyan-600 text-white font-medium py-3 px-6 rounded-md hover:bg-cyan-700 flex items-center">
              <span>Book Appointment</span>
            </button>
            <button className="bg-green-600 text-white font-medium py-3 px-6 rounded-md hover:bg-green-700 flex items-center">
              <span>WhatsApp Expert</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Department Heading */}
      <div className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Cardiology Department - Services and Surgeries</h2>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="bg-white py-4 border-b border-gray-200 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            <button 
              className={`py-2 px-1 font-medium whitespace-nowrap transition-all border-b-2 ${activeTab === 'conditions' ? 'text-cyan-600 border-cyan-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
              onClick={() => setActiveTab('conditions')}
            >
              Conditions and Treatments
            </button>
            <button 
              className={`py-2 px-1 font-medium whitespace-nowrap transition-all border-b-2 ${activeTab === 'doctors' ? 'text-cyan-600 border-cyan-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
              onClick={() => setActiveTab('doctors')}
            >
              Doctors
            </button>
            <button 
              className={`py-2 px-1 font-medium whitespace-nowrap transition-all border-b-2 ${activeTab === 'hospitals' ? 'text-cyan-600 border-cyan-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
              onClick={() => setActiveTab('hospitals')}
            >
              Hospitals
            </button>
            <button 
              className={`py-2 px-1 font-medium whitespace-nowrap transition-all border-b-2 ${activeTab === 'articles' ? 'text-cyan-600 border-cyan-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
              onClick={() => setActiveTab('articles')}
            >
              Articles
            </button>
            <button 
              className={`py-2 px-1 font-medium whitespace-nowrap transition-all border-b-2 ${activeTab === 'faq' ? 'text-cyan-600 border-cyan-600' : 'text-gray-500 border-transparent hover:text-gray-700'}`}
              onClick={() => setActiveTab('faq')}
            >
              FAQ
            </button>
          </div>
        </div>
      </div>
      
      {/* Search and Conditions Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 max-w-2xl mx-auto">
            <h3 className="text-lg font-medium mb-2">Search Condition or Treatment</h3>
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search cardiology conditions or treatments..." 
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Condition Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="h-40 bg-gray-100 relative overflow-hidden">
              <Image
                src="/images/angioplasty.png"
                alt="Angioplasty PTCA"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Angioplasty -PTCA</h3>
              <div className="flex justify-between items-center mt-4">
                <Link href="/procedures/angioplasty" className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
                  Learn More
                </Link>
                <span className="bg-cyan-50 text-cyan-700 text-xs px-2 py-1 rounded-full">Procedure</span>
              </div>
            </div>
          </div>
          
          {/* Condition Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="h-40 bg-gray-100 relative overflow-hidden">
              <Image
                src="/images/angioplasty.png"
                alt="Coronary Angiogram"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Coronary Angiogram</h3>
              <div className="flex justify-between items-center mt-4">
                <Link href="/procedures/coronary-angiogram" className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
                  Learn More
                </Link>
                <span className="bg-cyan-50 text-cyan-700 text-xs px-2 py-1 rounded-full">Procedure</span>
              </div>
            </div>
          </div>
          
          {/* Condition Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="h-40 bg-gray-100 relative overflow-hidden">
              <Image
                src="/images/angioplasty.png"
                alt="CT Coronary Angiography"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-1">CT Coronary Angiography</h3>
              <div className="flex justify-between items-center mt-4">
                <Link href="/procedures/ct-coronary-angiography" className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
                  Learn More
                </Link>
                <span className="bg-cyan-50 text-cyan-700 text-xs px-2 py-1 rounded-full">Procedure</span>
              </div>
            </div>
          </div>
          
          {/* Condition Card 4 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="h-40 bg-gray-100 relative overflow-hidden">
              <Image
                src="/images/angioplasty.png"
                alt="Angioplasty PTCA"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Angioplasty -PTCA</h3>
              <div className="flex justify-between items-center mt-4">
                <Link href="/procedures/angioplasty" className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
                  Learn More
                </Link>
                <span className="bg-cyan-50 text-cyan-700 text-xs px-2 py-1 rounded-full">Procedure</span>
              </div>
            </div>
          </div>
          
          {/* Condition Card 5 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="h-40 bg-gray-100 relative overflow-hidden">
              <Image
                src="/images/pacemaker-icon.png"
                alt="Heart Attack"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Heart Attack</h3>
              <div className="flex justify-between items-center mt-4">
                <Link href="/conditions/heart-attack" className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
                  Learn More
                </Link>
                <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Condition</span>
              </div>
            </div>
          </div>
          
          {/* Condition Card 6 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="h-40 bg-gray-100 relative overflow-hidden">
              <Image
                src="/images/pacemaker-icon.png"
                alt="Arrhythmia"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Arrhythmia</h3>
              <div className="flex justify-between items-center mt-4">
                <Link href="/conditions/arrhythmia" className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
                  Learn More
                </Link>
                <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Condition</span>
              </div>
            </div>
          </div>
          
          {/* Condition Card 7 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="h-40 bg-gray-100 relative overflow-hidden">
              <Image
                src="/images/pacemaker-icon.png"
                alt="Coronary Artery Disease"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Coronary Artery Disease</h3>
              <div className="flex justify-between items-center mt-4">
                <Link href="/conditions/coronary-artery-disease" className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
                  Learn More
                </Link>
                <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Condition</span>
              </div>
            </div>
          </div>
          
          {/* Condition Card 8 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
            <div className="h-40 bg-gray-100 relative overflow-hidden">
              <Image
                src="/images/pacemaker-icon.png"
                alt="Myocardial Infarction"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-1">Myocardial Infarction</h3>
              <div className="flex justify-between items-center mt-4">
                <Link href="/conditions/myocardial-infarction" className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">
                  Learn More
                </Link>
                <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">Condition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Top Doctors Section */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Cardiology Doctors (18)</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Doctor Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src="/images/dr-murali.jpeg"
                      alt="Dr. Rajesh Kumar"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-600 mb-1 flex items-center">
                      Dr. Rajesh Kumar
                      <svg className="w-4 h-4 text-blue-500 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">Cardiologist</p>
                    <p className="text-gray-600 text-sm mb-1">MBBS, MD, DM Cardiology</p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center mr-4">
                        <svg className="w-4 h-4 text-purple-700 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-700">15+ Yrs</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm text-gray-700">4.8</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Link href="/doctor/cardiology/dr-rajesh-kumar" className="text-cyan-600 font-medium text-sm hover:text-cyan-700">
                    View Profile
                  </Link>
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-600 hover:to-cyan-600">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Doctor Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src="/images/surgeon-1.png"
                      alt="Dr. Anjali Sharma"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-600 mb-1 flex items-center">
                      Dr. Anjali Sharma
                      <svg className="w-4 h-4 text-blue-500 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">Interventional Cardiologist</p>
                    <p className="text-gray-600 text-sm mb-1">MBBS, MD, DM Cardiology</p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center mr-4">
                        <svg className="w-4 h-4 text-purple-700 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-700">18+ Yrs</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm text-gray-700">4.9</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Link href="/doctor/cardiology/dr-anjali-sharma" className="text-cyan-600 font-medium text-sm hover:text-cyan-700">
                    View Profile
                  </Link>
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-600 hover:to-cyan-600">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            
            {/* Doctor Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden mr-4 flex-shrink-0">
                    <Image
                      src="/images/surgeon-2.png"
                      alt="Dr. Vikram Singh"
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-blue-600 mb-1 flex items-center">
                      Dr. Vikram Singh
                      <svg className="w-4 h-4 text-blue-500 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </h3>
                    <p className="text-gray-600 text-sm mb-1">Cardiac Surgeon</p>
                    <p className="text-gray-600 text-sm mb-1">MBBS, MS, MCh Cardiac Surgery</p>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center mr-4">
                        <svg className="w-4 h-4 text-purple-700 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-700">20+ Yrs</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm text-gray-700">4.7</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between mt-6">
                  <Link href="/doctor/cardiology/dr-vikram-singh" className="text-cyan-600 font-medium text-sm hover:text-cyan-700">
                    View Profile
                  </Link>
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:from-blue-600 hover:to-cyan-600">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="/doctors/cardiology" className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium">
              View All Cardiology Doctors
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Why Choose Us + Consultation Form Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left Column - Why One Scan One Life */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Find The Right Doctors and Hospitals</h2>
              <p className="text-gray-700 mb-8">
                One Scan One Life is a patient-first platform that takes care of patient's entire surgical journey from finding the right doctor and right hospital, to hospital admissions, insurance, financing and post surgery recovery.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-cyan-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Get free consultation for 50+ conditions across India</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Online and offline consultations with expert surgeons</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-cyan-100 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Extensive assistance throughout your treatment</p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Consultation Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Get a Free Consultation</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Enter your name*</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Enter your mobile number*</label>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <select className="h-full py-3 px-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-50">
                        <option>+91</option>
                      </select>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      className="flex-1 px-4 py-3 border border-gray-300 border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="query" className="block text-sm font-medium text-gray-700 mb-1">Enter your query...</label>
                  <textarea
                    id="query"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Describe your medical condition or query"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium py-3 rounded-md hover:from-blue-700 hover:to-cyan-700"
                >
                  Book Appointment
                </button>
                
                <p className="text-xs text-gray-500">
                  *By proceeding, you agree to our terms and conditions
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions (FAQ)</h2>
          
          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <div className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 focus:outline-none"
                onClick={() => {
                  // Toggle FAQ logic would go here
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">What is Cardiology?</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4">
                <p className="text-gray-700">
                  Cardiology deals with heart and cardiovascular system disorders, covering issues like congenital heart defects, coronary artery disease, heart failure, valve problems, and electrophysiology.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 focus:outline-none"
                onClick={() => {
                  // Toggle FAQ logic would go here
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">What is the role of cardiologists?</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4 hidden">
                <p className="text-gray-700">
                  Cardiologists are specialized physicians who diagnose, treat, and manage heart and cardiovascular system conditions. They perform physical examinations, order and interpret diagnostic tests, provide treatment plans, prescribe medications, and recommend lifestyle changes to improve heart health.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 focus:outline-none"
                onClick={() => {
                  // Toggle FAQ logic would go here
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Can a cardiologist do a surgery?</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4 hidden">
                <p className="text-gray-700">
                  Regular cardiologists typically don't perform surgical procedures. They focus on non-invasive diagnostic tests and medical management. Interventional cardiologists can perform catheter-based procedures like angioplasty, while cardiac surgeons (cardiothoracic surgeons) handle open heart surgeries and other complex surgical interventions.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 focus:outline-none"
                onClick={() => {
                  // Toggle FAQ logic would go here
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Are cardiology and CTVS the same?</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4 hidden">
                <p className="text-gray-700">
                  No, cardiology and Cardiothoracic and Vascular Surgery (CTVS) are different specialties. Cardiology is a medical specialty focused on diagnosing and treating heart conditions using medications and non-surgical interventions. CTVS is a surgical specialty that deals with operative procedures for the heart, lungs, chest, and blood vessels.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 focus:outline-none"
                onClick={() => {
                  // Toggle FAQ logic would go here
                }}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Can a cardiologist do an angioplasty?</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-4 hidden">
                <p className="text-gray-700">
                  An interventional cardiologist can perform angioplasty procedures. These are cardiologists with additional specialized training in catheter-based procedures. They perform minimally invasive procedures like angioplasty and stent placement to open blocked or narrowed coronary arteries.
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick Action Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full hover:shadow-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>WhatsApp</span>
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full hover:shadow-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Book Now</span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Other Departments Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Other Departments</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link href="/departments/general-surgery" className="text-gray-700 hover:text-cyan-600 transition-colors">
              General Surgery
            </Link>
            <Link href="/departments/ent" className="text-gray-700 hover:text-cyan-600 transition-colors">
              ENT
            </Link>
            <Link href="/departments/obstetrics-and-gynaecology" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Obstetrics and Gynaecology
            </Link>
            <Link href="/departments/orthopaedic" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Orthopaedic
            </Link>
            <Link href="/departments/urology" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Urology
            </Link>
            <Link href="/departments/ophthalmology" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Ophthalmology
            </Link>
            <Link href="/departments/ctvs-surgery" className="text-gray-700 hover:text-cyan-600 transition-colors">
              CTVS Surgery
            </Link>
            <Link href="/departments/neurosurgery" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Neurosurgery
            </Link>
            <Link href="/departments/plastic-surgery" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Plastic Surgery
            </Link>
            <Link href="/departments/paediatric-surgery" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Paediatric Surgery
            </Link>
            <Link href="/departments/gastrointestinal-surgery" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Gastrointestinal Surgery
            </Link>
            <Link href="/departments/surgical-oncology" className="text-gray-700 hover:text-cyan-600 transition-colors">
              Surgical Oncology
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 