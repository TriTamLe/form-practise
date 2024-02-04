import { ANTD_FORM_LAYOUT, ANTD_STEP_DIRECTION, WINDOW_WIDTH } from '@constant'
import { useForm } from 'antd/es/form/Form'
import { useCallback, useMemo, useState } from 'react'
import { useWindowSize } from 'react-use'
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
  const { width: windowWidth } = useWindowSize()

  const stepInformation = useMemo(
    () => ({
      currentStep,
      whiteList: DEFAULT_WHITELIST,
    }),
    [currentStep]
  )
  const formLayout = useMemo(() => {
    return windowWidth < WINDOW_WIDTH.DOUBLE_EXTRA_LARGE
      ? ANTD_FORM_LAYOUT.VERTICAL
      : ANTD_FORM_LAYOUT.HORIZONTAL
  }, [windowWidth])

  const stepDirection = useMemo(() => {
    return windowWidth < WINDOW_WIDTH.MEDIUM
      ? ANTD_STEP_DIRECTION.HORIZONTAL
      : ANTD_STEP_DIRECTION.VERTICAL
  }, [windowWidth])

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
    formLayout,
    stepDirection,
  }
}
