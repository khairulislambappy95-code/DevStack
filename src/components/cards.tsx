import type { Technology } from '../types'

interface CardsProps {
  technologies: Technology[]
}

export function Cards({ technologies }: CardsProps) {
  return (
    <div className="container mx-auto px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <div key={tech.id} className="card bg-white shadow-md rounded-xl p-6 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
            <span className="badge badge-secondary">{tech.badge}</span>
          </div>
          <h3 className="text-xl font-bold">{tech.name}</h3>
          <p className="text-sm text-gray-500">{tech.category}</p>
          <p className="text-gray-700">{tech.description}</p>
          <div className="flex items-center justify-between mt-auto pt-3">
            <span className="text-sm font-medium">⭐ {tech.rating}</span>
            <span className="text-sm text-gray-500">{tech.difficulty}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
