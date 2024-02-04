import { Dayjs } from 'dayjs'
import { CountryIso2 } from 'react-international-phone'
import { SCLUB_MEMBER_FORM_NAMES } from '../constant'
import { THouse } from './house'
import { TMemeberType } from './member-type'
import { TRoles } from './roles'

export type TSClubMember = {
  [SCLUB_MEMBER_FORM_NAMES.EMAIL]: string
  [SCLUB_MEMBER_FORM_NAMES.PASSWORD]: string
  [SCLUB_MEMBER_FORM_NAMES.CONFIRM_PASSWORD]: string
  [SCLUB_MEMBER_FORM_NAMES.FULL_NAME]: string
  [SCLUB_MEMBER_FORM_NAMES.PHONE]: {
    [SCLUB_MEMBER_FORM_NAMES.DIAL_CODE]: CountryIso2
    [SCLUB_MEMBER_FORM_NAMES.PHOME_NUMBER]: string
  }
  [SCLUB_MEMBER_FORM_NAMES.BIRTHDAY]: Dayjs
  [SCLUB_MEMBER_FORM_NAMES.ADDRESS]: string
  [SCLUB_MEMBER_FORM_NAMES.UNIVERSITY]?: string
  [SCLUB_MEMBER_FORM_NAMES.MAJOR]?: string
  [SCLUB_MEMBER_FORM_NAMES.MEMBER_TYPE]: TMemeberType
  [SCLUB_MEMBER_FORM_NAMES.HOUSE]: THouse
  [SCLUB_MEMBER_FORM_NAMES.PARTICIPANT_TERM]: string
  [SCLUB_MEMBER_FORM_NAMES.HASROLE]?: boolean
  [SCLUB_MEMBER_FORM_NAMES.ROLES]?: TRoles[]
}
