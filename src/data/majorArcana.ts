/**
 * Major Arcana card copy. Source format (blocks):
 *
 *   <roman or 0>
 *   <NAME LINE>
 *   <keyword, keyword, ...>
 *
 * Parsed into {@link MajorArcanaCard} for {@link TarotCard}.
 */
export type MajorArcanaCard = {
  romanNumeral: string
  name: string
  keywords: string[]
}

/** Twenty-two trumps in order (The Fool … The World). */
export const MAJOR_ARCANA: MajorArcanaCard[] = [
  {
    romanNumeral: '0',
    name: 'The Fool',
    keywords: ['Innocence', 'New Beginnings', 'Wonder', 'Foolishness'],
  },
  {
    romanNumeral: 'I',
    name: 'The Magician',
    keywords: ['Willpower', 'Creation', 'Mastery', 'Adaptation'],
  },
  {
    romanNumeral: 'II',
    name: 'The High Priestess',
    keywords: [
      'Inner Voice',
      'Intuition',
      'Divine Truth',
      'Wisdom',
      'Unconscious',
    ],
  },
  {
    romanNumeral: 'III',
    name: 'The Empress',
    keywords: ['Beauty', 'Fertility', 'Nurturing', 'Luxury', 'Creativity'],
  },
  {
    romanNumeral: 'IV',
    name: 'The Emperor',
    keywords: ['Structure', 'Ambition', 'Authority', 'Rationality'],
  },
  {
    romanNumeral: 'V',
    name: 'The Hierophant',
    keywords: ['Tradition', 'Legacy', 'Society', 'Organized Religion'],
  },
  {
    romanNumeral: 'VI',
    name: 'The Lovers',
    keywords: ['Choices', 'Union', 'Love', 'Relationship'],
  },
  {
    romanNumeral: 'VII',
    name: 'The Chariot',
    keywords: ['Self Control', 'Discipline', 'Success'],
  },
  {
    romanNumeral: 'VIII',
    name: 'Strength',
    keywords: ['Courage', 'Inner Strength', 'Conviction', 'Compassion'],
  },
  {
    romanNumeral: 'IX',
    name: 'The Hermit',
    keywords: ['Contemplation', 'Solitude', 'Insight', 'Awareness'],
  },
  {
    romanNumeral: 'X',
    name: 'Wheel of Fortune',
    keywords: ['Fate', 'Karma', 'Destiny', 'Fortune', 'Cycles'],
  },
  {
    romanNumeral: 'XI',
    name: 'Justice',
    keywords: ['Truth', 'Fairness', 'Law', 'Clarity', 'Cause and Effect'],
  },
  {
    romanNumeral: 'XII',
    name: 'The Hanged Man',
    keywords: ['Sacrifice', 'Suspension', 'Release', 'Martyrdom'],
  },
  {
    romanNumeral: 'XIII',
    name: 'Death',
    keywords: ['End of Cycle', 'New Beginnings', 'Change', 'Metamorphosis'],
  },
  {
    romanNumeral: 'XIV',
    name: 'Temperance',
    keywords: ['Middle Path', 'Patience', 'Finding Meaning'],
  },
  {
    romanNumeral: 'XV',
    name: 'The Devil',
    keywords: ['Materialism', 'Playfulness', 'Pleasure', 'Addiction'],
  },
  {
    romanNumeral: 'XVI',
    name: 'The Tower',
    keywords: ['Upheaval', 'Disaster', 'Foundational Shift'],
  },
  {
    romanNumeral: 'XVII',
    name: 'The Star',
    keywords: ['Hope', 'Faith', 'Rejuvenation', 'Rebuilding', 'Healing'],
  },
  {
    romanNumeral: 'XVIII',
    name: 'The Moon',
    keywords: ['Unconscious', 'Illusions', 'Intuition', 'Unclarity'],
  },
  {
    romanNumeral: 'XIX',
    name: 'The Sun',
    keywords: ['Joy', 'Success', 'Celebration', 'Pleasure'],
  },
  {
    romanNumeral: 'XX',
    name: 'Judgement',
    keywords: ['Reflection', 'Reckoning', 'Awakening'],
  },
  {
    romanNumeral: 'XXI',
    name: 'The World',
    keywords: ['Fulfillment', 'Harmony', 'Completion'],
  },
]
