import { PASSWORD_REGEX } from '@/features/sclub-member/constant'
import { formatCheck } from '@/features/sclub-member/handlers'
import { Rule, RuleObject } from 'antd/es/form'
import { StoreValue } from 'antd/es/form/interface'

export const passwordFormat =
  (msg: string) => (_: RuleObject, value: StoreValue) =>
    formatCheck(PASSWORD_REGEX.ALL_RULES)(msg)(_, value)

export const confirmPasswordValidation =
  (passwordFieldName: string, message: string): Rule =>
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue(passwordFieldName) === value) {
        return Promise.resolve()
      }
      return Promise.reject(new Error(message))
    },
  })
