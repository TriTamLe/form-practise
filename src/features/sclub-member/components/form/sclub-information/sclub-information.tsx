import {
  HOUSES_OPTION,
  LABELS,
  MEMBER_TYPE_OPTIONS,
  PLACEHOLDERS,
  SCLUB_MEMBER_FORM_NAMES,
} from '@features/sclub-member/constant'
import { getTermOptions } from '@features/sclub-member/handlers'
import { Flex, Radio, Select, Switch, Typography } from 'antd'
import { useWatch } from 'antd/es/form/Form'
import useFormInstance from 'antd/es/form/hooks/useFormInstance'
import { CustomFormItem, RoleLists } from '../..'

export const SClubInformationForm = () => {
  const form = useFormInstance()
  const hasRole = useWatch(SCLUB_MEMBER_FORM_NAMES.HASROLE, form)

  return (
    <Flex vertical align='center' gap={20}>
      <Typography.Title level={2}>SClub Information</Typography.Title>
      <div className='w-full max-w-[70%] px-20'>
        <CustomFormItem
          name={SCLUB_MEMBER_FORM_NAMES.MEMBER_TYPE}
          label={LABELS.MEMBER_TYPE}
          required>
          <Select
            options={MEMBER_TYPE_OPTIONS}
            size='large'
            placeholder={PLACEHOLDERS.MEMBER_TYPE}
          />
        </CustomFormItem>
        <CustomFormItem
          name={SCLUB_MEMBER_FORM_NAMES.HOUSE}
          label={LABELS.HOUSE}
          required>
          <Radio.Group
            options={HOUSES_OPTION}
            optionType='button'
            buttonStyle='solid'
            size='large'
          />
        </CustomFormItem>
        <CustomFormItem
          name={SCLUB_MEMBER_FORM_NAMES.PARTICIPANT_TERM}
          label={LABELS.PARTICIPANT_TERM}
          required>
          <Select
            options={getTermOptions()}
            size='large'
            allowClear
            placeholder={PLACEHOLDERS.PARTICIPANT_TERM}
          />
        </CustomFormItem>
        <CustomFormItem
          name={SCLUB_MEMBER_FORM_NAMES.HASROLE}
          label={LABELS.HAS_ROLE}>
          <Switch checkedChildren={'YES'} unCheckedChildren={'NO'} />
        </CustomFormItem>
        {hasRole && <RoleLists />}
      </div>
    </Flex>
  )
}
