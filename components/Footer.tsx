import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div>
          <p>Created by <a href="https://github.com/AkemiFF" className="text-cyan-400 hover:underline">AkemiKun</a></p>
          <p>&copy; 2024 AkemiKey, Brad.</p>
        </div>
        <Link href="https://github.com/AkemiFF" className="flex items-center space-x-2 mt-4 md:mt-0">
          <Image src="/logo.png" alt="logo" width={40} height={40} className="animate-spin-slow" />
          <span className="text-cyan-400 font-bold">AkemiKey</span>
        </Link>
      </div>
    </footer>
  )
}

