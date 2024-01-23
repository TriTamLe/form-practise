import { Form, FormItemProps } from 'antd'

export type CustomFormItemProps = FormItemProps

export const CustomFormItem = ({ children, ...rest }: CustomFormItemProps) => {
  return (
    <Form.Item labelAlign='left' labelCol={{ span: 5 }} {...rest}>
      {children}
    </Form.Item>
  )
}
