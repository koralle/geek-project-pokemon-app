import { Box, Grid, type GridProps } from '@yamada-ui/react'
import { type ReactNode, Suspense, useEffect } from 'react'
import { useLastPage } from '../../hooks/use-last-page'
import { usePokemonSpeciesList } from '../../hooks/use-pokemon-species-list'
import { DEFAULT_LIMIT } from '../../lib/constants'
import { usePageContext } from '../../lib/contexts/page-context'
import { useSetTotalContext } from '../../lib/contexts/total-context'
import { PokemonProfileCard } from './card'

const Loading = () => <Grid w="100%" h="100%" placeContent="center" />

const Layout = ({ children }: { children: ReactNode }) => {
  const { isLastPage } = useLastPage()

  const gridStyles = {
    w: '100%',
    templateColumns: { base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
    gap: { base: 4, sm: 4, md: 6 },
  } as const satisfies Pick<Required<GridProps>, 'templateColumns' | 'gap' | 'w'>

  return isLastPage ? (
    <Box w="100%" h="100%">
      <Grid {...gridStyles}>{children}</Grid>
    </Box>
  ) : (
    <Grid {...gridStyles} h="100%">
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
