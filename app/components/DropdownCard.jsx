'use client'
import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

/**
 * @param {{
 *   title: string,
 *   description: string[],
 *   tags?: string[]
 * }} props
 */
export default function DropdownCard({
  title,
  description = [],
  tags = [],
}) {
  const [open, setOpen] = useState(true)

  return (
    <div className="
      group w-full
      px-4 

      transition-all

    ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left"
      >
        <h3 className="text-2xl title font-light text-gray-200">
          {title}
        </h3>

        <FaChevronDown
          className={`
            text-gray-400
            transition-transform duration-200
            group-hover:text-cyan-300
            ${open ? 'rotate-180' : ''}
          `}
        />
      </button>

      <div className={`
        grid transition-all duration-300 ease-in-out
        ${open ? 'grid-rows-[1fr] mt-4' : 'grid-rows-[0fr]'}
      `}>
        <div className="overflow-hidden space-y-3">
          
        {description.map((line, index) => (
          <p key={index} className="text-sm text-gray-100 subtitle text-lg">
            - {line}
          </p>
        ))}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
