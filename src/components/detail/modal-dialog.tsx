import {
  Box,
  Button,
  Center,
  Grid,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from '@yamada-ui/react'
import { memo, useId } from 'react'
import type { Pokemon } from '../../entities'
import { PokemonDataList } from './data-list'

interface PokemonDetail extends Pokemon {}

interface PokemonModalDialogProps {
  open: boolean
  onClose: () => void
  pokemonDetail: PokemonDetail
}

export const PokemonModalDialog = memo(({ open, onClose, pokemonDetail }: PokemonModalDialogProps) => {
  const modalLabelId = useId()
  const { name, nationalPokedexNumber, imageSrc, types, eggGroups, abilities, height, weight } = pokemonDetail

  return (
    <Modal
      open={open}
      onClose={onClose}
      size={{ base: 'lg', md: '3xl', lg: '4xl' }}
      rounded="2xl"
      animation="bottom"
      duration={0.4}
      aria-labelledby={modalLabelId}
    >
      <ModalOverlay backdropFilter="blur(10px)" />

      <ModalHeader p={6}>
        <Text textAlign="center" w="100%">
          ポケモン詳細
        </Text>
      </ModalHeader>

      <ModalBody as={VStack} alignItems="center" gap={{ base: 8, lg: 10 }} p={6} pt={0} my={0}>
        <Heading id={modalLabelId} textAlign="center">
          #{nationalPokedexNumber} {name}
        </Heading>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={{ base: 8, lg: 10 }}>
          <Box position="relative">
            <Center>
              <Image
                src="/monster-ball.svg"
                alt=""
                w={{ base: 280, lg: 320 }}
                h={{ base: 280, lg: 320 }}
                position="relative"
                aria-hidden
                opacity={0.8}
              />
              <Image
                position="absolute"
                src={imageSrc}
                alt={name}
                w={{ base: 280, lg: 320 }}
                h={{ base: 280, lg: 320 }}
                decoding="auto"
              />
            </Center>
          </Box>
          <Box>
            <PokemonDataList
              nationalPokedexNumber={nationalPokedexNumber}
              abilities={abilities}
              eggGroups={eggGroups}
              types={types}
              height={height}
              weight={weight}
            />
          </Box>
        </Grid>
      </ModalBody>

      <ModalFooter p={6}>
        <Button onClick={onClose}>戻る</Button>
      </ModalFooter>
    </Modal>
  )
})
