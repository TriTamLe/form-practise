import { AntdProvider, ReactQueryProvider } from '@lib'
import { LoginForm } from '@pages'
import { Flex, Typography } from 'antd'
import './App.css'

function App() {
  return (
    <ReactQueryProvider>
      <AntdProvider>
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
      </AntdProvider>
    </ReactQueryProvider>
  )
}

export default App
