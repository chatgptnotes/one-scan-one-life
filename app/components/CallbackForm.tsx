"use client"

import { useState } from 'react'

export default function CallbackForm() {
  const [name, setName] = useState('')
  const [contactNo, setContactNo] = useState('')
  const [submitting, setSubmitting] = useState(false)
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    
    // Here you would add logic to submit the form to your API
    // For example using fetch or axios
    
    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      alert('Thank you! We will call you back shortly.')
      setName('')
      setContactNo('')
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }
  
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8 max-w-md w-full mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          GET A CALL BACK
        </h2>
        
        <div className="flex items-center justify-center mt-2">
          <span className="text-4xl font-bold text-black">IN</span>
          <div className="relative mx-2">
            <div className="bg-red-500 w-14 h-14 rounded-full flex items-center justify-center">
              <span className="text-white text-4xl font-bold">5</span>
            </div>
          </div>
          <span className="text-4xl font-bold text-black">SECONDS</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="NAME*"
            className="w-full px-3 py-3 border-b-2 border-gray-300 text-gray-700 focus:outline-none focus:border-cyan-500"
          />
        </div>
        
        <div>
          <input
            id="contactNo"
            name="contactNo"
            type="tel"
            required
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            placeholder="CONTACT NO.*"
            pattern="[0-9]{10}"
            className="w-full px-3 py-3 border-b-2 border-gray-300 text-gray-700 focus:outline-none focus:border-cyan-500"
          />
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="flex items-center justify-between bg-gradient-to-r from-black to-black hover:to-gray-800 text-white font-medium rounded-full px-8 py-3 min-w-32 transition-all duration-300"
          >
            <span className="mr-4">SUBMIT</span>
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </button>
        </div>
      </form>
    </div>
  )
} 