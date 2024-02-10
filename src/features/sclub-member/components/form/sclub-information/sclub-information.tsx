import { CustomFormItem, RoleLists } from '@/features/sclub-member/components'
import {
  HOUSES_OPTION,
  LABELS,
  MEMBER_TYPE_OPTIONS,
  PLACEHOLDERS,
  SCLUB_MEMBER_FORM_NAMES,
  VALIDATION_MESSAGES,
} from '@/features/sclub-member/constant'
import { getTermOptions, requiredRule } from '@/features/sclub-member/handlers'
import { Flex, Radio, Select, Typography } from 'antd'
import { Rule } from 'antd/es/form'

export const SClubInformationForm = () => {
  const rules: Record<string, Rule[]> = {
    memberType: [requiredRule(VALIDATION_MESSAGES.MEMBER_TYPE.REQUIRED)],
    house: [requiredRule(VALIDATION_MESSAGES.HOUSE.REQUIRED)],
    participantTerm: [
      requiredRule(VALIDATION_MESSAGES.PARTICIPANT_TERM.REQUIRED),
    ],
  }

  return (
    <Flex vertical align='center' gap={20}>
      <Typography.Title level={2}>SClub Information</Typography.Title>
      <div className='w-full max-w-[70%] px-20'>
        <CustomFormItem
          name={SCLUB_MEMBER_FORM_NAMES.MEMBER_TYPE}
          label={LABELS.MEMBER_TYPE}
          required
          rules={rules.memberType}>
          <Select
            options={MEMBER_TYPE_OPTIONS}
            size='large'
            placeholder={PLACEHOLDERS.MEMBER_TYPE}
          />
        </CustomFormItem>
        <CustomFormItem
          name={SCLUB_MEMBER_FORM_NAMES.HOUSE}
          label={LABELS.HOUSE}
          rules={rules.house}
          required>
          <Radio.Group
            options={HOUSES_OPTION}
            optionType='button'
            buttonStyle='solid'
            size='large'
          />
        </CustomFormItem>
        <CustomFormItem
          name={SCLUB_MEMBER_FORM_NAMES.PARTICIPANT_TERM}
          label={LABELS.PARTICIPANT_TERM}
          rules={rules.participantTerm}
          required>
          <Select
            options={getTermOptions()}
            size='large'
            allowClear
            placeholder={PLACEHOLDERS.PARTICIPANT_TERM}
          />
        </CustomFormItem>
        <RoleLists />
      </div>
    </Flex>
  )
}
