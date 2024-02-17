import {SCLUB_MEMBER_KEYS} from '@/features/sclub-member/constant'
import {THouse, TMemeberType, TRoles} from '@/features/sclub-member/types'
import {Dayjs} from 'dayjs'
import {CountryIso2} from 'react-international-phone'
import {TGender} from "@/features/sclub-member/types/gender.ts";

export type TSClubMember = {
    [SCLUB_MEMBER_KEYS.PROFILE_PICTURE]: {
        [SCLUB_MEMBER_KEYS.FILE]: Blob, [SCLUB_MEMBER_KEYS.IMAGE_URL]: string
    }
    [SCLUB_MEMBER_KEYS.GENDER]: TGender
    [SCLUB_MEMBER_KEYS.EMAIL]: string
    [SCLUB_MEMBER_KEYS.PASSWORD]: string
    [SCLUB_MEMBER_KEYS.CONFIRM_PASSWORD]: string
    [SCLUB_MEMBER_KEYS.FULL_NAME]: string
    [SCLUB_MEMBER_KEYS.PHONE]: {
        [SCLUB_MEMBER_KEYS.DIAL_CODE]: CountryIso2
        [SCLUB_MEMBER_KEYS.PHONE_NUMBER]: string
    }
    [SCLUB_MEMBER_KEYS.BIRTHDAY]: Dayjs
    [SCLUB_MEMBER_KEYS.ADDRESS]: string
    [SCLUB_MEMBER_KEYS.UNIVERSITY]?: string
    [SCLUB_MEMBER_KEYS.MAJOR]?: string
    [SCLUB_MEMBER_KEYS.MEMBER_TYPE]: TMemeberType
    [SCLUB_MEMBER_KEYS.HOUSE]: THouse
    [SCLUB_MEMBER_KEYS.PARTICIPANT_TERM]: string
    [SCLUB_MEMBER_KEYS.HAS_ROLE]?: boolean
    [SCLUB_MEMBER_KEYS.ROLES]?: TRoles[]
}

export type TSClubMemberDTO = {
    [SCLUB_MEMBER_KEYS.PROFILE_PICTURE]: string
    [SCLUB_MEMBER_KEYS.GENDER]: string
    [SCLUB_MEMBER_KEYS.EMAIL]: string
    [SCLUB_MEMBER_KEYS.PASSWORD]: string
    [SCLUB_MEMBER_KEYS.FULL_NAME]: string
    [SCLUB_MEMBER_KEYS.PHONE]: string
    [SCLUB_MEMBER_KEYS.BIRTHDAY]: string
    [SCLUB_MEMBER_KEYS.ADDRESS]: string
    [SCLUB_MEMBER_KEYS.UNIVERSITY]?: string
    [SCLUB_MEMBER_KEYS.MAJOR]?: string
    [SCLUB_MEMBER_KEYS.MEMBER_TYPE]: string
    [SCLUB_MEMBER_KEYS.HOUSE]: string
    [SCLUB_MEMBER_KEYS.PARTICIPANT_TERM]: string
    [SCLUB_MEMBER_KEYS.HAS_ROLE]?: boolean
    [SCLUB_MEMBER_KEYS.ROLES]?: {
        [SCLUB_MEMBER_KEYS.TERM]: string
        [SCLUB_MEMBER_KEYS.ROLE]: string
    }[]
}
