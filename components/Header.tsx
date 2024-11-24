import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-lg text-gray-100 z-50 px-4 py-3 flex items-center justify-between">
      <Image src="/logo.png" alt="Logo" width={60} height={60} className="transition-transform duration-300 hover:scale-110" />
      <nav>
        <ul className="flex space-x-4">
          {['Home', 'About', 'Ability', 'Portfolio', 'Service'].map((item) => (
            <li key={item}>
              <Link 
                href={`#${item.toLowerCase()}`} 
                className="text-cyan-400 hover:text-cyan-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-cyan-900 hover:bg-opacity-30"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

