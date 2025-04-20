"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const enterpriseServicesData = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Standby Ambulances",
    title: "Quick and Ready Response",
    description: "Ensure that your employees or visitors are never left without help in case of an emergency. Our standby ambulances are stationed nearby, ensuring that emergency medical services are just a call away, minimizing response times.",
    href: "/enterprise/standby-ambulances"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    label: "Doctor Consultations",
    title: "Expert Medical Advice at Your Fingertips",
    description: "With instant access to qualified doctors, your enterprise can ensure quick consultations for employees, reducing downtime and providing immediate health advice. Available 24/7, doctors can provide both virtual and on-site support.",
    href: "/enterprise/doctor-consultations"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    label: "Concierge Services",
    title: "Personalized Healthcare Support",
    description: "Our concierge service provides employees with tailored healthcare services, from booking appointments with specialists to organizing necessary medical tests and procedures. This service elevates employee well-being and ensures their medical needs are met efficiently.",
    href: "/enterprise/concierge-services"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    label: "Emergency Platform",
    title: "Centralized Emergency Response System",
    description: "Empower your workforce with an easy-to-use emergency platform that connects employees to instant emergency services. Whether it's an ambulance, doctor, or hospital, our platform ensures that help is dispatched immediately, improving response efficiency.",
    href: "/enterprise/emergency-platform"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "GPS Ambulances",
    title: "Real-time Tracking and Rapid Deployment",
    description: "Track ambulances in real time with our GPS-enabled service, ensuring that help is always on the way. Our system ensures that the nearest available ambulance reaches the location faster, reducing wait times and improving outcomes in emergencies.",
    href: "/enterprise/gps-ambulances"
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    label: "CPR Training",
    title: "Life-Saving Training for Employees",
    description: "Empower your workforce with CPR training, ensuring that they are prepared to respond effectively in medical emergencies. This training can help prevent fatalities and improve overall workplace safety, making your organization more resilient in emergencies.",
    href: "/enterprise/cpr-training"
  }
];

export default function EnterpriseServicesSection() {
  const [activeService, setActiveService] = useState<number | null>(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Services</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">Comprehensive healthcare solutions designed specifically for businesses and organizations to ensure the wellbeing of your employees and visitors.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {enterpriseServicesData.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.label}</h3>
                </div>
                
                <h4 className="text-lg font-medium text-blue-700 mb-3">{service.title}</h4>
                
                <p className="text-gray-600 mb-5">{service.description}</p>
                
                <Link 
                  href={service.href} 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
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