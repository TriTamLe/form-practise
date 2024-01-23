import { LoginForm } from '@pages'
import { ConfigProvider, Flex, Typography } from 'antd'
import './App.css'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#453d6d',
        },
      }}>
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
    </ConfigProvider>
  )
}

export default App
