import { Button, FloatButton, FormInstance } from 'antd'
import useFormInstance from 'antd/es/form/hooks/useFormInstance'
import { memo } from 'react'

export type TFormFooter = {
  submitButtonTitle?: string
}

const viewData = (form: FormInstance) => {
  console.log(form.getFieldsValue())
}

const FormFooter = ({ submitButtonTitle = 'Complete' }: TFormFooter) => {
  const form = useFormInstance()
  return (
    <FloatButton.Group className='rounded-md shadow-md flex flex-row items-center justify-end gap-3 mb-5'>
      <Button size='large' htmlType='button' onClick={() => viewData(form)}>
        Cancel
      </Button>
      <Button size='large' htmlType='submit' type='primary'>
        {submitButtonTitle}
      </Button>
    </FloatButton.Group>
  )
}

export const MemoizedFormFooter = memo(FormFooter)
