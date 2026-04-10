import './App.css'
import type { CSSProperties } from 'react'
import { useState } from 'react'
import { TarotCard } from './components/TarotCard'
import { drawUniqueCards } from './data/fullDeck'
import type { PreviewCard } from './data/previewCard'

const LEAF_COLOR = '#5f704c'
const LEAF_COUNT = 52
const SPARKLE_COLOR = '#d5cfe7'
const SPARKLE_COUNT = 68

type SpreadSize = 1 | 3 | 5

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

function App() {
  const [spreadSize, setSpreadSize] = useState<SpreadSize | null>(null)
  const [drawnCards, setDrawnCards] = useState<PreviewCard[]>([])

  function chooseSpread(size: SpreadSize) {
    setSpreadSize(size)
    setDrawnCards(drawUniqueCards(size))
  }

  function clearSpread() {
    setSpreadSize(null)
    setDrawnCards([])
  }

  return (
    <main className="garden-page">
      <FloatingSparkles />
      <FallingLeaves />
      <div className="garden-text-vignette" aria-hidden />
      <div className="garden-content">
        <h1 className="garden-title">Medea's Garden</h1>
        <p className="garden-sub">
          Step into the garden and receive your fortune...
        </p>

        {spreadSize === null ? (
          <div className="garden-spread-picker">
            <p className="garden-spread-prompt" id="spread-label">
              Ask your question:
            </p>
            <div
              className="garden-spread-buttons"
              role="group"
              aria-labelledby="spread-label"
            >
              <button
                type="button"
                className="garden-spread-option"
                onClick={() => chooseSpread(1)}
              >
                One Card
              </button>
              <button
                type="button"
                className="garden-spread-option"
                onClick={() => chooseSpread(3)}
              >
                Three Cards
              </button>
              <button
                type="button"
                className="garden-spread-option"
                onClick={() => chooseSpread(5)}
              >
                Five Cards
              </button>
            </div>
          </div>
        ) : (
          <>
            <div
              className="garden-spread-cards"
              data-count={String(spreadSize)}
            >
              {drawnCards.map((card, index) => (
                <TarotCard
                  key={`${card.name}-${index}`}
                  {...card}
                />
              ))}
            </div>
            <button
              type="button"
              className="garden-spread-change"
              onClick={clearSpread}
            >
              Choose a different spread
            </button>
          </>
        )}
      </div>
    </main>
  )
}

export default App
