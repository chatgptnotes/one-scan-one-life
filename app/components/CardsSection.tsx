"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function CardsSection() {
  const cards = [
    {
      title: "Find Doctor",
      description: "Find the right doctor based on your needs and preferences",
      icon: "/images/doctor-icon.svg",
      link: "/find-doctor"
    },
    {
      title: "Book Appointment",
      description: "Schedule an appointment with your doctor of choice",
      icon: "/images/appointment-icon.svg",
      link: "/book-appointment"
    },
    {
      title: "Second Opinion",
      description: "Get a second medical opinion from our specialist doctors",
      icon: "/images/opinion-icon.svg",
      link: "/second-opinion"
    },
    {
      title: "Video Consultation",
      description: "Consult with doctors remotely from the comfort of your home",
      icon: "/images/video-icon.svg",
      link: "/video-consultation"
    }
  ]

  return (
    <section className="relative z-10 pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Link href={card.link} key={index} className="block h-full">
              <div 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 h-full flex flex-col transform hover:-translate-y-1"
                style={{ boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
              >
                <div className="mb-5 p-4 bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={28}
                    height={28}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 flex-grow text-sm">{card.description}</p>
                <div className="mt-5 flex items-center text-blue-600 font-medium">
                  <span>Learn more</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 