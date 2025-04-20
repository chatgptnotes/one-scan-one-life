"use client"

import { useState } from "react";
import Link from "next/link";

interface DoctorConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DoctorConsultationModal({ isOpen, onClose }: DoctorConsultationModalProps) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [treatment, setTreatment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      alert("Your consultation request has been submitted successfully!");
      onClose();
      // Reset form
      setName("");
      setMobile("");
      setCity("");
      setTreatment("");
    }, 1000);
  };

  const cities = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Nagpur"];
  const treatments = ["General Consultation", "Cardiology", "Orthopedics", "Neurology", "Gynecology", "Pediatrics", "Dermatology", "Ophthalmology"];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        
        <div className="relative inline-block w-full max-w-md p-6 mx-auto bg-white rounded-lg shadow-xl">
          <button 
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-500"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Book Doctor Consultation</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Enter your name*"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <div className="flex items-center justify-center px-3 bg-gray-100 text-gray-700 font-semibold">
                +91
              </div>
              <input
                type="tel"
                placeholder="Enter your mobile number*"
                className="w-full px-4 py-3 border-l border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                pattern="[0-9]{10}"
                required
              />
            </div>
            
            <div>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 appearance-none"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              >
                <option value="" disabled>Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            
            <div>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 appearance-none"
                value={treatment}
                onChange={(e) => setTreatment(e.target.value)}
                required
              >
                <option value="" disabled>Select Treatment</option>
                {treatments.map((treatment) => (
                  <option key={treatment} value={treatment}>{treatment}</option>
                ))}
              </select>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors"
              disabled={submitting}
            >
              {submitting ? "Processing..." : "Book Appointment"}
            </button>
            
            <p className="text-sm text-gray-600">
              *By proceeding, you agree to our <Link href="#" className="text-blue-600 hover:underline">terms and conditions</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
} 