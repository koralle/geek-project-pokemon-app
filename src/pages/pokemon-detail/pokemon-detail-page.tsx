import { useParams } from '@tanstack/react-router'
import { Box, Button, Center, Container, Grid, Heading, Image, Link, VStack } from '@yamada-ui/react'
import { pokemonSpeciesIdSchema } from '../../entities'
import { PokemonDataList } from './components'
import { usePokemonDetail } from './hooks'

export const PokemonDetailPage = () => {
  const { id } = useParams({ strict: false })
  if (!id) {
    return null
  }

  const validPokemonId = pokemonSpeciesIdSchema.parse(Number.parseInt(id))

  const { data: pokemonDetail } = usePokemonDetail(validPokemonId)

  return (
    <Center>
      <Container maxW={960} px={{ base: '2rem', md: '1rem' }}>
        <VStack gap="4rem">
          <Heading textAlign="center">
            #{pokemonDetail.nationalPokedexNumber} {pokemonDetail.name}
          </Heading>
          <Grid templateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(1, 1fr)' }} gap={{ base: '4rem', sm: '2rem' }}>
            <Box mx="auto">
              <Box w="max-content" h="max-content">
                <Box position="relative">
                  <Image
                    src="/monster-ball.svg"
                    alt="monster-ball"
                    w={{ base: 360, md: 320 }}
                    h={{ base: 360, md: 320 }}
                    position="relative"
                    aria-hidden
                  />
                  <Image
                    position="absolute"
                    inset={0}
                    src={pokemonDetail.imageSrc}
                    alt={pokemonDetail.name}
                    w={{ base: 360, md: 320 }}
                    h={{ base: 360, md: 320 }}
                    decoding="async"
                  />
                </Box>
              </Box>
            </Box>
            <Box px={{ base: 0, md: '2rem' }} py="2rem">
              <PokemonDataList pokemonDetail={pokemonDetail} />
            </Box>
          </Grid>
        </VStack>
        <Box as="footer" paddingBlockEnd={10}>
          <Button as={Link} href="/" w="full" h={12}>
            ポケモン一覧へ戻る
          </Button>
        </Box>
      </Container>
    </Center>
  )
}
