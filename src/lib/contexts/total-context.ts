import { type Dispatch, type SetStateAction, createContext, useContext } from 'react'

export interface TotalContextState {
  total: number
}

export interface SetTotalContextState {
  setTotal: Dispatch<SetStateAction<number>>
}

const createTotalContext = () => {
  const TotalContext = createContext<TotalContextState | undefined>(undefined)
  TotalContext.displayName = 'TotalContext'

  const useTotalContext = () => {
    const totalContext = useContext(TotalContext)
    if (!totalContext) {
      const error = new Error('useTotalContext must be used within a TotalContext')
      error.name = 'TotalContextError'
      throw error
    }

    return totalContext
  }

  return { TotalContext, useTotalContext }
}

const createSetTotalContext = () => {
  const SetTotalContext = createContext<SetTotalContextState | undefined>(undefined)
  SetTotalContext.displayName = 'SetTotalContext'

  const useSetTotalContext = () => {
    const setTotalContext = useContext(SetTotalContext)
    if (!setTotalContext) {
      const error = new Error('useSetTotalContext must be used within a SetTotalContext')
      error.name = 'SetTotalContextError'
      throw error
    }

    return setTotalContext
  }

  return { SetTotalContext, useSetTotalContext }
}

export const { TotalContext, useTotalContext } = createTotalContext()
export const { SetTotalContext, useSetTotalContext } = createSetTotalContext()
