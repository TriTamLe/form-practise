import { useGetUniversities } from '@features/sclub-member/services'
import { AutoComplete, AutoCompleteProps, FormItemProps } from 'antd'
import useFormInstance from 'antd/es/form/hooks/useFormInstance'
import { memo } from 'react'
import { CustomFormItem } from '../..'

type UniversitySelectFormItemProps = {
  autoCompleteProps?: AutoCompleteProps
} & FormItemProps

const UniversitySelectFormItem = ({
  autoCompleteProps,
  ...props
}: UniversitySelectFormItemProps) => {
  const form = useFormInstance()
  const { data: universityOptions, isLoading } = useGetUniversities({
    keyword: '',
  })

  const handleOnSelect = (value: string) => {
    form.setFieldValue(props.name, value)
  }

  const handleFilter = (inputValue: string, option: any) => {
    return option.value
      .trim()
      .toLowerCase()
      .includes(inputValue.trim().toLowerCase())
  }

  return (
    <CustomFormItem {...props}>
      <AutoComplete
        {...autoCompleteProps}
        options={isLoading ? [] : universityOptions}
        onSelect={handleOnSelect}
        filterOption={handleFilter}
        notFoundContent={'No university found'}
      />
    </CustomFormItem>
  )
}

export const MemoizedUniversitySelectFormItem = memo(UniversitySelectFormItem)
