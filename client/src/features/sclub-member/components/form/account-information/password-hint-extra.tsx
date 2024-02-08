import { PASSWORD_VALIDATION_CHECK } from '@features/sclub-member/constant'

type TPasswordHintExtra = {
  password: string
}

const ruleItem = (condition: boolean, message: string) => {
  return (
    <li
      style={{
        color: condition ? 'green' : 'red',
      }}>
      {message}
    </li>
  )
}

export const PasswordHintExtra = ({ password }: TPasswordHintExtra) => {
  return (
    <ul className='flex flex-col gap-2'>
      {PASSWORD_VALIDATION_CHECK.map(([regex, message]) => {
        return ruleItem(regex.test(password), message)
      })}
    </ul>
  )
}
