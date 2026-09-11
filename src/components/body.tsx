import { Cards } from './cards'
import { YourStack } from './YourStack'
import type { Technology } from '../types'

interface BodyProps {
  technologies: Technology[]
}

export function Body({ technologies }: BodyProps) {
  return (
    <main>
      <section>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Explore the <span className="bg-linear-to-r from-orange-400 via-pink-500 to-purple-800 inline-block text-transparent bg-clip-text">Technologies</span></h2>
          <p className="text-lg text-gray-600">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
      </section>
      <div>
        <Cards technologies={technologies} />
        <YourStack />
      </div>
    </main>
  )
}
