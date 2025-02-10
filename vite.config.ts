import react from '@vitejs/plugin-react-swc'
import { getColorModeScript } from '@yamada-ui/react'
import { defineConfig, Plugin } from 'vite'
import { customConfig } from './src/styles/config'

const injectScript = (): Plugin => {
  return {
    name: 'vite-plugin-inject-scripts',
    transformIndexHtml(html, _) {
      const content = getColorModeScript({
        initialColorMode: customConfig.initialColorMode ?? 'system',
      })

      return html.replace("<body>", `<body><script>${content}</script>`)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), injectScript()],
})
