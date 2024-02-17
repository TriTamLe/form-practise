import {transformToE164format} from '@/components/phone-input/handlers'
import {DATE_FORMAT} from '@/constant'
import {TSClubMember, TSClubMemberDTO} from '@/features/sclub-member/types'
import {SCLUB_MEMBER_KEYS} from "@/features/sclub-member/constant";

export const transformSClubMember = (data: TSClubMember): TSClubMemberDTO => {
    const phoneNumber = transformToE164format(
        data[SCLUB_MEMBER_KEYS.PHONE][SCLUB_MEMBER_KEYS.PHONE_NUMBER],
        data[SCLUB_MEMBER_KEYS.PHONE][SCLUB_MEMBER_KEYS.DIAL_CODE]
    )
    const roles = data[SCLUB_MEMBER_KEYS.HAS_ROLE]
        ? data[SCLUB_MEMBER_KEYS.ROLES]?.map((role) => {
            return {
                [SCLUB_MEMBER_KEYS.TERM]: role[SCLUB_MEMBER_KEYS.TERM],
                [SCLUB_MEMBER_KEYS.ROLE]: role[SCLUB_MEMBER_KEYS.ROLE],
            }
        })
        : undefined
    const {
        [SCLUB_MEMBER_KEYS.PROFILE_PICTURE]: _profilePicture,
        [SCLUB_MEMBER_KEYS.PHONE]: _phone,
        [SCLUB_MEMBER_KEYS.ROLES]: _roles,
        [SCLUB_MEMBER_KEYS.BIRTHDAY]: _birthday,
        [SCLUB_MEMBER_KEYS.CONFIRM_PASSWORD]: _confirmPassword,
        ...rest
    } = data

    return {
        ...rest,
        [SCLUB_MEMBER_KEYS.PROFILE_PICTURE]: _profilePicture[SCLUB_MEMBER_KEYS.IMAGE_URL],
        [SCLUB_MEMBER_KEYS.PHONE]: phoneNumber as string,
        [SCLUB_MEMBER_KEYS.ROLES]: roles,
        [SCLUB_MEMBER_KEYS.BIRTHDAY]: _birthday.format(DATE_FORMAT['YYYY/MM/DD']),
    }
}
