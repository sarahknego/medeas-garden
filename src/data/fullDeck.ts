import { MAJOR_ARCANA } from './majorArcana'
import { CUPS, PENTACLES, SWORDS, WANDS } from './minorArcana'
import type { PreviewCard } from './previewCard'

/** All 78 cards: Major Arcana + four suits. */
export const FULL_DECK: PreviewCard[] = [
  ...MAJOR_ARCANA,
  ...WANDS,
  ...CUPS,
  ...SWORDS,
  ...PENTACLES,
]

/** Shuffle a copy of the deck and take the first `count` cards (no duplicates). */
export function drawUniqueCards(count: number): PreviewCard[] {
  if (count < 1 || count > FULL_DECK.length) {
    throw new RangeError(
      `drawUniqueCards: count must be between 1 and ${FULL_DECK.length}`,
    )
  }
  const deck = [...FULL_DECK]
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[deck[i], deck[j]] = [deck[j]!, deck[i]!]
  }
  return deck.slice(0, count)
}

export function randomCardFromFullDeck(): PreviewCard {
  return drawUniqueCards(1)[0]!
}
