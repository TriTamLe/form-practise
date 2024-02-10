import { OptionType } from '@features/sclub-member/types'

const FIRST_YEAR = 2009

export const getTermOptions = (): OptionType[] => {
  const currentYear = new Date().getFullYear()

  const options: OptionType[] = []

  for (let i = currentYear; i > FIRST_YEAR; i--) {
    const fromYear = i
    const toYear = i + 1

    options.push({
      label: `${fromYear} - ${toYear}`,
      value: `${fromYear} - ${toYear}`,
    })
  }

  return options
}
