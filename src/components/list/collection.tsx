import { Box, Center, Grid, Image, Text } from '@yamada-ui/react'
import type { GridProps } from '@yamada-ui/react'
import { Suspense, memo, useEffect } from 'react'
import type { ReactNode } from 'react'
import { usePokemonSpeciesList } from '../../hooks/use-pokemon-species-list'
import { DEFAULT_LIMIT } from '../../lib/constants'
import { usePageContext } from '../../lib/contexts/page-context'
import { useSetTotalContext, useTotalContext } from '../../lib/contexts/total-context'
import { PokemonProfileCard } from './card'

const SkeltonPokemonCollection = memo(() => (
  <Grid w="100%" h="100%" placeContent="center">
    <Center>
      <Image
        src="/monster-ball.svg"
        alt=""
        w={{ base: 240, md: 480 }}
        h={{ base: 240, md: 480 }}
        aria-hidden
        decoding="auto"
        opacity={0.8}
      />
      <Text position="absolute" fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold">
        Now Loading...
      </Text>
    </Center>
  </Grid>
))

export const useLastPage = () => {
  const { total } = useTotalContext()
  const { page } = usePageContext()

  const isLastPage = Math.ceil(total / DEFAULT_LIMIT) === page

  return {
    isLastPage,
  }
}

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
          <PokemonProfileCard id={result.id} />
        </Suspense>
      ))}
    </Layout>
  )
}

PokemonCollection.Loading = SkeltonPokemonCollection
