import './App.css'
import type { CSSProperties } from 'react'

const INSTAGRAM_URL = 'https://www.instagram.com/medeas.garden/'
const LEAF_COLOR = '#5f704c'
const LEAF_COUNT = 52
const SPARKLE_COLOR = '#d5cfe7'
const SPARKLE_COUNT = 68

function FloatingSparkles() {
  return (
    <div className="garden-sparkles" aria-hidden>
      {Array.from({ length: SPARKLE_COUNT }, (_, i) => {
        const left = ((i * 41 + 7) % 94) + 3
        const duration = 12 + (i % 11) + (i % 4) * 0.5
        const delay = -((i * 0.95) % 20)
        const drift = ((i % 15) - 7) * 16
        const wobble = ((i % 5) - 2) * 0.4
        const scale = 0.45 + ((i % 6) * 0.09)
        const sparkleOpacity = 0.3 + (((i * 17 + 13) % 11) / 100)

        const style = {
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          '--sparkle-drift': `${drift}px`,
          '--sparkle-wobble': `${wobble}turn`,
          '--sparkle-scale': String(scale),
          '--sparkle-opacity': String(sparkleOpacity),
        } as CSSProperties

        return (
          <span key={i} className="garden-sparkle" style={style}>
            <svg
              className="garden-sparkle-svg"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={SPARKLE_COLOR}
                d="M8 0 9.2 5.5 15 8 9.2 10.5 8 16 6.8 10.5 1 8 6.8 5.5Z"
              />
            </svg>
          </span>
        )
      })}
    </div>
  )
}

function FallingLeaves() {
  return (
    <div className="garden-leaves" aria-hidden>
      {Array.from({ length: LEAF_COUNT }, (_, i) => {
        const left = ((i * 37 + 11) % 92) + 4
        const duration = 10 + (i % 9) + (i % 3) * 0.7
        const delay = -((i * 1.1) % 22)
        const drift = ((i % 13) - 6) * 14
        const rotation = ((i % 9) - 4) * 0.85
        const scale = 0.55 + ((i % 5) * 0.12)
        const leafOpacity = 0.4 + (((i * 23 + 7) % 11) / 100)

        const style = {
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          '--leaf-drift': `${drift}px`,
          '--leaf-rot': `${rotation}turn`,
          '--leaf-scale': String(scale),
          '--leaf-opacity': String(leafOpacity),
        } as CSSProperties

        return (
          <span key={i} className="garden-leaf" style={style}>
            <svg
              className="garden-leaf-svg"
              viewBox="0 0 24 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill={LEAF_COLOR}
                d="M12 2C5 10 4 22 12 30 20 22 19 10 12 2Z"
              />
            </svg>
          </span>
        )
      })}
    </div>
  )
}

function InstagramIcon() {
  return (
    <svg
      className="garden-instagram-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
      />
    </svg>
  )
}

function App() {
  return (
    <main className="garden-page">
      <FloatingSparkles />
      <FallingLeaves />
      <div className="garden-text-vignette" aria-hidden />
      <div className="garden-content">
        <h1 className="garden-title">Medea's Garden</h1>
        <p className="garden-sub">Something stirs in the garden...</p>
        <p className="garden-sub">Coming soon!</p>
        <a
          className="garden-instagram"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon />
          Instagram
        </a>
      </div>
    </main>
  )
}

export default App
