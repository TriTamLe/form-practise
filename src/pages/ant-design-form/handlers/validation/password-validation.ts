import { Rule, RuleObject } from 'antd/es/form'
import { StoreValue } from 'antd/es/form/interface'
import { passwordPattern } from '../../constant/regex-pattern'
import { formatCheck } from './format-check'

export const passwordFormat =
  (msg: string) => (_: RuleObject, value: StoreValue) =>
    formatCheck(passwordPattern)(msg)(_, value)

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
