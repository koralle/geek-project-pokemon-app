import { type Dispatch, type SetStateAction, createContext, useContext } from 'react'

export interface PageContextState {
  page: number
}

export interface SetPageContextState {
  setPage: Dispatch<SetStateAction<number>>
}

const createPageContext = () => {
  const PageContext = createContext<PageContextState | undefined>(undefined)
  PageContext.displayName = 'PageContext'

  const usePageContext = () => {
    const pageContext = useContext(PageContext)
    if (!pageContext) {
      const error = new Error('usePageContext must be used within a PageContext')
      error.name = 'PageContextError'
      throw error
    }

    return pageContext
  }

  return { PageContext, usePageContext }
}

const createSetPageContext = () => {
  const SetPageContext = createContext<SetPageContextState | undefined>(undefined)
  SetPageContext.displayName = 'SetPageContext'

  const useSetPageContext = () => {
    const setPageContext = useContext(SetPageContext)
    if (!setPageContext) {
      const error = new Error('useSetPageContext must be used within a SetPageContext')
      error.name = 'SetPageContextError'
      throw error
    }

    return setPageContext
  }

  return { SetPageContext, useSetPageContext }
}

export const { PageContext, usePageContext } = createPageContext()
export const { SetPageContext, useSetPageContext } = createSetPageContext()
