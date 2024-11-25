import { Facebook, Github, Instagram, Mail } from 'lucide-react'
import Link from 'next/link'

export default function FloatingMenu() {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50 bg-gray-900 bg-opacity-50 rounded-r-lg p-2">
      <div className="flex flex-col space-y-3">
        {[
          { icon: Github, href: 'https://github.com/AkemiFF' },
          { icon: Facebook, href: 'https://www.facebook.com/bradake.2024' },
          { icon: Instagram, href: 'https://www.instagram.com/mirado_ake/' },
          { icon: Mail, href: 'mailto:mirado.akemi@gmail.com' },
        ].map(({ icon: Icon, href }, index) => (
          <Link key={index} href={href} className="bg-gray-800 text-cyan-400 p-2 rounded-full hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
            <Icon size={20} />
          </Link>
        ))}
      </div>
    </div>
  )
}

