import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import path from 'path'

export default defineConfig({
  source: {
    alias: {
      '@': path.join(__dirname, 'src/'),
    },
  },
  plugins: [pluginReact()],
})
