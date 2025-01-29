import { Box, Card, CardBody, Center, Image, Link, Text, VStack } from '@yamada-ui/react'
import type { PokemonSpeciesId } from '../../../entities'
import { usePokemonSummary } from '../hooks'

interface PokemonSummaryCardProps {
  id: PokemonSpeciesId
  detailPageUrl: string
}

const PokemonSummaryCard = ({ id, detailPageUrl }: PokemonSummaryCardProps) => {
  const { data } = usePokemonSummary(id)

  return (
    <Card as={Link} href={detailPageUrl} rounded="2xl" position="relative" overflow="hidden">
      <CardBody>
        <VStack gap={{ base: 8, lg: 8, md: 8, sm: 6 }}>
          <Box position="relative">
            <Center>
              <Image
                src="/monster-ball.svg"
                alt="monster-ball"
                w={{ base: '160px', lg: '160px', md: '120px', sm: '120px' }}
                h={{ base: '160px', lg: '160px', md: '120px', sm: '120px' }}
                aria-hidden
                position="relative"
                decoding="async"
              />
              {data.imageSrc ? (
                <Image
                  position="absolute"
                  src={data.imageSrc}
                  alt={data.name}
                  w={{ base: '160px', lg: '160px', md: '120px', sm: '120px' }}
                  h={{ base: '160px', lg: '160px', md: '120px', sm: '120px' }}
                  decoding="async"
                />
              ) : (
                <Text fontSize={{ base: 'lg', md: 'md' }} textAlign="center" fontWeight="bold" position="absolute">
                  Not Found
                </Text>
              )}
            </Center>
          </Box>
          <Text fontSize={{ base: 'lg', md: 'md' }} textAlign="center" fontWeight="bold">
            {data.name}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  )
}

export { PokemonSummaryCard }
