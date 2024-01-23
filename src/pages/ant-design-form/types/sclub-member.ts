import { Dayjs } from 'dayjs'
import { CountryIso2 } from 'react-international-phone'
import { SCLUB_MEMBER_KEYS } from '../constant'
import { THouse } from './house'
import { TMemeberType } from './member-type'
import { TRoles } from './roles'

export type TSClubMember = {
  [SCLUB_MEMBER_KEYS.EMAIL]: string
  [SCLUB_MEMBER_KEYS.PASSWORD]: string
  [SCLUB_MEMBER_KEYS.CONFIRM_PASSWORD]: string
  [SCLUB_MEMBER_KEYS.FULL_NAME]: string
  [SCLUB_MEMBER_KEYS.PHONE]: {
    [SCLUB_MEMBER_KEYS.DIAL_CODE]: CountryIso2
    [SCLUB_MEMBER_KEYS.PHOME_NUMBER]: string
  }
  [SCLUB_MEMBER_KEYS.BIRTHDAY]: Dayjs
  [SCLUB_MEMBER_KEYS.ADDRESS]: string
  [SCLUB_MEMBER_KEYS.UNIVERSITY]?: string
  [SCLUB_MEMBER_KEYS.MAJOR]?: string
  [SCLUB_MEMBER_KEYS.MEMBER_TYPE]: TMemeberType
  [SCLUB_MEMBER_KEYS.HOUSE]: THouse
  [SCLUB_MEMBER_KEYS.PARTICIPANT_TERM]: string
  [SCLUB_MEMBER_KEYS.HASROLE]?: boolean
  [SCLUB_MEMBER_KEYS.ROLES]?: TRoles[]
}
