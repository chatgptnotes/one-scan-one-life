import Image from 'next/image';
import Link from 'next/link';

export default function EmergencyServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🚑 Raftaar Help Emergency Seva: Revolutionizing Emergency Medical Response Across India
              </h1>
              <p className="text-xl mb-8">
                Getting medical assistance to you in under 10 minutes, even in the most remote locations of India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#request" 
                  className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full inline-flex items-center justify-center transition-all">
                  Request an Ambulance Now
                </Link>
                <Link href="tel:18002330000" 
                  className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-full inline-flex items-center justify-center transition-all border border-white">
                  Call 1800-233-0000
                </Link>
              </div>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg shadow-xl p-4">
                <Image 
                  src="/images/ our services - smart ambulance.png"
                  alt="Advanced Ambulance Service" 
                  width={400} 
                  height={300}
                  className="w-full h-auto rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* About Us Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            Raftaar Help Emergency Seva is committed to drastically reducing emergency response times, saving lives across the nation. 
            With an advanced fleet of 13,000+ ambulances equipped with the latest medical equipment, we provide fast, reliable, 
            and life-saving services in your time of need. We focus on getting medical assistance to you in under 10 minutes, 
            even in the most remote locations of India.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're facing a road accident, heart attack, or any other medical emergency, 
            Raftaar Help Emergency Seva ensures that help is on the way, right when you need it.
          </p>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🚨 Why Choose Raftaar Help Emergency Seva?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">🕒</span>
                </div>
                <h3 className="text-xl font-semibold">Fast Response Time</h3>
              </div>
              <p>We guarantee a response time of under 10 minutes, ensuring you receive life-saving care as quickly as possible.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">🌏</span>
                </div>
                <h3 className="text-xl font-semibold">Nationwide Coverage</h3>
              </div>
              <p>With our fleet of ambulances and extensive network, we are available across every corner of India — from bustling cities to remote rural areas.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">⏰</span>
                </div>
                <h3 className="text-xl font-semibold">24/7 Availability</h3>
              </div>
              <p>Emergencies don't keep a schedule, and neither do we. Our services are available 24/7, 365 days a year.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <span className="text-2xl">👩‍⚕️</span>
                </div>
                <h3 className="text-xl font-semibold">Trained Medical Staff</h3>
              </div>
              <p>Each of our ambulances is staffed with paramedics and trained medical professionals, equipped to handle any emergency.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* How We Make a Difference */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">💡 How We Make a Difference</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:border-red-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Real-Time Dispatch System</h3>
              <p className="mb-4">Our state-of-the-art dispatch system ensures that the nearest available ambulance is sent directly to your location as soon as you call for help.</p>
              <p>Using GPS tracking, the system optimizes routes and minimizes travel time. 🚗💨</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:border-red-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4">Instant Callback Feature</h3>
              <p className="mb-4">Dial 1800-233-0000 or visit BachaoBachao.in to receive an instant call-back.</p>
              <p>Our automated system will immediately capture your emergency details and dispatch an ambulance.</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:border-red-500 transition-colors">
              <h3 className="text-xl font-semibold mb-4">AI-Powered Ambulance Routing</h3>
              <p className="mb-4">We use cutting-edge AI-powered routing systems that select the fastest possible route to your location.</p>
              <p>This minimizes traffic delays and ensures quicker response times.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* BachaoBachao.in */}
      <section className="py-12 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🔔 BachaoBachao.in – A Revolutionary Ambulance Calling Service</h2>
              <p className="text-lg text-gray-700 mb-6">
                BachaoBachao.in is a groundbreaking service that allows you to call an ambulance from anywhere in India without needing to remember a phone number.
              </p>
              <p className="text-lg text-gray-700">
                You can access this service through BachaoBachao.in on your mobile browser or via the app, allowing anyone to request immediate medical assistance by simply entering their location.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-2xl font-bold text-red-600 mb-4">Emergency?</h3>
                <a href="https://bachaobachao.in" target="_blank" rel="noopener noreferrer" 
                  className="block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg mb-4 transition-colors">
                  Get Help Now
                </a>
                <p className="text-sm text-gray-600">No app download required.<br/>Works on any device.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Ambulance Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🛠️ Our Ambulance Services</h2>
          <p className="text-lg text-gray-700 mb-8">
            Raftaar Help Emergency Seva offers the following specialized ambulance services tailored to the needs of patients in different situations:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Basic Ambulance Services</h3>
                <p className="text-gray-700">
                  For general emergencies with basic life-saving equipment. Ideal for non-critical patients requiring swift transportation to hospitals.
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">ICU Ventilator Ambulance</h3>
                <p className="text-gray-700">
                  Equipped with ICU-level facilities, oxygen support, defibrillators, and medical equipment for critical patients. 👨‍⚕️
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Cardiac Ambulance</h3>
                <p className="text-gray-700">
                  Specialized ambulances equipped with ECG machines, defibrillators, and life-saving cardiac medications for heart attack patients. ❤️‍🩹
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Neonatal Ambulance</h3>
                <p className="text-gray-700">
                  Ambulances specifically designed for transporting newborns and neonatal patients, with incubators and oxygen support.
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Air Ambulance</h3>
                <p className="text-gray-700">
                  For long-distance emergency transport, air ambulances equipped with full life-support systems ensure patients are transported quickly and safely.
                </p>
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Dead Body Freezer Box Ambulance</h3>
                <p className="text-gray-700">
                  For transporting deceased patients while maintaining dignity and preserving the body.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link href="#all-services" 
              className="inline-block bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              See All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Our Competitors */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🏆 Our Competitors</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Medica Rescue</h3>
              <p className="text-gray-700">
                Medica Rescue offers emergency ambulance services with response times of 15-20 minutes. They offer basic and ICU ambulances and have nationwide coverage.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">BLS Ambulance Service</h3>
              <p className="text-gray-700">
                Specializes in basic life support services for non-critical emergencies. Their response times range between 10-30 minutes, depending on location.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">QuickCare Ambulances</h3>
              <p className="text-gray-700">
                With AI-powered response systems and fleet management, they provide critical care and on-site medical support for accidents and severe injuries. QuickCare guarantees 15-minute response time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Doctor Ambulance</h3>
              <p className="text-gray-700">
                Provides ICU-equipped ambulances with medical staff on board. Their network is spread over 10+ cities in India, with basic, cardiac, and ICU ambulances.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* EmergencySeva App */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
              <div className="bg-gray-200 rounded-xl p-8 text-center">
                <div className="text-5xl mb-4">📱</div>
                <div className="text-xl font-bold">EmergencySeva App</div>
                <div className="mt-6 space-y-2">
                  <a href="#" className="block bg-black text-white py-2 px-4 rounded-lg">
                    Download on App Store
                  </a>
                  <a href="#" className="block bg-black text-white py-2 px-4 rounded-lg">
                    Get it on Google Play
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">🏥 EmergencySeva App – Your Lifeline in an Emergency</h2>
              <p className="text-lg text-gray-700 mb-6">
                The EmergencySeva App allows you to book an ambulance, track its location, and communicate with emergency staff all in real time.
              </p>
              <p className="text-lg text-gray-700 mb-6">Download the app now to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Book ambulances directly from your mobile</li>
                <li>Track ambulance location in real-time</li>
                <li>Communicate directly with medical staff in case of any urgent queries</li>
                <li>Receive status updates throughout the emergency transport</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">🔗 Related Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Telemedicine</h3>
              <p className="text-gray-700">
                Our telemedicine service provides instant medical consultations for emergencies. Speak with a licensed doctor for advice while waiting for an ambulance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Hospital Admission Assistance</h3>
              <p className="text-gray-700">
                We coordinate with nearby hospitals to ensure that your patient is admitted quickly and receives immediate care upon arrival.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Blood Bank Services</h3>
              <p className="text-gray-700">
                Emergency blood bank services available with immediate dispatch to hospitals across the country. 💉
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Us */}
      <section id="request" className="py-12 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">🚨 Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white text-gray-800 rounded-lg p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-red-600">Request an Ambulance</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Type</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500">
                      <option>Accident</option>
                      <option>Heart Attack</option>
                      <option>Stroke</option>
                      <option>Pregnancy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-md transition-colors">
                    Request Now
                  </button>
                </form>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-red-500 p-3 rounded-full mr-4">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>Dial 1800-233-0000</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-red-500 p-3 rounded-full mr-4">
                  <span className="text-2xl">🌐</span>
                </div>
                <div>
                  <h3 className="font-semibold">Website</h3>
                  <p>BachaoBachao.in</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-red-500 p-3 rounded-full mr-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>support@emergencyseva.in</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-red-500 p-3 rounded-full mr-4">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p>172, Mohan Nagar, Nagpur, Maharashtra, 440001</p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="#" 
                  className="inline-block bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors">
                  Get Help Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">💬 Why We Are Trusted</h2>
          
          <p className="text-lg text-gray-700 text-center mb-12">
            With a proven track record and countless success stories, Raftaar Help Emergency Seva is your go-to service for immediate medical emergencies. Our dedicated teams work tirelessly to ensure every patient is given prompt and effective care.
          </p>
          
          <div className="text-center">
            <p className="text-2xl font-bold text-red-600">Raftaar Help Emergency Seva – Reducing Emergency Response Time for a Safer Tomorrow.</p>
            <p className="text-xl italic mt-4">Because when seconds count, we're here to help.</p>
          </div>
        </div>
      </section>
    </div>
  );
} 