import { hasValue } from '@features/sclub-member/handlers'
import { RuleObject } from 'antd/es/form'
import { StoreValue } from 'antd/es/form/interface'

export const formatCheck =
  (regex: RegExp) => (msg: string) => (_: RuleObject, value: StoreValue) => {
    return !hasValue(value)
      ? Promise.resolve()
      : regex.test(value)
      ? Promise.resolve()
      : Promise.reject(new Error(msg))
  }
