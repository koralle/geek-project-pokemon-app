import type { QueryClient } from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRootRouteWithContext } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import { UIProvider } from '@yamada-ui/react'
import { lazy } from 'react'
import { queryClient } from '../lib'

const TanStackRouterDevtools =
  // @ts-ignore
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      )

export interface RootRouteContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<RootRouteContext>()({
  component: () => {
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <UIProvider>
            <Outlet />
          </UIProvider>
          <ReactQueryDevtools />
          <TanStackRouterDevtools />
        </QueryClientProvider>
      </>
    )
  },
})
