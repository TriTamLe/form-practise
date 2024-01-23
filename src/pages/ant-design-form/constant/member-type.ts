import { OptionType } from '../types'

export const MEMBER_TYPE = {
  OLD_MEMEBER: 'oldMember',
  CURRENT_MEMBER: 'currentMember',
} as const

export const MEMBER_TYPE_OPTIONS: OptionType[] = [
  {
    label: 'Old Member',
    value: MEMBER_TYPE.OLD_MEMEBER,
  },
  {
    label: 'Current Member',
    value: MEMBER_TYPE.CURRENT_MEMBER,
  },
]
