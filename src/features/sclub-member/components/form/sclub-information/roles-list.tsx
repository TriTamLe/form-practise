import { CloseOutlined } from '@ant-design/icons'
import { CustomFormItem } from '@features/sclub-member/components'
import {
  LABELS,
  PLACEHOLDERS,
  SCLUB_MEMBER_FORM_NAMES,
  SCLUB_ROLES_OPTIONS,
  VALIDATION_MESSAGES,
} from '@features/sclub-member/constant'
import { getTermOptions, requiredRule } from '@features/sclub-member/handlers'
import { TFormListRules } from '@features/sclub-member/types'
import { Button, Form, Select, Space, Switch } from 'antd'
import { Rule } from 'antd/es/form'
import { useWatch } from 'antd/es/form/Form'
import useFormInstance from 'antd/es/form/hooks/useFormInstance'

export const RoleLists = () => {
  const form = useFormInstance()
  const hasRole = useWatch(SCLUB_MEMBER_FORM_NAMES.HASROLE, form)
  const roles = useWatch(SCLUB_MEMBER_FORM_NAMES.ROLES, form)
  const rules: Record<string, (Rule | TFormListRules)[]> = {
    roles: [
      {
        validator: () => {
          if (hasRole && !roles.length) {
            return Promise.reject(VALIDATION_MESSAGES.ROLES.REQUIRED)
          }
          return Promise.resolve()
        },
      },
    ],
    term: [requiredRule(VALIDATION_MESSAGES.TERM.REQUIRED)],
    role: [requiredRule(VALIDATION_MESSAGES.ROLE.REQUIRED)],
  }

  return (
    <>
      <CustomFormItem
        name={SCLUB_MEMBER_FORM_NAMES.HASROLE}
        label={LABELS.HAS_ROLE}>
        <Switch checkedChildren={'YES'} unCheckedChildren={'NO'} />
      </CustomFormItem>

      {hasRole && (
        <Form.List
          name={SCLUB_MEMBER_FORM_NAMES.ROLES}
          rules={rules.roles as TFormListRules}>
          {(fields, { add, remove }) => (
            <div className='w-full flex flex-col gap-8'>
              <div className='w-full flex flex-col gap-5'>
                {fields.map(({ key, name }) => (
                  <Space key={key} align='baseline' className='w-full flex'>
                    <CustomFormItem
                      name={[name, SCLUB_MEMBER_FORM_NAMES.TERM]}
                      label={LABELS.TERM}
                      rules={rules.term as Rule[]}
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
                      rules={rules.role as Rule[]}
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
      )}
    </>
  )
}
