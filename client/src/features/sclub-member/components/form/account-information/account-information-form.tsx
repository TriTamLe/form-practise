import { Flex, Input, Typography } from 'antd'
import { Rule } from 'antd/es/form'
import { CustomFormItem } from '../..'
import {
  LABELS,
  PLACEHOLDERS,
  SCLUB_MEMBER_FORM_NAMES,
  VALIDATION_MESSAGES,
} from '../../../constant'
import { requiredRule } from '../../../handlers'
import { PasswordFormItem } from './password-form-items'

export const AccountInformationForm = () => {
  const rules: Record<string, Rule[]> = {
    email: [
      requiredRule(VALIDATION_MESSAGES.EMAIL.REQUIRED),
      { type: 'email', message: VALIDATION_MESSAGES.EMAIL.INVALID },
    ],
  }

  return (
    <Flex vertical align='center' gap={20}>
      <Typography.Title level={2}>Account Information</Typography.Title>
      <div className='w-full max-w-[70%] px-20'>
        <CustomFormItem
          name={SCLUB_MEMBER_FORM_NAMES.EMAIL}
          label={LABELS.EMAIL}
          rules={rules.email}
          required>
          <Input placeholder={PLACEHOLDERS.EMAIL} size='large' />
        </CustomFormItem>
        <PasswordFormItem />
      </div>
    </Flex>
  )
}
