import { SCLUB_MEMBER_FORM_NAMES, SCLUB_ROLES } from '../constant'

export type TRole = keyof typeof SCLUB_ROLES
export type TRoles = {
  [SCLUB_MEMBER_FORM_NAMES.TERM]: string
  [SCLUB_MEMBER_FORM_NAMES.ROLE]: TRole
}
