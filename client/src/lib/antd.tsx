import { ConfigProvider, ThemeConfig } from 'antd'
import colorsConfig from '../data/color'

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: colorsConfig.DEEP_SPACE_SPARKLE,
    colorTextBase: colorsConfig.RICH_BLACK,
  },
}

export const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
}
