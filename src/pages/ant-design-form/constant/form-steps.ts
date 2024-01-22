import { TStepInformation } from '../types'

export const FORM_STEP = {
  ACCOUNT_INFORMATION: 'Account Information',
  PERSONAL_INFORMATION: 'Personal Information',
  SCLUB_INFORMATION: 'SClub Information',
}

export enum FORM_STEP_NUMBER {
  ACCOUNT_INFORMATION,
  PERSONAL_INFORMATION,
  SCLUB_INFORMATION,
}

export const FORM_STEP_ITEMS = [
  { title: FORM_STEP.ACCOUNT_INFORMATION },
  { title: FORM_STEP.PERSONAL_INFORMATION },
  { title: FORM_STEP.SCLUB_INFORMATION },
]

export const DEFAULT_STEP = FORM_STEP_NUMBER.ACCOUNT_INFORMATION
export const DEFAULT_WHITELIST = [FORM_STEP_NUMBER.ACCOUNT_INFORMATION]
export const DEFAULT_STEP_INFORMATION: TStepInformation = {
  currentStep: DEFAULT_STEP,
  whiteList: DEFAULT_WHITELIST,
}

export const NEXT_TITLE = 'Next'
export const COMPLETE_TITLE = 'Complete'
