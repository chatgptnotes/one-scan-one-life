"use client"

export default function AnohraSection() {
  return (
    <div className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold">
              <span className="text-cyan-600">Anohra:</span> Your Personal
              <br />
              HealthCare Companion
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Ask any health query to your personal healthcare assistant for
              tailor-made assistance and guidance 24x7.
            </p>
          </div>
          
          <div className="mt-12 lg:mt-0 lg:ml-8 flex justify-center">
            <div className="w-64 h-64 relative">
              <img
                src="/images/healthgpt.png"
                alt="Anohra Assistant"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 