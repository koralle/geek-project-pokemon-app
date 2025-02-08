import { Box, Center, Container, Heading, Text, VStack } from '@yamada-ui/react'
import { type ReactNode, Suspense, useId, useState } from 'react'
import { PokemonCollection } from './components/list/collection'
import { PokemonCollectionPagination } from './components/list/pagination'
import { PageContext, SetPageContext } from './lib/contexts/page-context'
import { SetTotalContext, TotalContext } from './lib/contexts/total-context'

const Provider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(1000)

  return (
    <SetTotalContext.Provider value={{ setTotal }}>
      <SetPageContext.Provider value={{ setPage }}>
        <TotalContext.Provider value={{ total }}>
          <PageContext.Provider value={{ page }}>{children}</PageContext.Provider>
        </TotalContext.Provider>
      </SetPageContext.Provider>
    </SetTotalContext.Provider>
  )
}

export const App = () => {
  const headingId = useId()

  return (
    <Provider>
      <Center h="100%">
        <Container p={0} h="100%">
          <VStack gap={10} aria-labelledby={headingId} h="100%">
            <Box as="header">
              <VStack id={headingId} as="hgroup" gap={{ base: 6, lg: 4 }}>
                <Heading as="h1" w="full" textAlign="center">
                  ポケモン一覧
                </Heading>
                <Text w="full" textAlign="center" fontSize={{ base: 'xl', sm: 'md' }}>
                  好きなポケモンを探そう！
                </Text>
              </VStack>
            </Box>

            <Suspense fallback={<PokemonCollection.Loading />}>
              <PokemonCollection />
            </Suspense>

            <Center>
              <PokemonCollectionPagination />
            </Center>
          </VStack>
        </Container>
      </Center>
    </Provider>
  )
}
