import { X } from 'lucide-react'

interface AboutDialogProps {
  isOpen: boolean
  onClose: () => void
}

export default function AboutDialog({ isOpen, onClose }: AboutDialogProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-cyan-400">More About Brad Mirado</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>
        <div className="text-gray-300 space-y-4">
          <p>
            As a Full Stack Developer in training, I&apos;m passionate about creating robust, scalable web applications that solve real-world problems. My journey in tech began with a fascination for how digital solutions can transform lives and businesses.
          </p>
          <p>
            Currently, I&apos;m specializing in IRD (Computer Science, Risk, and Decision) in my third year at ESMIA. This program has equipped me with a strong foundation in algorithmic thinking, data structures, and software engineering principles.
          </p>
          <h4 className="text-xl font-semibold text-cyan-400 mt-6 mb-2">Technical Skills:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Frontend: HTML5, CSS3, JavaScript (ES6+), React.js</li>
            <li>Backend: Node.js, Express.js, Python</li>
            <li>Databases: MongoDB, MySQL</li>
            <li>Tools & Others: Git, RESTful APIs, Agile Methodologies</li>
          </ul>
          <h4 className="text-xl font-semibold text-cyan-400 mt-6 mb-2">What Drives Me:</h4>
          <p>
            I&apos;m driven by the challenge of turning complex problems into simple, elegant solutions. I believe in writing clean, maintainable code and am always eager to learn new technologies and best practices in the ever-evolving world of web development.
          </p>
          <p>
            When I&apos;m not coding, you can find me exploring new tech trends, contributing to open-source projects, or mentoring aspiring developers. I&apos;m always open to new opportunities and collaborations that can help me grow as a developer and make a positive impact.
          </p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-cyan-500 text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-cyan-400 transition-colors duration-300 w-full"
        >
          Close
        </button>
      </div>
    </div>
  )
}

