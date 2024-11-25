'use client'

import Image from 'next/image'
import { useState } from 'react'
import AboutDialog from './AboutDialog'

export default function About() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <div className="relative w-64 h-64 mx-auto lg:w-80 lg:h-80">
              <Image
                src="/Me/image.jpg"
                alt="About Me"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-cyan-400 shadow-lg animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping-slow opacity-30"></div>
            </div>
          </div>
          <div className="lg:w-2/3 lg:pl-12 text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400 animate-glow">
              About <span className="text-gray-100">Me</span>
            </h2>
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">
              Full Stack Developer | Problem Solver | Tech Enthusiast
            </h3>
            <p className="mb-4 text-gray-300 animate-fade-in">
              Hello! I&apos;m Brad Mirado, a passionate Full Stack Developer currently pursuing my bachelor&apos;s degree in Computer Science at ESMIA, Antananarivo, Madagascar.
            </p>
            <p className="mb-6 text-gray-300 animate-fade-in">
              With a focus on creating seamless, user-centric web applications, I blend creativity with technical expertise to bring ideas to life. My journey in tech is driven by a constant desire to learn and innovate.
            </p>
            <button
              className="bg-cyan-500 text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 animate-pulse"
              onClick={() => setIsDialogOpen(true)}
            >
              Learn More
            </button>
            <AboutDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
          </div>
        </div>
      </div>
    </section>
  )
}

