import { useSearch } from '@tanstack/react-router'
import { Grid } from '@yamada-ui/react'
import { Suspense, useEffect } from 'react'
import { usePokemonSpeciesList } from '../hooks'
import { DEFAULT_LIMIT, DEFAULT_PAGE, useSetTotalContext } from '../lib'
import { PokemonSummaryCard } from './card'

const PokemonCollection = () => {
  const { page } = useSearch({ strict: false })
  const { setTotal } = useSetTotalContext()

  const { data } = usePokemonSpeciesList({ page: page ?? DEFAULT_PAGE, limit: DEFAULT_LIMIT })

  useEffect(() => {
    setTotal(data.count)
  }, [data.count, setTotal])

  return (
    <Grid
      gap={{ base: 6, lg: 6, md: 6, sm: 4 }}
      templateColumns={{ base: 'repeat(4, 1fr)', lg: 'repeat(4, 1fr)', md: 'repeat(4, 1fr)', sm: 'repeat(2, 1fr)' }}
    >
      {data.results.map((pokemon) => (
        <Suspense key={pokemon.name}>
          <PokemonSummaryCard key={pokemon.name} id={pokemon.id} detailPageUrl={`/${pokemon.id}`} />
        </Suspense>
      ))}
    </Grid>
  )
}
export { PokemonCollection }
