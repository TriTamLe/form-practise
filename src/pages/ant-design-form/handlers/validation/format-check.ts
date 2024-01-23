import { RuleObject } from 'antd/es/form'
import { StoreValue } from 'antd/es/form/interface'
import { hasValue } from '.'

export const formatCheck =
  (regex: RegExp) => (msg: string) => (_: RuleObject, value: StoreValue) => {
    return !hasValue(value)
      ? Promise.resolve()
      : regex.test(value)
      ? Promise.resolve()
      : Promise.reject(new Error(msg))
  }
