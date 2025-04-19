import Image from 'next/image';
import Link from 'next/link';

export default function SecondOpinionPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-blue-600">One Scan One Life</span>
              </Link>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                Home
              </Link>
              <Link href="/doctor" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                Doctors
              </Link>
              <Link href="/emergency-services" className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium">
                Emergency Services
              </Link>
            </nav>
            <div className="md:hidden">
              <button className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-7/12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get Second Opinion from Expert Doctors
              </h1>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-green-100 p-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">Access to Expertise and Specialised Knowledge</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-green-100 p-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">Enhanced Confidence and Peace of Mind</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-green-100 p-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">Validation or Alternatives to Current Treatment Plan</p>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6 border-t border-b border-gray-200 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">25,000+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">500+</div>
                  <div className="text-sm text-gray-600">JCI & NABH Hospitals</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">1,500+</div>
                  <div className="text-sm text-gray-600">Expert Doctors</div>
                </div>
              </div>
              
              <div className="md:block">
                <Link 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700"
                >
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Get Second Opinion
                </Link>
              </div>
            </div>
            
            <div className="lg:w-5/12 order-first lg:order-last">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src="/images/secon opinion.png"
                  alt="Second Opinion Expert Consultation"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Media Publications Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-lg font-medium text-gray-500 text-center mb-4">
            As Featured In
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <div className="text-gray-800 font-semibold py-2 px-4 bg-gray-50 rounded-md">The Economic Times</div>
            <div className="text-gray-800 font-semibold py-2 px-4 bg-gray-50 rounded-md">Inc42</div>
            <div className="text-gray-800 font-semibold py-2 px-4 bg-gray-50 rounded-md">CNBC</div>
            <div className="text-gray-800 font-semibold py-2 px-4 bg-gray-50 rounded-md">ENTRACKR</div>
            <div className="text-gray-800 font-semibold py-2 px-4 bg-gray-50 rounded-md">The Hitavada</div>
            <div className="text-gray-800 font-semibold py-2 px-4 bg-gray-50 rounded-md">Lokmat</div>
            <div className="text-gray-800 font-semibold py-2 px-4 bg-gray-50 rounded-md">Lokmat Samachar</div>
            <div className="text-gray-800 font-semibold py-2 px-4 bg-gray-50 rounded-md">Lokmat News</div>
          </div>
        </div>
      </section>
      
      {/* Instant Video Consultation Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden p-2 max-w-md mx-auto">
                <div className="relative w-full h-96 bg-blue-100 rounded-xl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-96 bg-black rounded-3xl overflow-hidden border-8 border-black shadow-lg">
                      <div className="absolute top-0 w-full h-6 bg-black z-10 flex items-center justify-center">
                        <div className="w-16 h-4 bg-black rounded-b-lg"></div>
                      </div>
                      <div className="relative h-full w-full flex items-center justify-center">
                        <Image 
                          src="/images/dr-murali.jpeg" 
                          alt="Doctor on Video Call"
                          className="object-cover"
                          fill
                        />
                        <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                          Live
                        </div>
                        <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                          <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Instant Video Consultation
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Connect with our expert doctors within <span className="font-bold text-blue-600">60 seconds</span> for immediate medical guidance from the comfort of your home.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-green-100 p-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">No waiting time, immediate doctor access</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-green-100 p-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Secure, private, and confidential video calls</p>
                </div>
                
                <div className="flex items-start">
                  <div className="mt-1 mr-3 rounded-full bg-green-100 p-1">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Digital prescriptions and follow-up care</p>
                </div>
              </div>
              
              <Link 
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Start Video Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Top Doctors Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Top One Scan One Life Doctors (7)
            </h2>
            <div className="flex space-x-2">
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="w-20 h-20 flex-shrink-0 bg-gray-200 rounded-lg overflow-hidden mr-4">
                      <Image 
                        src={i === 1 ? "/images/dr-murali.jpeg" : (i === 2 ? "/images/Dhiraj.png" : "/images/Akshay.png")}
                        alt={`Doctor ${i}`}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-lg">
                        Dr. {i === 1 ? "Murali BK" : (i === 2 ? "Dhiraj Gupta" : "Akshay Kumar")}
                      </h3>
                      <p className="text-gray-500 text-sm mb-1">
                        {i === 1 ? "Cardiologist" : (i === 2 ? "Orthopedic Surgeon" : "Neurologist")}
                      </p>
                      <div className="flex items-center">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map(star => (
                            <svg key={star} className="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">(25)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-500">Experience</span>
                      <span className="font-medium">{i === 1 ? "18" : (i === 2 ? "13" : "15")} Years</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Fee</span>
                      <span className="font-medium">₹1,500</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-center">
                    <Link 
                      href={i === 1 ? "/doctor/murali" : (i === 2 ? "/doctor/dhiraj" : "/doctor/akshay")}
                      className="w-full text-center py-2 px-4 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
                    >
                      Book Appointment
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/doctor"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Doctors
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* When to Take Second Opinion Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            When to Take Second Opinion?
          </h2>
          <p className="text-center text-gray-700 text-lg mb-10 max-w-3xl mx-auto">
            If you're unsure about a diagnosis or treatment plan, seek satisfactory assurance from our expert doctors.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "If you've been diagnosed with a serious illness.",
              "If doctors have recommended invasive surgery.",
              "If the suggested treatment is risky, involves surgery, or has long-term effects.",
              "If you are diagnosed with a rare disease.",
              "If your condition shows no signs of improvement or is worsening despite undergoing surgery or treatment.",
              "If you require expert guidance in selecting from various treatment options based on cost, safety and effectiveness."
            ].map((reason, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-700">{reason}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link
              href="#contact-form"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-sm"
            >
              Get Second Opinion Now
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Get Second Opinion</h2>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter your name*"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <div className="flex items-center justify-center px-3 bg-gray-100 text-gray-700 font-medium">
                  +91
                </div>
                <input
                  type="tel"
                  placeholder="Enter your mobile number*"
                  className="w-full px-4 py-3 border-0 focus:ring-blue-500 focus:outline-none"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              
              <div>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none focus:ring-blue-500 focus:border-blue-500"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select City</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Pune">Pune</option>
                  <option value="Nagpur">Nagpur</option>
                </select>
              </div>
              
              <div>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none focus:ring-blue-500 focus:border-blue-500"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>Select Treatment</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Gastroenterology">Gastroenterology</option>
                  <option value="Oncology">Oncology</option>
                  <option value="Urology">Urology</option>
                  <option value="Gynecology">Gynecology</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                </select>
              </div>
              
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">Add Report*</div>
                <div className="relative">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                    required
                  />
                  <div className="flex items-center justify-center w-full h-16 border-2 border-dashed border-blue-300 bg-blue-50 rounded-md">
                    <div className="text-center">
                      <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                      <p className="mt-1 text-xs text-gray-500">Upload your medical report</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors"
              >
                Get Second Opinion
              </button>
              
              <p className="text-xs text-gray-600 text-center">
                *By proceeding, you agree to our <Link href="#" className="text-blue-600 hover:underline">terms and conditions</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
      
      {/* Specialties */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            Specialities and Surgeries Covered by One Scan One Life's EMI Financing
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { 
                name: "Ophthalmology (Eye)", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )
              },
              { 
                name: "General Surgery", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  </svg>
                )
              },
              { 
                name: "Liver Transplant", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              { 
                name: "Weight Loss Surgery", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                )
              },
              { 
                name: "Orthopaedics", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )
              },
              { 
                name: "Cardiology", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                )
              },
              { 
                name: "Oncology", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                name: "Neurosurgery", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
              { 
                name: "Gastroenterology", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                )
              },
              { 
                name: "Plastic Surgery", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                )
              },
              { 
                name: "Urology", 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                )
              }
            ].map((specialty, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border border-gray-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-blue-100 rounded-full">
                  {specialty.icon}
                </div>
                <p className="text-sm font-medium">{specialty.name}</p>
              </div>
            ))}
            <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-blue-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <p className="text-sm font-medium text-blue-600">20 More+</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Anohra Assistant Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="relative w-full max-w-md mx-auto md:mx-0 h-80">
                <Image
                  src="/images/anohra.jpeg"
                  alt="Anohra - AI Healthcare Assistant"
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Anohra: Your Personal<br />HealthCare Companion
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Ask any health query to your personal healthcare assistant for tailor-made assistance and guidance 24x7.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Chat with Anohra
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 