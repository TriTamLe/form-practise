import { useForm } from 'antd/es/form/Form'
import { useCallback, useMemo, useState } from 'react'
import {
  COMPLETE_TITLE,
  DEFAULT_STEP,
  DEFAULT_WHITELIST,
  FORM_STEP_NUMBER,
  NEXT_TITLE,
} from '..'
import { handleOnFinish } from '../handlers'

export const useLoginForm = () => {
  const [form] = useForm()
  const [currentStep, setCurrentStep] = useState<number>(DEFAULT_STEP)
  const stepInformation = useMemo(
    () => ({
      currentStep,
      whiteList: DEFAULT_WHITELIST,
    }),
    [currentStep]
  )

  const submitButtonTitle =
    currentStep === FORM_STEP_NUMBER.SCLUB_INFORMATION
      ? COMPLETE_TITLE
      : NEXT_TITLE

  const onChangeStep = useCallback(
    (value: number) => {
      setCurrentStep(value)
    },
    [setCurrentStep]
  )

  const onFinish = () => {
    handleOnFinish(currentStep, onChangeStep, form)
  }

  return {
    form,
    stepInformation,
    submitButtonTitle,
    onFinish,
    currentStep,
    onChangeStep,
  }
}
