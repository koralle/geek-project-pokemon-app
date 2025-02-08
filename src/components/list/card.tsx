import {
  Card,
  CardBody,
  CardHeader,
  Center,
  Image,
  Motion,
  Ripple,
  Skeleton,
  Text,
  VStack,
  useDisclosure,
  useRipple,
} from '@yamada-ui/react'
import { memo, useId } from 'react'
import type { PokemonSpeciesId } from '../../entities'
import { usePokemon } from '../../hooks/use-pokemon'
import { PokemonModalDialog } from '../detail/modal-dialog'

const BackgroundImage = memo(() => (
  <Image
    src="/monster-ball.svg"
    alt=""
    w={{ base: 120, md: 160 }}
    h={{ base: 120, md: 160 }}
    aria-hidden
    decoding="auto"
    opacity={0.8}
  />
))

const SkeltonPokemonProfileCard = memo(() => (
  <Card w="full" rounded="2xl" as="button" disabled>
    <CardHeader>
      <Skeleton w="100%">
        <Text>Skelton</Text>
      </Skeleton>
    </CardHeader>
    <CardBody as={VStack} alignItems="center" gap={6} paddingBlockStart={6}>
      <Center>
        <BackgroundImage />

        <Text position="absolute" fontWeight="bold">
          Now
          <br />
          Loading...
        </Text>
      </Center>

      <Skeleton w="100%">
        <Text textAlign="center">Skelton</Text>
      </Skeleton>
    </CardBody>
  </Card>
))

interface PokemonProfileCardProps {
  id: PokemonSpeciesId
}

export const PokemonProfileCard = ({ id }: PokemonProfileCardProps) => {
  const { data } = usePokemon(id)
  const { name, nationalPokedexNumber, imageSrc } = data

  const { open, onOpen, onClose } = useDisclosure()
  const { onPointerDown, ripples, onClear } = useRipple()

  const cardLabelId = useId()

  return (
    <>
      <Motion whileHover={{ scale: 1.05, translateY: -8 }}>
        <Card
          as="button"
          onClick={onOpen}
          rounded="2xl"
          onPointerDown={onPointerDown}
          position="relative"
          overflow="hidden"
          aria-labelledby={cardLabelId}
          w="100%"
        >
          <CardHeader w="100%">
            <Text fontWeight="bold" textAlign="start">
              #{nationalPokedexNumber}
            </Text>
          </CardHeader>
          <CardBody as={VStack} alignItems="center" gap={6} paddingBlockStart={6}>
            <Center>
              <BackgroundImage />

              {imageSrc ? (
                <Image
                  position="absolute"
                  src={imageSrc}
                  alt={name}
                  decoding="auto"
                  w={{ base: 120, md: 160 }}
                  h={{ base: 120, md: 160 }}
                />
              ) : (
                <Text fontSize={{ base: 'lg', md: 'md' }} textAlign="center" fontWeight="bold" position="absolute">
                  Not Found
                </Text>
              )}
            </Center>
            <Text id={cardLabelId} textAlign="center" fontWeight="bold">
              {name}
            </Text>
          </CardBody>
          <Ripple ripples={ripples} onClear={onClear} />
        </Card>
      </Motion>
      <PokemonModalDialog open={open} onClose={onClose} pokemonDetail={data} />
    </>
  )
}

PokemonProfileCard.Loading = SkeltonPokemonProfileCard
