import { CloseOutlined } from '@ant-design/icons'
import {
  LABELS,
  PLACEHOLDERS,
  SCLUB_MEMBER_FORM_NAMES,
  SCLUB_ROLES_OPTIONS,
} from '@features/sclub-member/constant'
import { getTermOptions } from '@features/sclub-member/handlers'
import { Button, Form, Select, Space } from 'antd'
import { CustomFormItem } from '../..'

export const RoleLists = () => {
  return (
    <Form.List name={SCLUB_MEMBER_FORM_NAMES.ROLES}>
      {(fields, { add, remove }) => (
        <div className='w-full flex flex-col gap-8'>
          <div className='w-full flex flex-col gap-5'>
            {fields.map(({ key, name }) => (
              <Space key={key} align='baseline' className='w-full flex'>
                <CustomFormItem
                  name={[name, SCLUB_MEMBER_FORM_NAMES.TERM]}
                  label={LABELS.TERM}
                  required>
                  <Select
                    options={getTermOptions()}
                    placeholder={PLACEHOLDERS.TERM}
                    size='large'
                  />
                </CustomFormItem>
                <CustomFormItem
                  name={[name, SCLUB_MEMBER_FORM_NAMES.ROLE]}
                  label={LABELS.ROLE}
                  required>
                  <Select
                    options={SCLUB_ROLES_OPTIONS}
                    placeholder={PLACEHOLDERS.ROLE}
                    size='large'
                    dropdownStyle={{
                      width: '250px',
                    }}
                  />
                </CustomFormItem>
                <CloseOutlined onClick={() => remove(name)} />
              </Space>
            ))}
          </div>

          <Button type='default' onClick={add} className='w-full'>
            Add
          </Button>
        </div>
      )}
    </Form.List>
  )
}
