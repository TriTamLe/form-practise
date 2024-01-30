import { Form, FormItemProps } from 'antd'

export type CustomFormItemProps = FormItemProps

export const CustomFormItem = ({ children, ...rest }: CustomFormItemProps) => {
  return (
    <Form.Item labelAlign='left' labelCol={{ xxl: 5 }} {...rest}>
      {children}
    </Form.Item>
  )
}
