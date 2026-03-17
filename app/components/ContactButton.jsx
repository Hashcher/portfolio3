
import {FaArrowRight } from 'react-icons/fa'
export default function ContactButton() {
  return (
    <a
      href="mailto:elchinou.bz@gmail.com"
      className="
        inline-flex items-center gap-3
        px-10 py-5
        border border-gray-400
        text-gray-200
        transition-all duration-200
        hover:text-cyan-300
        hover:border-cyan-300
        hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]
        group
      "
    >
      <span className="text-lg tracking-wide uppercase title">
        Get In Touch
      </span>

      <FaArrowRight
        className="
          text-sm
          transition-transform duration-200
          group-hover:translate-x-3
        "
      />
    </a>
  )
}
