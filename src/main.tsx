import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { UIProvider } from '@yamada-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { Layout } from './components/layout'
import { queryClient } from './lib/query-client'
import { theme } from './styles'
import { customConfig } from './styles/config'

// biome-ignore lint/style/noNonNullAssertion:
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UIProvider
        theme={theme}
        config={customConfig}
      >
        <Layout>
          <App />
        </Layout>
      </UIProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)
