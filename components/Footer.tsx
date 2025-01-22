import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div>
          <p>Created by <Link href="https://github.com/AkemiFF" className="text-cyan-400 hover:underline">BradAke</Link></p>
          <p>&copy; 2024 NexusCraft.</p>
        </div>
        <Link href="https://nexuscraft.onrender.com" className="flex items-center space-x-2 mt-4 md:mt-0">
          <Image src="/logoX.png" alt="logo" width={40} height={40} />
          <span className="text-cyan-400 font-bold">NexusCraft</span>
        </Link>
      </div>
    </footer>
  )
}

