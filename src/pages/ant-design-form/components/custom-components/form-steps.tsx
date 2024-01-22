import { Steps, StepsProps } from 'antd'
import { memo, useEffect, useState } from 'react'
import { TStepInformation } from '../../types'

export type TFormSteps = {
  stepInformation: TStepInformation
  items: StepsProps['items']
  onChangeStep?: (step: number) => void
}

const handleGetWhiteList = (current: number): number[] => {
  return Array.from({ length: current + 1 }, (_, i) => i)
}

const FormSteps = ({ stepInformation, onChangeStep, items }: TFormSteps) => {
  const [stepStatus, setStepStatus] =
    useState<TStepInformation>(stepInformation)

  useEffect(() => {
    setStepStatus(stepInformation)
  }, [stepInformation])

  const checkEnable = (current: number) => {
    return stepStatus.whiteList.includes(current)
  }

  const handleOnchange = (current: number) => {
    const newWhiteList = handleGetWhiteList(current)

    if (!checkEnable(current)) return

    setStepStatus({
      currentStep: current,
      whiteList: newWhiteList,
    })

    onChangeStep?.(current)
  }

  return (
    <Steps
      direction='vertical'
      className='w-[300px]  h-fit'
      current={stepStatus.currentStep}
      items={items}
      progressDot
      onChange={handleOnchange}
    />
  )
}

export const MemoizedFormSteps = memo(FormSteps)
