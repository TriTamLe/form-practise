import { InputProps, SelectProps } from 'antd'
import { FormItemProps, Rule, RuleObject } from 'antd/es/form'
import { NamePath, StoreValue } from 'antd/es/form/interface'
import {
  CountryIso2,
  ParsedCountry,
} from '../../../node_modules/react-international-phone/build/types'

export type THandlePhoneNumber = (data: {
  phone: string
  inputValue: string
  country: ParsedCountry
}) => void

export type TCountryIso2 = CountryIso2
export type TParsedCountry = ParsedCountry
export type TRule = Rule
export type TRuleObject = RuleObject
export type TStoreValue = StoreValue

export type TPhoneInputProps = {
  name: NamePath
  countryFieldName?: string
  phoneFieldName?: string
  requiredErrorMessage?: string
  invalidErrorMessage?: string
  selectProps?: SelectProps
  inputProps?: InputProps
} & FormItemProps

export type TPhoneInputHookArgs = {
  name: NamePath
  countryFieldName?: string
  phoneFieldName?: string
  requiredErrorMessage?: string
  invalidErrorMessage?: string
  required?: boolean
}

export type TCountryCodeSelector = {
  name: NamePath
  countryFieldName: string
  selectProps?: SelectProps
  initialValue?: CountryIso2
}
