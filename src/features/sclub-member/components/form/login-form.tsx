import {
  AccountInformationForm,
  MemoizedFormFooter,
  MemoizedFormSteps,
  PersonalInformationForm,
  SClubInformationForm,
} from '@features/sclub-member/components'
import {
  FORM_STEP_ITEMS,
  FORM_STEP_NUMBER,
} from '@features/sclub-member/constant'
import { useLoginForm } from '@features/sclub-member/hooks'
import { TSClubMember } from '@features/sclub-member/types'
import { Form } from 'antd'

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
      <div className='w-full h-full'>
        {currentStep === FORM_STEP_NUMBER.ACCOUNT_INFORMATION && (
          <AccountInformationForm />
        )}
        {currentStep === FORM_STEP_NUMBER.PERSONAL_INFORMATION && (
          <PersonalInformationForm />
        )}
        {currentStep === FORM_STEP_NUMBER.SCLUB_INFORMATION && (
          <SClubInformationForm />
        )}
        <MemoizedFormFooter submitButtonTitle={submitButtonTitle} />
      </div>
    </Form>
  )
}
