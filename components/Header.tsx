"use client"
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg text-gray-100 z-50 px-4 py-3">
      <div className="flex items-center justify-between">
        <Image src="/logo.png" alt="Logo" width={60} height={60} className="transition-transform duration-300 hover:scale-110" />
        <button
          className="md:hidden text-cyan-400 hover:text-cyan-300"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
            {['Home', 'About', 'Ability', 'Portfolio', 'Service'].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block text-cyan-400 hover:text-cyan-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-cyan-900 hover:bg-opacity-30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

