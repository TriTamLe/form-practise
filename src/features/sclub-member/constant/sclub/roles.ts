import { OptionType } from '@features/sclub-member/types'

export const SCLUB_ROLES = {
  PRESIDENT: 'president',
  VICE_PRESEDENT: 'vicePresident',
  HOUSE_LEADER: 'houseLeader',
  CLUB_CARING_LEADER: 'clubCaringLeader',
  CLUB_CARING_MEMBER: 'clubCaringMember',
  CLUB_MEDIA_LEADER: 'clubMediaLeader',
  CLUB_MEDIA_MEMBER: 'clubMediaMember',
  CLUB_EVENT_LEADER: 'clubEventLeader',
  CLUB_EVENT_MEMBER: 'clubEventMember',
  CLUB_EXTERAL_AFFAIRS_LEADER: 'clubExteralAffairsLeader',
  CLUB_EXTERAL_AFFAIRS_MEMBER: 'clubExteralAffairsMember',
  HOUSE_STAFF: 'houseStaff',
} as const

export const SCLUB_ROLES_OPTIONS: OptionType[] = [
  {
    label: 'President',
    value: SCLUB_ROLES.PRESIDENT,
  },
  {
    label: 'Vice President',
    value: SCLUB_ROLES.VICE_PRESEDENT,
  },
  {
    label: 'House Leader',
    value: SCLUB_ROLES.HOUSE_LEADER,
  },
  {
    label: 'Club Caring Leader',
    value: SCLUB_ROLES.CLUB_CARING_LEADER,
  },
  {
    label: 'Club Caring Member',
    value: SCLUB_ROLES.CLUB_CARING_MEMBER,
  },
  {
    label: 'Club Media Leader',
    value: SCLUB_ROLES.CLUB_MEDIA_LEADER,
  },
  {
    label: 'Club Media Member',
    value: SCLUB_ROLES.CLUB_MEDIA_MEMBER,
  },
  {
    label: 'Club Event Leader',
    value: SCLUB_ROLES.CLUB_EVENT_LEADER,
  },
  {
    label: 'Club Event Member',
    value: SCLUB_ROLES.CLUB_EVENT_MEMBER,
  },
  {
    label: 'Club Exteral Affairs Leader',
    value: SCLUB_ROLES.CLUB_EXTERAL_AFFAIRS_LEADER,
  },
  {
    label: 'Club Exteral Affairs Member',
    value: SCLUB_ROLES.CLUB_EXTERAL_AFFAIRS_MEMBER,
  },
  {
    label: 'House Staff',
    value: SCLUB_ROLES.HOUSE_STAFF,
  },
]
