import { ConfigProvider } from 'antd'
import { themeConfig } from './antd.config'

export const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
}
