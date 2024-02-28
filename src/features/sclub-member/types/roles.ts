import {
  SCLUB_MEMBER_KEYS,
  SCLUB_POSITIONS,
} from '@/features/sclub-member/constant'

export type TRole = keyof typeof SCLUB_POSITIONS
export type TRoles = {
  [SCLUB_MEMBER_KEYS.TERM]: string
  [SCLUB_MEMBER_KEYS.ROLE]: TRole
}
