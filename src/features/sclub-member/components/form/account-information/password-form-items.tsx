import {
  CustomFormItem,
  PasswordHintExtra,
} from '@/features/sclub-member/components'
import {
  LABELS,
  PLACEHOLDERS,
  SCLUB_MEMBER_FORM_NAMES,
  VALIDATION_MESSAGES,
} from '@/features/sclub-member/constant'
import {
  confirmPasswordValidation,
  passwordFormat,
  requiredRule,
} from '@/features/sclub-member/handlers'
import { Input, Tooltip } from 'antd'
import { Rule } from 'antd/es/form'
import { useWatch } from 'antd/es/form/Form'
import useFormInstance from 'antd/es/form/hooks/useFormInstance'

export const PasswordFormItem = () => {
  const form = useFormInstance()
  const password = useWatch(SCLUB_MEMBER_FORM_NAMES.PASSWORD, form)
  const rules: Record<string, Rule[]> = {
    password: [
      requiredRule(VALIDATION_MESSAGES.PASSWORD.REQUIRED),
      {
        validator: passwordFormat(VALIDATION_MESSAGES.PASSWORD.INVALID),
      },
    ],

    confirmPassword: [
      requiredRule(VALIDATION_MESSAGES.CONFIRM_PASSWORD.REQUIRED),
      confirmPasswordValidation(
        SCLUB_MEMBER_FORM_NAMES.PASSWORD,
        VALIDATION_MESSAGES.CONFIRM_PASSWORD.NOT_MATCH
      ),
    ],
  }

  return (
    <>
      <Tooltip
        trigger={['focus']}
        title={<PasswordHintExtra password={password} />}
        color='white'
        placement='top'
        arrow={false}>
        <CustomFormItem
          name={SCLUB_MEMBER_FORM_NAMES.PASSWORD}
          rules={rules.password}
          label={LABELS.PASSWORD}
          required>
          <Input.Password
            placeholder={PLACEHOLDERS.PASSWORD}
            size='large'
            autoComplete='off'
            visibilityToggle
          />
        </CustomFormItem>
      </Tooltip>
      <CustomFormItem
        name={SCLUB_MEMBER_FORM_NAMES.CONFIRM_PASSWORD}
        rules={rules.confirmPassword}
        label={LABELS.CONFIRM_PASSWORD}
        dependencies={[SCLUB_MEMBER_FORM_NAMES.PASSWORD]}
        required>
        <Input.Password
          placeholder={PLACEHOLDERS.CONFIRM_PASSWORD}
          size='large'
          visibilityToggle
        />
      </CustomFormItem>
    </>
  )
}
