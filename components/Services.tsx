'use client'

import { Code, Database, Server } from 'lucide-react'
import { useState } from 'react'
import ServiceDialog from './ServiceDialog'

const services = [
  {
    title: 'Frontend Development',
    description: 'Creating responsive and interactive user interfaces using modern web technologies.',
    icon: Code,
    details: 'Expertise in HTML5, CSS3, JavaScript (ES6+), and popular frameworks like React, Vue, or Angular. Proficient in creating responsive designs, implementing complex UI components, and optimizing frontend performance.'
  },
  {
    title: 'Backend Development',
    description: 'Building robust server-side applications and APIs to power web applications.',
    icon: Server,
    details: 'Skilled in server-side languages such as Node.js, Python, or Java. Experienced in designing RESTful APIs, implementing authentication and authorization, and integrating with various databases and third-party services.'
  },
  {
    title: 'Database Management',
    description: 'Designing and optimizing database structures for efficient data storage and retrieval.',
    icon: Database,
    details: 'Proficient in both SQL (e.g., PostgreSQL, MySQL) and NoSQL (e.g., MongoDB, Redis) databases. Experienced in database design, optimization, and implementing data models that scale with application growth.'
  },
]

export default function Services() {
  const [openDialog, setOpenDialog] = useState<number | null>(null)

  return (
    <section id="service" className="py-20 bg-gray-900 bg-opacity-50 text-gray-100 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400 animate-glow">Our <span className="text-gray-100">Services</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/50 animate-float">
              <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <button
                className="mt-4 bg-cyan-500 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-cyan-400 transition-colors duration-300"
                onClick={() => setOpenDialog(index)}
              >
                Read More
              </button>
              <ServiceDialog
                isOpen={openDialog === index}
                onClose={() => setOpenDialog(null)}
                title={service.title}
                content={service.details}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

