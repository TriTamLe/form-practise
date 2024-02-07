import { Button, FormInstance } from 'antd'
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
    <div className='w-full rounded-md shadow-md p-5 flex flex-row items-center justify-end gap-3 border-primary border-[0.5px] border-solid'>
      <Button size='large' htmlType='button' onClick={() => viewData(form)}>
        Cancel
      </Button>
      <Button size='large' htmlType='submit' type='primary'>
        {submitButtonTitle}
      </Button>
    </div>
  )
}

export const MemoizedFormFooter = memo(FormFooter)
