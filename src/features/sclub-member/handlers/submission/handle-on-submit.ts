import { FORM_STEP_NUMBER } from '@features/sclub-member/constant'
import { TSClubMember } from '@features/sclub-member/types'
import { FormInstance } from 'antd'
import { transformSClubMember } from '.'

export const handleOnSubmit = (form: FormInstance<TSClubMember>) => {
  const formData: TSClubMember = form.getFieldsValue(true)
  console.log('original:', formData)
  console.log('transformed:', transformSClubMember(formData))
}

export const handleOnFinish = (
  currentstep: number,
  handleNextStep: (current: number) => void,
  form: FormInstance<TSClubMember>
) => {
  switch (currentstep) {
    case FORM_STEP_NUMBER.SCLUB_INFORMATION:
      handleOnSubmit(form)
      break

    default:
      handleNextStep(currentstep + 1)
      break
  }
}
