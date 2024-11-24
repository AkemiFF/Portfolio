import Image from 'next/image'

const projects = [
  { title: 'Portfolio Redesign', description: 'Redesigned personal portfolio website with modern UI/UX features.', image: '/Projects/add1.jpg' },
  { title: 'E-Commerce Platform', description: 'Developed an E-Commerce platform using Django and Next.js for a client.', image: '/Projects/add2.jpg' },
  { title: 'Responsive Website', description: 'Created a responsive website for a startup company to showcase their services.', image: '/Projects/add3.jpg' },
  { title: 'Social Media Dashboard', description: 'Designed and developed a social media dashboard for analytics purposes.', image: '/Projects/add4.jpg' },
  { title: 'Blog Website', description: 'Built a blog website using Django framework to publish articles and stories.', image: '/Projects/add5.jpg' },
  { title: 'Travel Landing Page', description: 'Developed a responsive landing page for a travel agency with booking features.', image: '/Projects/add6.jpg' },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400 animate-glow">Latest <span className="text-gray-100">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/50 animate-fade-in">
              <Image src={project.image} alt={project.title} width={400} height={300} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

