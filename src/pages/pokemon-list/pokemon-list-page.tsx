import { useState } from 'react'
import { SetTotalContext, TotalContext } from './lib'

export const PokemonListPage = () => {
  const [total, setTotal] = useState(1000)

  return (
    <SetTotalContext.Provider value={{ setTotal }}>
      <TotalContext.Provider value={{ total }}>
        <h1>ポケモン一覧ページ</h1>
      </TotalContext.Provider>
    </SetTotalContext.Provider>
  )
}
