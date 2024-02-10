import { PASSWORD_REGEX } from '@features/sclub-member/constant/form/regex-pattern'
import { TPasswordValidationCheckItem } from '@features/sclub-member/types'

export const PLACEHOLDERS = {
  EMAIL: 'Enter your email address',
  PASSWORD: 'Enter your password',
  CONFIRM_PASSWORD: 'Confirm your password',
  FULL_NAME: 'Enter your full name',
  PHONE: 'Enter your phone number',
  BIRTHDAY: 'YYYY-MM-DD',
  ADDRESS: 'Enter your address',
  UNIVERSITY: 'Enter your university',
  MAJOR: 'Enter your major',
  MEMBER_TYPE: 'Select your member type',
  HOUSE: 'Select your house',
  PARTICIPANT_TERM: 'Select your participant term',
  TERM: 'Select your term',
  ROLE: 'Select your role',
}

export const LABELS = {
  EMAIL: 'Email',
  PASSWORD: 'Password',
  CONFIRM_PASSWORD: 'Confirm Password',
  PHONE: 'Phone number',
  FULL_NAME: 'Full name',
  BIRTHDAY: 'Birthday',
  ADDRESS: 'Address',
  UNIVERSITY: 'University',
  MAJOR: 'Major',
  MEMBER_TYPE: 'Member type',
  HOUSE: 'House',
  PARTICIPANT_TERM: 'Participant term',
  HAS_ROLE: 'Do you has a role in SClub?',
  TERM: 'Term',
  ROLE: 'Role',
  ROLES: 'Your roles',
}

export const VALIDATION_MESSAGES = {
  EMAIL: {
    REQUIRED: 'Please input your email address',
    INVALID: 'Please input a valid email address',
  },
  PASSWORD: {
    REQUIRED: 'Please input your password',
    INVALID: 'Please input a valid password',
    LENGTH: 'Between 8 and 20 characters',
    AT_LEAST_ONE_NUMBER: 'At least one number',
    AT_LEAST_ONE_SPECIAL_CHARACTER: 'At least one special character',
    BOTH_UPPER_CASE_AND_LOWER_CASE: 'Both upper and lower case characters',
    DO_NOT_CONTAIN_SPACES: 'Do not contain spaces',
  },
  CONFIRM_PASSWORD: {
    REQUIRED: 'Please confirm your password',
    INVALID: 'Please input a valid password',
    NOT_MATCH: 'The two passwords that you entered do not match!',
  },
  FULL_NAME: {
    REQUIRED: 'Please input your full name',
  },
  BIRTHDAY: {
    REQUIRED: 'Please input your birthday',
  },
  ADDRESS: {
    REQUIRED: 'Please input your address',
  },
  UNIVERSITY: {
    REQUIRED: 'Please input your university',
  },
  MAJOR: {
    REQUIRED: 'Please input your major',
  },
  MEMBER_TYPE: {
    REQUIRED: 'Please select your member type',
  },
  HOUSE: {
    REQUIRED: 'Please select your house',
  },
  PARTICIPANT_TERM: {
    REQUIRED: 'Please select your participant term',
  },
  TERM: {
    REQUIRED: 'Please select your term',
  },
  ROLE: {
    REQUIRED: 'Please select your role',
  },
  ROLES: {
    REQUIRED: 'Please add at least one of your roles',
  },
}

export const PASSWORD_VALIDATION_CHECK: TPasswordValidationCheckItem[] = [
  [
    PASSWORD_REGEX.BOTH_UPPER_CASE_AND_LOWER_CASE,
    VALIDATION_MESSAGES.PASSWORD.BOTH_UPPER_CASE_AND_LOWER_CASE,
  ],
  [PASSWORD_REGEX.PASSWORD_LENGTH, VALIDATION_MESSAGES.PASSWORD.LENGTH],
  [
    PASSWORD_REGEX.AT_LEAST_ONE_NUMBER,
    VALIDATION_MESSAGES.PASSWORD.AT_LEAST_ONE_NUMBER,
  ],
  [
    PASSWORD_REGEX.AT_LEAST_ONE_SPECIAL_CHARACTER,
    VALIDATION_MESSAGES.PASSWORD.AT_LEAST_ONE_SPECIAL_CHARACTER,
  ],
  [
    PASSWORD_REGEX.DO_NOT_CONTAIN_SPACES,
    VALIDATION_MESSAGES.PASSWORD.DO_NOT_CONTAIN_SPACES,
  ],
]
