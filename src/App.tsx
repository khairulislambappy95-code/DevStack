import { useEffect, useState } from 'react'
import { Nav } from './components/nav'
import { Hero } from './components/hero'
import { Body } from './components/body'
import type { Technology } from './types'
import './index.css'

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadTechnologies() {
      try {
        const res = await fetch('/data.json')
        if (!res.ok) {
          throw new Error(`Failed to load data.json (${res.status})`)
        }
        const json: Technology[] = await res.json()
        setTechnologies(json)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }

    loadTechnologies()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      {loading && <p className="text-center py-10">Loading technologies...</p>}
      {!loading && error && <p className="text-center py-10 text-red-500">{error}</p>}
      {!loading && !error && <Body technologies={technologies} />}
    </>
  )
}

export default App
