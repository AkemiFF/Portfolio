import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 min-h-screen  flex justify-center bg-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <Image src="/Me/image.jpg" alt="About Me" width={300} height={300} className="rounded-lg shadow-lg border-2 border-cyan-400 animate-float" />
        </div>
        <div className="md:w-2/3 md:pl-12">
          <h2 className="text-4xl font-bold mb-4 text-cyan-400 animate-glow">About <span className="text-gray-100">Me</span></h2>
          <h3 className="text-2xl font-semibold mb-4 text-gray-300">Programmer - Frontend Developer</h3>
          <p className="mb-4 text-gray-400 animate-fade-in">I am a student at ESMIA, Mahamasina, Antananarivo, Madagascar.</p>
          <p className="mb-6 text-gray-400 animate-fade-in">My specialization is in programming and web application development, and I am currently
            undergoing training in IRD (Computer Science, Risk, and Decision) in my third year of the bachelor&apos;s degree (L3).</p>
          <button className="bg-cyan-500 text-gray-900 px-6 py-2 rounded-full hover:bg-cyan-400 transition-colors duration-300 animate-pulse">Learn More</button>
        </div>
      </div>
    </section>
  )
}

