import { TOptions } from '@/features/sclub-member/types'

export const SCLUB_POSITIONS = {
  PRESIDENT: 'president',
  VICE_PRESEDENT: 'vicePresident',
  HOUSE_LEADER: 'houseLeader',
  CLUB_CARING_LEADER: 'clubCaringLeader',
  CLUB_CARING_STAFF: 'clubCaringStaff',
  CLUB_MEDIA_LEADER: 'clubMediaLeader',
  CLUB_MEDIA_STAFF: 'clubMediaStaff',
  CLUB_INTERNAL_AFFAIRS_LEADER: 'clubInternalAffairsLeader',
  CLUB_INTERNAL_AFFAIRS_STAFF: 'clubInternalAffairsStaff',
  CLUB_EXTERAL_AFFAIRS_LEADER: 'clubExteralAffairsLeader',
  CLUB_EXTERAL_AFFAIRS_STAFF: 'clubExteralAffairsStaff',
  HOUSE_STAFF: 'houseStaff',
} as const

export const SCLUB_POSITIONS_OPTIONS: TOptions[] = [
  {
    label: 'President',
    value: SCLUB_POSITIONS.PRESIDENT,
  },
  {
    label: 'Vice President',
    value: SCLUB_POSITIONS.VICE_PRESEDENT,
  },
  {
    label: 'House Leader',
    value: SCLUB_POSITIONS.HOUSE_LEADER,
  },
  {
    label: 'Club Caring Leader',
    value: SCLUB_POSITIONS.CLUB_CARING_LEADER,
  },
  {
    label: 'Club Caring Staff',
    value: SCLUB_POSITIONS.CLUB_CARING_STAFF,
  },
  {
    label: 'Club Media Leader',
    value: SCLUB_POSITIONS.CLUB_MEDIA_LEADER,
  },
  {
    label: 'Club Media Staff',
    value: SCLUB_POSITIONS.CLUB_MEDIA_STAFF,
  },
  {
    label: 'Club Internal Affairs Leader',
    value: SCLUB_POSITIONS.CLUB_INTERNAL_AFFAIRS_LEADER,
  },
  {
    label: 'Club Internal Affairs Staff',
    value: SCLUB_POSITIONS.CLUB_INTERNAL_AFFAIRS_STAFF,
  },
  {
    label: 'Club Exteral Affairs Leader',
    value: SCLUB_POSITIONS.CLUB_EXTERAL_AFFAIRS_LEADER,
  },
  {
    label: 'Club Exteral Affairs Staff',
    value: SCLUB_POSITIONS.CLUB_EXTERAL_AFFAIRS_STAFF,
  },
  {
    label: 'House Staff',
    value: SCLUB_POSITIONS.HOUSE_STAFF,
  },
]
