import { OptionType } from '../../types'

export const HOUSES = {
  ANTS: 'ants',
  SMILE: 'smile',
  STORM: 'storm',
  SHARK: 'shark',
} as const

export const HOUSES_OPTION: OptionType[] = [
  {
    label: 'Ants House',
    value: HOUSES.ANTS,
  },
  {
    label: 'Smile House',
    value: HOUSES.SMILE,
  },
  {
    label: 'Storm House',
    value: HOUSES.STORM,
  },
  {
    label: 'Shark House',
    value: HOUSES.SHARK,
  },
]
