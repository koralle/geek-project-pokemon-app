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
import { useId } from 'react'
import type { Ability, EggGroup, Type } from '../../entities'
import type { PokedexNumber } from '../../entities/pokedex-number'
import { PokemonDataList } from './data-list'

interface PokemonDetail {
  name: string
  nationalPokedexNumber: PokedexNumber
  imageSrc: string
  types: Type[]
  eggGroups: EggGroup[]
  abilities: Ability[]
  height: number
  weight: number
}

interface PokemonModalDialogProps {
  open: boolean
  onClose: () => void
  pokemonDetail: PokemonDetail
}

export const PokemonModalDialog = ({ open, onClose, pokemonDetail }: PokemonModalDialogProps) => {
  const modalLabelId = useId()

  return (
    <Modal
      open={open}
      onClose={onClose}
      size={{ base: 'lg', md: '4xl', xl: '5xl' }}
      rounded="2xl"
      animation="bottom"
      duration={0.4}
      aria-labelledby={modalLabelId}
    >
      <ModalOverlay backdropFilter="blur(10px)" />

      <ModalHeader>
        <Text>ポケモン詳細</Text>
      </ModalHeader>

      <ModalBody as={VStack} alignItems="center">
        <Heading id={modalLabelId} textAlign="center">
          #{pokemonDetail.nationalPokedexNumber} {pokemonDetail.name}
        </Heading>
        <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={{ base: 8, md: 16 }}>
          <Box position="relative">
            <Center>
              <Image
                src="/monster-ball.svg"
                alt="monster-ball"
                w={{ base: 320, md: 360 }}
                h={{ base: 320, md: 360 }}
                position="relative"
                aria-hidden
              />
              <Image
                position="absolute"
                src={pokemonDetail.imageSrc}
                alt={pokemonDetail.name}
                w={{ base: 320, md: 360 }}
                h={{ base: 320, md: 360 }}
                decoding="auto"
              />
            </Center>
          </Box>
          <Box px={{ base: 0, md: '2rem' }} py="2rem">
            <PokemonDataList
              nationalPokedexNumber={pokemonDetail.nationalPokedexNumber}
              abilities={pokemonDetail.abilities}
              eggGroups={pokemonDetail.eggGroups}
              types={pokemonDetail.types}
              height={pokemonDetail.height}
              weight={pokemonDetail.weight}
            />
          </Box>
        </Grid>
      </ModalBody>

      <ModalFooter>
        <Button onClick={onClose}>戻る</Button>
      </ModalFooter>
    </Modal>
  )
}
