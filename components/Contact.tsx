'use client'

import { Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('sent')
      // Reset form fields here if needed
    }, 2000)
  }

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-sm py-20 px-4">
      <div className="container mx-auto max-w-md">
        <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400 animate-glow">
          Contact <span className="text-gray-100">Us</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          <div>
            <label htmlFor="name" className="block text-gray-300 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-100 transition-all duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-300 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-100 transition-all duration-300"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-300 font-bold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-100 transition-all duration-300"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full bg-cyan-500 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center ${formStatus === 'sending' ? 'animate-pulse' : ''}`}
            disabled={formStatus === 'sending' || formStatus === 'sent'}
          >
            {formStatus === 'idle' && (
              <>
                <Send className="mr-2" size={18} />
                Send Message
              </>
            )}
            {formStatus === 'sending' && 'Sending...'}
            {formStatus === 'sent' && 'Message Sent!'}
            {formStatus === 'error' && 'Error. Try Again.'}
          </button>
        </form>
        {formStatus === 'sent' && (
          <p className="mt-4 text-center text-green-400 animate-fade-in">Thank you for your message. We&apos;ll get back to you soon!</p>
        )}
      </div>
    </section>
  )
}

