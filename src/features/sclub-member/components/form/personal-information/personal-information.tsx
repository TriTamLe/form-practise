import { PhoneInputField } from '@components/phone-input/components'

import {
  DATE_FORMAT,
  LABELS,
  PLACEHOLDERS,
  SCLUB_MEMBER_FORM_NAMES,
  VALIDATION_MESSAGES,
} from '@features/sclub-member/constant'
import { requiredRule } from '@features/sclub-member/handlers'
import { DatePicker, Flex, Input, Typography } from 'antd'
import { Rule } from 'antd/es/form'
import { CustomFormItem } from '../..'
import { MemoizedUniversitySelectFormItem } from './university-select'

export const PersonalInformationForm = () => {
  const rules: Record<string, Rule[]> = {
    fullName: [requiredRule(VALIDATION_MESSAGES.FULL_NAME.REQUIRED)],
    birthDay: [requiredRule(VALIDATION_MESSAGES.BIRTHDAY.REQUIRED)],
    address: [requiredRule(VALIDATION_MESSAGES.ADDRESS.REQUIRED)],
    university: [requiredRule(VALIDATION_MESSAGES.UNIVERSITY.REQUIRED)],
  }

  return (
    <Flex vertical align='center' gap={20}>
      <Typography.Title level={2}>Personal Information</Typography.Title>
      <div className='w-full max-w-[70%] px-20'>
        <CustomFormItem
          name={SCLUB_MEMBER_FORM_NAMES.FULL_NAME}
          label={LABELS.FULL_NAME}
          required
          rules={rules.fullName}>
          <Input size='large' placeholder={PLACEHOLDERS.FULL_NAME} />
        </CustomFormItem>
        <PhoneInputField
          labelAlign='left'
          labelCol={{ span: 5 }}
          name={SCLUB_MEMBER_FORM_NAMES.PHONE}
          countryFieldName={SCLUB_MEMBER_FORM_NAMES.DIAL_CODE}
          phoneFieldName={SCLUB_MEMBER_FORM_NAMES.PHOME_NUMBER}
          label={LABELS.PHONE}
          required
          hideCountryName
          inputProps={{
            placeholder: PLACEHOLDERS.PHONE,
          }}
        />
        <CustomFormItem
          name={SCLUB_MEMBER_FORM_NAMES.BIRTHDAY}
          label={LABELS.BIRTHDAY}
          required
          rules={rules.birthDay}>
          <DatePicker
            size='large'
            placeholder={PLACEHOLDERS.BIRTHDAY}
            className='w-full'
            format={DATE_FORMAT['YYYY/MM/DD']}
          />
        </CustomFormItem>
        <CustomFormItem
          name={SCLUB_MEMBER_FORM_NAMES.ADDRESS}
          label={LABELS.ADDRESS}
          required
          rules={rules.address}>
          <Input size='large' placeholder={PLACEHOLDERS.ADDRESS} />
        </CustomFormItem>
        <MemoizedUniversitySelectFormItem
          name={SCLUB_MEMBER_FORM_NAMES.UNIVERSITY}
          label={LABELS.UNIVERSITY}
          required
          rules={rules.university}
          autoCompleteProps={{
            size: 'large',
            placeholder: PLACEHOLDERS.UNIVERSITY,
          }}
        />
        <CustomFormItem
          name={SCLUB_MEMBER_FORM_NAMES.MAJOR}
          label={LABELS.MAJOR}
          required
          rules={rules.address}>
          <Input size='large' placeholder={PLACEHOLDERS.MAJOR} />
        </CustomFormItem>
      </div>
    </Flex>
  )
}
