import { FormProps, StepsProps } from 'antd'

export const ANTD_FORM_LAYOUT: Record<string, FormProps['layout']> = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
  INLINE: 'inline',
}

export const ANTD_STEP_DIRECTION: Record<string, StepsProps['direction']> = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
}
