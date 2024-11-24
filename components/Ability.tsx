'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const skills = [
  { name: 'HTML', percentage: 95 },
  { name: 'CSS', percentage: 88 },
  { name: 'JS', percentage: 88 },
  { name: 'PHP', percentage: 45 },
  { name: 'Python', percentage: 88 },
  { name: 'Ajax', percentage: 25 },
  { name: 'GIT', percentage: 95 },
  { name: 'NodeJS', percentage: 45 },
  { name: 'SQL', percentage: 75 },
  { name: 'Django', percentage: 75 },
]

export default function Ability() {
  const [currentPage, setCurrentPage] = useState(0)
  const [focusedSkill, setFocusedSkill] = useState<string | null>(null)
  const [itemsPerPage, setItemsPerPage] = useState(5)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 768) {
        setItemsPerPage(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(3)
      } else {
        setItemsPerPage(5)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalPages = Math.ceil(skills.length / itemsPerPage)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const currentSkills = skills.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  )

  return (
    <section id="ability" className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm py-20">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400 animate-glow">
          My <span className="text-gray-100">Abilities</span>
        </h2>
        <div className="flex items-center justify-center">
          <button
            onClick={prevPage}
            className="flex justify-center items-center h-12 w-12 rounded-full bg-cyan-500 text-gray-900 hover:bg-cyan-400 transition-colors duration-300 animate-pulse mr-4"
            aria-label="Previous page"
          >
            <ChevronLeft size={24} />
          </button>
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center`}>
            {currentSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex flex-col items-center animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setFocusedSkill(skill.name)}
                onMouseLeave={() => setFocusedSkill(null)}
              >
                <div className="w-24 h-24 mb-4 relative group">
                  <div className="absolute inset-0 bg-cyan-400 rounded-full animate-ping-slow opacity-75"></div>
                  <div className="relative z-10">
                    <CircularProgressbar
                      value={skill.percentage}
                      text={`${skill.percentage}%`}
                      styles={buildStyles({
                        textSize: '22px',
                        pathColor: focusedSkill === skill.name ? '#22d3ee' : `rgba(34, 211, 238, ${skill.percentage / 100})`,
                        textColor: '#ffffff',
                        trailColor: '#1f2937',
                        pathTransitionDuration: 1,
                      })}
                    />
                  </div>
                  <div
                    className={`absolute inset-0 rounded-full transition-opacity duration-300 ${focusedSkill === skill.name ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      background: 'radial-gradient(circle, rgba(34,211,238,0.2) 0%, rgba(34,211,238,0) 70%)',
                    }}
                  ></div>
                </div>
                <p className="text-center font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={nextPage}
            className="flex justify-center items-center h-12 w-12 rounded-full bg-cyan-500 text-gray-900 hover:bg-cyan-400 transition-colors duration-300 animate-pulse ml-4"
            aria-label="Next page"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${currentPage === index ? 'bg-cyan-400 w-4' : 'bg-gray-600'
                }`}
              aria-label={`Go to page ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  )
}

