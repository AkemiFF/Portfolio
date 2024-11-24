import { Code, Layout, Palette } from 'lucide-react'

const services = [
  {
    title: 'Web Designer',
    description: 'As a web designer, I create visually appealing and user-friendly websites. I focus on designing layouts, graphics, and user interfaces that enhance the user experience.',
    icon: Layout,
  },
  {
    title: 'Web Developer',
    description: 'As a web developer, I specialize in building interactive and responsive websites. I work with various programming languages and frameworks to bring designs to life and ensure functionality.',
    icon: Code,
  },
  {
    title: 'Graphic Designer',
    description: 'As a graphic designer, I create visually stunning graphics and illustrations for websites, branding, and marketing materials. I focus on creating captivating designs that communicate effectively.',
    icon: Palette,
  },
]

export default function Services() {
  return (
    <section id="service" className="min-h-screen flex flex-col justify-center bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm p-4 sm:p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400 animate-glow">Our <span className="text-gray-100">Services</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/50 animate-float">
              <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
              <button className="mt-4 bg-cyan-500 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-cyan-400 transition-colors duration-300">Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

