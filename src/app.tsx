import { useState } from 'react'
import type { ReactNode } from 'react'
import { PageContext, SetPageContext } from './lib/contexts/page-context'

const Providers = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(1)

  return (
    <SetPageContext.Provider value={{ setPage }}>
      <PageContext.Provider value={{ page }}>{children}</PageContext.Provider>
    </SetPageContext.Provider>
  )
}

export const App = () => {
  return (
    <Providers>
      <h1>Hello, world!</h1>
    </Providers>
  )
}
