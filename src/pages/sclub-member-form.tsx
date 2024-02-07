import { LoginForm } from '@features/sclub-member'
import { Flex, Typography } from 'antd'

export const SClubMemberForm = () => {
  return (
    <div className='p-10 h-[90vh]'>
      <Flex
        className='h-full'
        vertical
        gap={20}
        align='center'
        justify='center'>
        <Typography.Title level={1}>Sign up for SClub </Typography.Title>
        <LoginForm />
      </Flex>
    </div>
  )
}
