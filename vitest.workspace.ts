import { defineWorkspace } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

export default defineWorkspace([
  {
    test: {
      name: 'fetcher',
      environment: 'node',
      include: ['src/**/fetcher.test.ts'],
      setupFiles: ['./setup-msw.ts'],
      globals: true
    }
  },
  {
    // @ts-ignore
    plugins: [react()],
    test: {
      name: 'react',
      environment: 'jsdom',
      include: ['src/**/*.test.{ts,tsx}'],
      exclude: ['src/**/fetcher.test.ts'],
      setupFiles: ['./setup-msw.ts'],
      globals: true
    }
  }
])
