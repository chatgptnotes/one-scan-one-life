"use client"

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DoctorConsultationModal from "./DoctorConsultationModal";

const servicesData = [
  {
    imageSrc: "/images/ our services - smart ambulance.png", 
    label: "Smart Ambulance",
    isHighlighted: true,
    href: "/emergency-services"
  },
  {
    imageSrc: "/images/services-doctor.png", 
    label: "Doctor Consultation",
    isModal: true
  },
  {
    imageSrc: "/images/services-second-opinion.png",
    label: "Second Opinion",
    href: "/second-opinion"
  },
  {
    imageSrc: "/images/services-appointment.png",
    label: "Book Appointment"
  },
  {
    imageSrc: "/images/services-medical-loan.png",
    label: "Medical Loan"
  },
  {
    imageSrc: "/images/services-post-surgery-care.png",
    label: "Post Surgery Care"
  },
  {
    imageSrc: "/images/services-personal-care-assistance.png",
    label: "Care Assistance"
  }
];

export default function ServicesSection() {
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  const handleServiceClick = (service: any, e: React.MouseEvent) => {
    if (service.isModal) {
      e.preventDefault();
      setShowConsultationModal(true);
    }
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Our Services</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-col items-center group">
              <Link 
                href={service.href || "#"} 
                className="flex flex-col items-center cursor-pointer"
                onClick={(e) => handleServiceClick(service, e)}
              >
                <div className={`${service.isHighlighted ? 'w-16 h-16 shadow-md rounded-full p-1 border-2 border-red-500 animate-pulse' : 'w-12 h-12'} mb-4 group-hover:scale-105 transition duration-300`}>
                  <Image
                    src={service.imageSrc}
                    alt={service.label}
                    width={service.isHighlighted ? 64 : 48}
                    height={service.isHighlighted ? 64 : 48}
                    className="object-contain"
                  />
                </div>
                <p className={`text-gray-800 ${service.isHighlighted ? 'font-bold text-red-600' : 'font-medium'} text-center`}>{service.label}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Consultation Modal */}
      <DoctorConsultationModal 
        isOpen={showConsultationModal} 
        onClose={() => setShowConsultationModal(false)} 
      />
    </div>
  );
} 