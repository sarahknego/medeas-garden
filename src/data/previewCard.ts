import type { MajorArcanaCard } from './majorArcana'
import type { MinorArcanaCard } from './minorArcana'
import { SWORDS } from './minorArcana'

/** Card props for `TarotCard` while the full reading UI is still in progress. */
export type PreviewCard = MajorArcanaCard | MinorArcanaCard

/**
 * Which card the home page shows during development.
 * Examples: `WANDS[0]`, `CUPS[0]`, `SWORDS[0]`, `PENTACLES[0]`, `MAJOR_ARCANA[1]` (import major when needed).
 */
export const PREVIEW_CARD: PreviewCard = SWORDS[5]
