import { Grid, Text } from '@yamada-ui/react'
import { type ReactNode, Suspense, useEffect } from 'react'
import { usePokemonSpeciesList } from '../../hooks/use-pokemon-species-list'
import { DEFAULT_LIMIT } from '../../lib/constants'
import { usePageContext } from '../../lib/contexts/page-context'
import { useSetTotalContext } from '../../lib/contexts/total-context'
import { PokemonProfileCard } from './card'

const Loading = () => {
  return <Text>Loading...</Text>
}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(4, 1fr)', lg: 'repeat(3, 1fr)', md: 'repeat(2, 1fr)' }}
      gap={{ base: 6, lg: 6, md: 6, sm: 4 }}
    >
      {children}
    </Grid>
  )
}

export const PokemonCollection = () => {
  const { page } = usePageContext()
  const { setTotal } = useSetTotalContext()

  const { data } = usePokemonSpeciesList({ page, limit: DEFAULT_LIMIT })
  const { count, results } = data

  useEffect(() => {
    setTotal(() => count)
  }, [count, setTotal])

  return (
    <Layout>
      {results.map((result) => (
        <Suspense key={result.id} fallback={<PokemonProfileCard.Loading />}>
          <PokemonProfileCard key={result.id} id={result.id} />
        </Suspense>
      ))}
    </Layout>
  )
}

PokemonCollection.Loading = Loading
