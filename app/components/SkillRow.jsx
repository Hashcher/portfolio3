'use client'

export default function SkillRow({ skill, level, color = 'bg-gray-200' }) {
  return (
    <div className="  flex items-center justify-between
  w-full px-4 py-3
  rounded-xl
  border border-gray-700
  bg-gray-900/40

  transition-all duration-200
  hover:-translate-y-1
  hover:border-gray-500
  hover:bg-gray-900/70">
      <span className="text-sm text-gray-200 font-light">
        {skill}
      </span>

      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i <= level ? color : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
