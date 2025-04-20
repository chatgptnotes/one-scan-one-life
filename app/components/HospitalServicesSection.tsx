"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const hospitalServicesData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Centralized Helpline",
    title: "One-Stop Contact for All Emergency Needs",
    description: "Our centralized helpline streamlines communication during medical emergencies. It connects patients, hospitals, and emergency services, ensuring that calls for help are routed efficiently and patients receive timely assistance when needed.",
    href: "/hospital/centralized-helpline"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    label: "Ambulance Management",
    title: "Efficient Ambulance Coordination",
    description: "With our ambulance management service, hospitals can efficiently dispatch and track their fleet of ambulances. This service ensures that ambulances are assigned promptly, optimizing fleet usage and reducing delays in patient transport during emergencies.",
    href: "/hospital/ambulance-management"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    label: "Real-time Monitoring",
    title: "Continuous Monitoring for Enhanced Care",
    description: "Hospitals can track and monitor patients in real time, from emergency transport to hospital admission. This service helps maintain continuous care for patients, ensuring that critical health information is available to doctors and paramedics when needed most.",
    href: "/hospital/real-time-monitoring"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    ),
    label: "Outsourced Fleet",
    title: "Seamless Fleet Management",
    description: "Our outsourced fleet service allows hospitals to maintain a fleet of ambulances without the burden of management. We provide skilled drivers, regular maintenance, and efficient scheduling, so hospitals can focus on patient care while we handle the logistics.",
    href: "/hospital/outsourced-fleet"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    label: "Medical Equipment",
    title: "Timely Delivery of Critical Equipment",
    description: "We ensure that hospitals have the necessary medical equipment on hand during emergencies. From life-saving devices to diagnostic tools, our service provides quick access to medical supplies, ensuring that healthcare providers are prepared to handle all situations.",
    href: "/hospital/medical-equipment"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: "Paramedic Training",
    title: "Training for Effective Emergency Care",
    description: "Our paramedic training service helps hospital staff stay up-to-date with the latest emergency response techniques. This service ensures that your team is ready to provide the best possible care in urgent situations, improving patient outcomes during medical crises.",
    href: "/hospital/paramedic-training"
  }
];

export default function HospitalServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Hospital Services</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">Specialized solutions designed to streamline hospital operations, enhance emergency response, and improve overall patient care.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hospitalServicesData.map((service, index) => (
            <div key={index} className="bg-teal-50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full mr-4 shadow-sm">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.label}</h3>
                </div>
                
                <h4 className="text-lg font-medium text-teal-700 mb-3">{service.title}</h4>
                
                <p className="text-gray-600 mb-5">{service.description}</p>
                
                <Link 
                  href={service.href} 
                  className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 