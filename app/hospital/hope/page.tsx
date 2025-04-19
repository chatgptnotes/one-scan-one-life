"use client"

import Image from "next/image";
import Link from "next/link";
import Header from "../../components/Header";

const HopeHospitalPage = () => {
  return (
    <main className="bg-white">
      <Header />
      
      {/* Hospital Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="p-6 md:p-8">
            {/* Card matching the image */}
            <div className="mb-8 bg-blue-50 rounded-xl p-8 flex flex-col items-center">
              <div className="w-full max-w-md h-24 mb-4 relative">
                <h2 className="text-3xl font-bold text-red-700 text-center">Dr. Murali's</h2>
                <h1 className="text-4xl font-bold text-blue-700 text-center">HOPE<span className="text-gray-700">HOSPITAL</span></h1>
                <p className="text-sm text-center text-gray-500 mt-1">Assured | Committed | Proficient</p>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">Hope Hospital</h1>
              <p className="text-xl text-gray-600 mb-6 text-center">Teka Naka, Kamptee Road, Nagpur</p>
              
              <div className="flex items-center justify-center mb-2">
                <p className="text-xl font-semibold text-gray-700 mr-4">85 Reviews</p>
              </div>
              
              <div className="flex items-center justify-center mb-4">
                <span className="text-green-600 text-2xl font-bold mr-2">★</span>
                <span className="text-2xl font-bold text-green-600">4.7/5 Rating</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Hospital Details */}
              <div className="md:col-span-2">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Hope Hospital, Nagpur</h1>
                <div className="flex items-center mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Hexa Assured</span>
                  <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">NABH certified</span>
                </div>
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-cyan-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>45 Doctors</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-cyan-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>12 Specialities</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-cyan-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Multi-Speciality Hospital</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-cyan-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Timing: 24 x 7 Open</span>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center bg-cyan-600 text-white font-bold rounded-lg w-12 h-12 text-xl">4.7</div>
                  <div className="ml-3">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className={`w-4 h-4 ${star <= 4 ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">(76 Ratings)</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-4">
                  <span className="font-semibold text-cyan-700">28 patients</span> enquired about the hospital in last 1 hour.
                </p>
                
                {/* Address */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700">Teka Naka, Kamptee Road, Nagpur, Maharashtra</p>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Chat Now
                  </button>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Appointment
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                    </svg>
                    WhatsApp Expert
                  </button>
                </div>
              </div>
              
              {/* Hospital Image Gallery */}
              <div>
                <div className="rounded-lg overflow-hidden shadow-md aspect-w-16 aspect-h-9 relative h-60">
                  <Image
                    src="/images/hope.jpeg"
                    alt="Hope Hospital"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute bottom-2 right-2 bg-white bg-opacity-90 rounded-md px-2 py-1 text-xs font-medium">
                    +6 Images
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {[
              { name: 'About', current: true },
              { name: 'Doctors', current: false },
              { name: 'Reviews', current: false },
              { name: 'Treatments', current: false },
              { name: 'Amenities', current: false },
              { name: 'Insurances', current: false },
              { name: 'FAQs', current: false },
            ].map((tab) => (
              <a
                key={tab.name}
                href={`#${tab.name.toLowerCase()}`}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${tab.current
                    ? 'border-cyan-500 text-cyan-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                `}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* About Section */}
        <section id="about" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About Hope Hospital Nagpur</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Hope Hospital, Nagpur, is a NABH-accredited world-class medical center that serves the region's healthcare needs. The hospital demonstrates a commitment to quality medical care and patient service, with skilled medical experts at the helm.
            </p>
            <p className="mb-4">
              Hope Hospital has a patient-centric approach to providing personalized care to each patient. This superspeciality hospital offers various amenities, such as private rooms, a cafeteria, and a pharmacy, to make the patient's stay as comfortable as possible.
            </p>
            <p className="mb-4">
              In addition to providing high-quality medical care, Hope Hospital is committed to community service and runs various health programs to educate and raise awareness about health issues. The hospital also organizes health camps and free medical checkups for underprivileged communities.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Hope Hospital Facilities</h3>
            <p className="mb-2">The hospital has most up-to-date medical facilities, including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>No. of beds with World-class Intensive Care Units: 150</li>
              <li>Modular Operation Theaters: 4</li>
              <li>Advanced Critical Care and Dialysis Unit</li>
              <li>State-of-the-art Radiology unit with MRI, CT scan and ultrasound</li>
              <li>State-of-art Cath Lab with advanced facilities</li>
              <li>Fully Equipped Laboratory Medicine and Blood Bank</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Hope Hospital Specialities</h3>
            <p className="mb-4">
              Hope Hospital offers specialized medical services in various fields, including cardiology, neurology, gastroenterology, urology, nephrology, orthopaedics, and more. It is staffed with experienced and highly trained doctors, nurses, and other medical professionals dedicated to providing patients with the best possible care.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Hope Hospital Services</h3>
            <p className="mb-2">Hope Hospital is equipped with advanced medical technologies and offers various services, such as:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>24/7 Trauma Care and Pharmacy Services</li>
              <li>24/7 Radiology Services - CT Scan, MRI</li>
              <li>Round-the-clock critical care ambulance</li>
              <li>24/7 dialysis services</li>
            </ul>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Book Appointment at Hope Hospital</h3>
              <p className="mb-4">Connect to the top doctors of Hope Hospital, Nagpur. Contact our experts to learn about fees, timings and contact number. Now, you can have priority appointments and a hassle-free experience via the medical experts of HexaHealth.</p>
              <div className="mt-4">
                <Link 
                  href="/"
                  className="inline-flex items-center bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  Book Now
                  <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Accreditation Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Accreditation</h2>
          <div className="flex space-x-8">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 flex items-center justify-center border border-gray-300 rounded-lg p-2">
                <span className="font-bold text-gray-700">NABH</span>
              </div>
              <span className="mt-2 text-sm text-gray-600">NABH</span>
            </div>
          </div>
        </section>
        
        {/* Timings Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Timings</h2>
          <p className="text-lg text-gray-700">Open 24 hours</p>
        </section>
        
        {/* Address Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Address</h2>
          <p className="text-lg text-gray-700 mb-6">
            Teka Naka, Kamptee Road, Nagpur, Maharashtra, 440001
          </p>
          
          {/* Map Placeholder */}
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Map</span>
          </div>
        </section>
        
        {/* Photos Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Hope Hospital Photos</h2>
          <p className="text-gray-700 mb-6">
            Hope Hospital photos include interior view, exterior view, reception area, OPD room, IPD room, emergency, facilities and more.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {/* Photo Placeholders */}
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">Photo {i}</div>
              </div>
            ))}
            <div className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">+6</span>
              <span className="text-gray-500 mt-2">View All</span>
            </div>
          </div>
        </section>
        
        {/* Doctor list section - placeholder */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Hope Hospital Doctors List (45)</h2>
            <Link href="/" className="text-cyan-600 hover:text-cyan-800">
              View All Doctors
            </Link>
          </div>
          <p className="text-gray-700 mb-6">
            Explore the list of doctors at Hope Hospital, Nagpur. View details and book an online appointment with an expert doctor at Hope Hospital, Nagpur.
          </p>
          
          {/* Doctor Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['All (45)', 'Ophthalmologist (2)', 'Cardiologist (4)', 'Gastroenterologist (3)', 'General Surgeon (2)'].map((category) => (
              <span key={category} className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full hover:bg-cyan-100 cursor-pointer">
                {category}
              </span>
            ))}
          </div>
          
          {/* Featured Doctors */}
          <div className="space-y-6">
            {/* Doctor Dr. Murali */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/dr-murali.jpeg"
                      alt="Dr. Murali B.K."
                      width={120}
                      height={120}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">Dr. Murali B.K.</h3>
                    <p className="text-cyan-600 font-medium">Orthopedic Surgeon</p>
                    <div className="flex items-center mt-2 mb-3">
                      <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded">Hexa Partner</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>20+ Years Experience</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>98% Recommended</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Doctor Dr. Akshay */}
            <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/Akshay.png"
                      alt="Dr. Akshay Anil Akulwar"
                      width={120}
                      height={120}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900">Dr. Akshay Anil Akulwar</h3>
                    <p className="text-cyan-600 font-medium">Colon and Rectal Surgeon</p>
                    <div className="flex items-center mt-2 mb-3">
                      <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-0.5 rounded">Hexa Partner</span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>15+ Years Experience</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-600 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>95% Recommended</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-medium py-2 px-4 rounded-lg">
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="inline-flex items-center text-cyan-600 hover:text-cyan-800"
            >
              View All Doctors
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Book Your Appointment?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Connect with the best doctors at Hope Hospital, Nagpur. Get priority appointments and a hassle-free experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/"
                className="inline-flex items-center bg-cyan-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Book Appointment
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
              <Link 
                href="/"
                className="inline-flex items-center bg-white text-cyan-600 border border-cyan-600 font-medium py-3 px-6 rounded-lg hover:bg-cyan-50 transition-colors"
              >
                Contact Us
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Link back to home */}
        <div className="text-center mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-cyan-600 hover:text-cyan-800"
          >
            <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HopeHospitalPage; 