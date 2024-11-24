export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400 animate-glow">Contact <span className="text-gray-100">Us</span></h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-300 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-100" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-100" required />
          </div>
<div className="mb-4">
            <label htmlFor="message" className="block text-gray-300 font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows={5} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-gray-100" required></textarea>
          </div>
          <button type="submit" className="bg-cyan-500 text-gray-900 px-6 py-3 rounded-full font-bold hover:bg-cyan-400 transition-colors duration-300 animate-pulse">Send Message</button>
        </form>
      </div>
    </section>
  )
}

