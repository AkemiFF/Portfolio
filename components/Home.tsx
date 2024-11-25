import { ChevronDown, Facebook, Github, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm p-4 sm:p-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-gray-100 mb-8 lg:mb-0 pr-0 lg:pr-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-2 animate-fade-in-up">Hello, it&apos;s me</h3>
          <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-4 animate-glow">Brad Mirado</h1>
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            And I am a <span className="text-cyan-400 animate-pulse">Developer</span>
          </h3>
          <p className="text-base sm:text-lg mb-6 animate-fade-in opacity-80">
            Welcome to my website! I am passionate about programming and web development.
            My goal is to create interactive and user-friendly web applications according to your needs.
          </p>
          <p className="text-base sm:text-lg mb-6 animate-fade-in opacity-80">
            Feel free to explore my site to discover my projects and skills. If you have any questions or
            would like to collaborate, don&apos;t hesitate to contact me.
          </p>
          <Link
            href="https://github.com/AkemiFF/cv-brad-mirado/archive/refs/heads/main.zip"
            className="inline-block bg-cyan-500 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 animate-bounce"
          >
            Download CV
          </Link>
          <div className="flex space-x-4 mt-6">
            {[
              { icon: Github, href: 'https://github.com/AkemiFF' },
              { icon: Facebook, href: 'https://www.facebook.com/bradake.2024' },
              { icon: Instagram, href: 'https://www.instagram.com/mirado_ake/' },
              { icon: Youtube, href: 'https://www.youtube.com/channel/UCHUrgV1y72UZkqoczia1_lQ' },
            ].map(({ icon: Icon, href }, index) => (
              <Link
                key={index}
                href={href}
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon size={24} className="animate-float" style={{ animationDelay: `${index * 0.1}s` }} />
              </Link>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float">
            <Image
              src="/Me/profil.jpg"
              alt="Profile of Brad Mirado"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-4 border-cyan-400"
            />
            <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping-slow opacity-30"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <Link href="#about" aria-label="Scroll to About section">
          <ChevronDown size={32} className="text-cyan-400" />
        </Link>
      </div>
    </section>
  )
}

