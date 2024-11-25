import FloatingMenu from '@/components/FloatingMenu'
import Header from '@/components/Header'
import MatrixRain from '@/components/MatrixRain'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akemi Portfolio',
  description: 'Portfolio of Brad Mirado, a FullStack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-transparent text-gray-100`}>
        <MatrixRain />
        <Header />
        <FloatingMenu />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  )
}