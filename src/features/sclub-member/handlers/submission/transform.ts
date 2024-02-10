import { transformToE164format } from '@/components/phone-input/handlers'
import { DATE_FORMAT } from '@/constant'
import { TSClubMember, TSClubMemberDTO } from '@/features/sclub-member/types'

export const transformSClubMember = (data: TSClubMember): TSClubMemberDTO => {
  const phoneNumber = transformToE164format(
    data.phone.phoneNumber,
    data.phone.dialCode
  )
  const roles = data.hasRole
    ? data.roles?.map((role) => {
        return {
          term: role.term,
          role: role.role,
        }
      })
    : undefined
  const {
    phone: _phone,
    roles: _roles,
    birthday: _birthday,
    confirmPassword: _confirmPassword,
    ...rest
  } = data

  return {
    ...rest,
    phone: phoneNumber as string,
    roles,
    birthday: _birthday.format(DATE_FORMAT['YYYY/MM/DD']),
  }
}
