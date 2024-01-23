import { FormInstance } from 'antd'
import { FORM_STEP_NUMBER, TSClubMember } from '../..'

export const handleOnSubmit = (form: FormInstance<TSClubMember>) => {
  const formData = form.getFieldsValue(true)
  console.log(formData)
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
