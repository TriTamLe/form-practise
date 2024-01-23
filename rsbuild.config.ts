import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'
import path from 'path'

export default defineConfig({
  html: {
    title: 'Form Practise',
    meta: {
      description: 'A place to practise form in React',
    },
  },
  source: {
    alias: {
      '@': path.join(__dirname, 'src/'),
    },
  },
  plugins: [pluginReact()],
})
