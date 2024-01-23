import { Flex, Input, Typography } from 'antd'
import { Rule } from 'antd/es/form'
import { CustomFormItem } from '../..'
import {
  LABELS,
  PLACEHOLDERS,
  SCLUB_MEMBER_KEYS,
  VALIDATION_MESSAGES,
} from '../../../constant'
import {
  confirmPasswordValidation,
  passwordFormat,
  requiredRule,
} from '../../../handlers'

export const AccountInformationForm = () => {
  const rules: Record<string, Rule[]> = {
    email: [
      requiredRule(VALIDATION_MESSAGES.EMAIL.REQUIRED),
      { type: 'email', message: VALIDATION_MESSAGES.EMAIL.INVALID },
    ],
    password: [
      requiredRule(VALIDATION_MESSAGES.PASSWORD.REQUIRED),
      {
        validator: passwordFormat(VALIDATION_MESSAGES.PASSWORD.INVALID),
      },
    ],

    confirmPassword: [
      requiredRule(VALIDATION_MESSAGES.CONFIRM_PASSWORD.REQUIRED),
      confirmPasswordValidation(
        SCLUB_MEMBER_KEYS.PASSWORD,
        VALIDATION_MESSAGES.CONFIRM_PASSWORD.NOT_MATCH
      ),
    ],
  }

  return (
    <Flex vertical align='center' gap={20}>
      <Typography.Title level={2}>Account Information</Typography.Title>
      <div className='w-full max-w-[70%] px-20'>
        <CustomFormItem
          name={SCLUB_MEMBER_KEYS.EMAIL}
          label={LABELS.EMAIL}
          rules={rules.email}
          required>
          <Input placeholder={PLACEHOLDERS.EMAIL} size='large' />
        </CustomFormItem>
        <CustomFormItem
          name={SCLUB_MEMBER_KEYS.PASSWORD}
          rules={rules.password}
          label={LABELS.PASSWORD}
          required>
          <Input.Password
            placeholder={PLACEHOLDERS.PASSWORD}
            size='large'
            visibilityToggle
          />
        </CustomFormItem>
        <CustomFormItem
          name={SCLUB_MEMBER_KEYS.CONFIRM_PASSWORD}
          rules={rules.confirmPassword}
          label={LABELS.CONFIRM_PASSWORD}
          dependencies={[SCLUB_MEMBER_KEYS.PASSWORD]}
          required>
          <Input.Password
            placeholder={PLACEHOLDERS.CONFIRM_PASSWORD}
            size='large'
            visibilityToggle
          />
        </CustomFormItem>
      </div>
    </Flex>
  )
}
