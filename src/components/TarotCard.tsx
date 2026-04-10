import { useId, useState } from 'react'
import './TarotCard.css'

export const DEFAULT_TAROT_BACK_SRC = '/images/tarot/tarot%20card%20back.jpg'

export type TarotCardProps = {
  /** Major Arcana: `0` (Fool) or Roman numerals `I` … `XXI`. Omit when using {@link rankLabel}. */
  romanNumeral?: string
  /** Minor Arcana: top band (`I`–`X` for Ace–Ten, or Page / Knight / Queen / King). Omit when using {@link romanNumeral}. */
  rankLabel?: string
  name: string
  keywords: string[]
  /** Path under `public/`, e.g. `/images/tarot/back.jpg` */
  backImageSrc?: string
  className?: string
}

export function TarotCard({
  romanNumeral,
  rankLabel,
  name,
  keywords,
  backImageSrc = DEFAULT_TAROT_BACK_SRC,
  className = '',
}: TarotCardProps) {
  const [faceUp, setFaceUp] = useState(false)
  const labelId = useId()
  const topLabel = rankLabel ?? romanNumeral ?? ''

  return (
    <div className={`tarot-card-wrap ${className}`.trim()}>
      <button
        type="button"
        className="tarot-card"
        onClick={() => setFaceUp((v) => !v)}
        aria-pressed={faceUp}
        aria-labelledby={labelId}
      >
        <span id={labelId} className="tarot-card-sr-label">
          {faceUp
            ? `${name}, ${topLabel}. Keywords: ${keywords.join(', ')}.`
            : 'Card face down. Click to reveal.'}
        </span>
        <span
          className={`tarot-card-inner${faceUp ? ' tarot-card-inner--face-up' : ''}`}
          aria-hidden
        >
          <span className="tarot-card-face tarot-card-face--back">
            <img
              className="tarot-card-back-img"
              src={backImageSrc}
              alt=""
              draggable={false}
            />
          </span>
          <span className="tarot-card-face tarot-card-face--front">
            <span className="tarot-card-front-top">
              <span className="tarot-card-roman">{topLabel}</span>
            </span>
            <span className="tarot-card-front-main">
              <span className="tarot-card-name">{name}</span>
              <span className="tarot-card-keywords">{keywords.join(' · ')}</span>
            </span>
          </span>
        </span>
      </button>
    </div>
  )
}
