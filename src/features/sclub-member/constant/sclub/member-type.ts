import { TOptions } from '@/features/sclub-member/types'

export const MEMBER_TYPE = {
  EX_MEMBER: 'exMember',
  CURRENT_MEMBER: 'currentMember',
} as const

export const MEMBER_TYPE_OPTIONS: TOptions[] = [
  {
    label: 'Ex-member',
    value: MEMBER_TYPE.EX_MEMBER,
  },
  {
    label: 'Current Member',
    value: MEMBER_TYPE.CURRENT_MEMBER,
  },
]
