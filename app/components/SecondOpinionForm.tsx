"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function SecondOpinionForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [treatment, setTreatment] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      alert("Your second opinion request has been submitted successfully!");
      // Reset form
      setName("");
      setMobile("");
      setCity("");
      setTreatment("");
      setFile(null);
    }, 1000);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Get Second Opinion</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
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
          <div className="flex items-center justify-center px-3 bg-gray-100 text-gray-700 font-medium">
            +91
          </div>
          <input
            type="tel"
            placeholder="Enter your mobile number*"
            className="w-full px-4 py-3 border-0 focus:ring-blue-500 focus:outline-none"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            pattern="[0-9]{10}"
            required
          />
        </div>
        
        <div>
          <select
            className="w-full px-4 py-3 border border-gray-300 rounded-md appearance-none focus:ring-blue-500 focus:border-blue-500"
            value={city}
            onChange={(e) => setCity(e.target.value)}
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
            value={treatment}
            onChange={(e) => setTreatment(e.target.value)}
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
              onChange={handleFileChange}
              required
            />
            <div className="flex items-center justify-center w-full h-16 border-2 border-dashed border-blue-300 bg-blue-50 rounded-md">
              <div className="text-center">
                <div className="flex justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <p className="mt-1 text-xs text-gray-500">{file ? file.name : "Upload your medical report"}</p>
              </div>
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors"
          disabled={submitting}
        >
          {submitting ? "Processing..." : "Get Second Opinion"}
        </button>
        
        <p className="text-xs text-gray-600 text-center">
          *By proceeding, you agree to our <Link href="#" className="text-blue-600 hover:underline">terms and conditions</Link>
        </p>
      </form>
    </div>
  );
} 