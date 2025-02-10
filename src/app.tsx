import { useState } from 'react'
import type { ReactNode } from 'react'
import { PageContext, SetPageContext } from './lib/contexts/page-context'
import { SetTotalContext, TotalContext } from './lib/contexts/total-context'

const Providers = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(1000)

  return (
    <SetPageContext.Provider value={{ setPage }}>
      <SetTotalContext.Provider value={{ setTotal }}>
        <TotalContext.Provider value={{ total }}>
          <PageContext.Provider value={{ page }}>{children}</PageContext.Provider>
        </TotalContext.Provider>
      </SetTotalContext.Provider>
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
