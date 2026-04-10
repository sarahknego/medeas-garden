/**
 * Wands suit. Source format (blocks):
 *
 *   <NAME LINE>
 *   <keyword, keyword, ...>
 */
export type MinorArcanaCard = {
  /** Top band: Roman numerals `I`–`X` for Ace–Ten; court cards use Page, Knight, Queen, King. */
  rankLabel: string
  name: string
  keywords: string[]
}

export const WANDS: MinorArcanaCard[] = [
  {
    rankLabel: 'I',
    name: 'Ace of Wands',
    keywords: ['Creation', 'Willpower', 'Inspiration', 'Desire'],
  },
  {
    rankLabel: 'II',
    name: 'Two of Wands',
    keywords: ['Planning', 'Making Decisions', 'Leaving Home'],
  },
  {
    rankLabel: 'III',
    name: 'Three of Wands',
    keywords: ['Looking Ahead', 'Expansion', 'Rapid Growth'],
  },
  {
    rankLabel: 'IV',
    name: 'Four of Wands',
    keywords: ['Community', 'Home', 'Celebration'],
  },
  {
    rankLabel: 'V',
    name: 'Five of Wands',
    keywords: ['Competition', 'Conflict', 'Reality'],
  },
  {
    rankLabel: 'VI',
    name: 'Six of Wands',
    keywords: ['Victory', 'Success', 'Public Reward'],
  },
  {
    rankLabel: 'VII',
    name: 'Seven of Wands',
    keywords: ['Perseverance', 'Mounting A Defense', 'Maintaining Control'],
  },
  {
    rankLabel: 'VIII',
    name: 'Eight of Wands',
    keywords: ['Rapid Action', 'Movement', 'Quick Decisions'],
  },
  {
    rankLabel: 'IX',
    name: 'Nine of Wands',
    keywords: ['Resilience', 'Grit', 'Taking Last Stand'],
  },
  {
    rankLabel: 'X',
    name: 'Ten of Wands',
    keywords: ['Accomplishment', 'Responsibility', 'Burden'],
  },
  {
    rankLabel: 'Page',
    name: 'Page of Wands',
    keywords: ['Exploration', 'Excitement', 'Freedom'],
  },
  {
    rankLabel: 'Knight',
    name: 'Knight of Wands',
    keywords: ['Action', 'Adventure', 'Fearlessness'],
  },
  {
    rankLabel: 'Queen',
    name: 'Queen of Wands',
    keywords: ['Courage', 'Determination', 'Passion', 'Joy'],
  },
  {
    rankLabel: 'King',
    name: 'King of Wands',
    keywords: ['Big Picture', 'Leader', 'Overcoming Challenges'],
  },
]
