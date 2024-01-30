import { Form } from 'antd'
import { FORM_STEP_ITEMS, FORM_STEP_NUMBER } from '../../constant/form-steps'
import { useLoginForm } from '../../hooks'
import { TSClubMember } from '../../types'
import { MemoizedFormFooter } from '../custom/form-footer'
import { MemoizedFormSteps } from '../custom/form-steps'
import { AccountInformationForm } from './account-information'
import { PersonalInformationForm } from './personal-information'

export const LoginForm = () => {
  const {
    form,
    onFinish,
    stepInformation,
    currentStep,
    onChangeStep,
    submitButtonTitle,
    formLayout,
    stepDirection,
  } = useLoginForm()

  return (
    <Form<TSClubMember>
      form={form}
      className='w-full h-full flex md:flex-row flex-col gap-5'
      layout={formLayout}
      onFinish={onFinish}>
      <MemoizedFormSteps
        stepInformation={stepInformation}
        items={FORM_STEP_ITEMS}
        onChangeStep={onChangeStep}
        direction={stepDirection}
      />
      <div className='w-full h-full relative'>
        {currentStep === FORM_STEP_NUMBER.ACCOUNT_INFORMATION && (
          <AccountInformationForm />
        )}
        {currentStep === FORM_STEP_NUMBER.PERSONAL_INFORMATION && (
          <PersonalInformationForm />
        )}
        <MemoizedFormFooter submitButtonTitle={submitButtonTitle} />
      </div>
    </Form>
  )
}
