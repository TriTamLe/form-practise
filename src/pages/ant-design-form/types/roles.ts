import { SCLUB_MEMBER_KEYS, SCLUB_ROLES } from '../constant'

export type TRole = keyof typeof SCLUB_ROLES
export type TRoles = {
  [SCLUB_MEMBER_KEYS.TERM]: string
  [SCLUB_MEMBER_KEYS.ROLE]: TRole
}
