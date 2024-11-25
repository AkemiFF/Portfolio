import { X } from 'lucide-react'

interface ServiceDialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
}

export default function ServiceDialog({ isOpen, onClose, title, content }: ServiceDialogProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-cyan-400">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            <X size={24} />
          </button>
        </div>
        <p className="text-gray-300">{content}</p>
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

