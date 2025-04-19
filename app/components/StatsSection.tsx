"use client"

export default function StatsSection() {
  return (
    <div className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Best Care Guaranteed</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-8 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              <div className="text-4xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600 font-medium">NABH Hospitals</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <div className="text-4xl font-bold text-gray-900">1500+</div>
              <div className="text-gray-600 font-medium">Expert Doctors</div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-500 mb-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div className="text-4xl font-bold text-gray-900">25000+</div>
              <div className="text-gray-600 font-medium">Happy Patients</div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-4 gap-8">
          <div className="flex justify-center">
            <img src="/images/yourstory.png" alt="YourStory" className="h-8 opacity-60" />
          </div>
          <div className="flex justify-center">
            <img src="/images/economic-times.png" alt="Economic Times" className="h-8 opacity-60" />
          </div>
          <div className="flex justify-center">
            <img src="/images/inc42.png" alt="Inc42" className="h-8 opacity-60" />
          </div>
          <div className="flex justify-center">
            <img src="/images/cnbc.png" alt="CNBC" className="h-8 opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
} 