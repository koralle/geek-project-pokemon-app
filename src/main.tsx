import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { UIProvider } from '@yamada-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app'
import { Layout } from './components/layout'
import { queryClient } from './lib/query-client'

// biome-ignore lint/style/noNonNullAssertion:
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UIProvider>
        <Layout>
          <App />
        </Layout>
      </UIProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
)
