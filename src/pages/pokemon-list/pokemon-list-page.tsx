import { Box, Center, Container, Heading, Text, VStack } from '@yamada-ui/react'
import { Suspense, useState } from 'react'
import { PokemonCollection, PokemonCollectionPagination, SkeltonPokemonCollection } from './components'
import { SetTotalContext, TotalContext } from './lib'

export const PokemonListPage = () => {
  const [total, setTotal] = useState(1000)

  return (
    <SetTotalContext.Provider value={{ setTotal }}>
      <TotalContext.Provider value={{ total }}>
        <Center>
          <Container maxW={960} h="full">
            <VStack gap={{ base: 12, lg: 10, md: 8 }}>
              <Box as="header">
                <VStack as="hgroup" gap={{ base: 6, lg: 4, md: 4, sm: 4 }}>
                  <Heading as="h1" w="full" textAlign="center">
                    ポケモン一覧
                  </Heading>
                  <Text w="full" textAlign="center" fontSize={{ base: 'xl', sm: 'md' }}>
                    好きなポケモンをクリックしてみよう！
                  </Text>
                </VStack>
              </Box>
              <Suspense fallback={<SkeltonPokemonCollection />}>
                <PokemonCollection />
              </Suspense>
              <Box as="footer">
                <PokemonCollectionPagination />
              </Box>
            </VStack>
          </Container>
        </Center>
      </TotalContext.Provider>
    </SetTotalContext.Provider>
  )
}
