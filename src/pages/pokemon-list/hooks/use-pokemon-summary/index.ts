import { useSuspenseQuery } from '@tanstack/react-query'
import {
  type PokedexNumber,
  type PokemonSpeciesId,
  type TypeId,
  pokedexNumberSchema,
  pokemonIdSchema,
  pokemonSpeciesIdSchema,
  typeIdSchema,
} from '../../../../entities'
import { parseNumberFromUrl, pokemonQueryOptions, pokemonSpeciesQueryOptions } from '../../../../lib'
import type { GetRawPokemonSpeciesResponse } from '../../../../lib'

export interface PokemonSummary {
  id: PokemonSpeciesId
  nationalPokedexNumber: PokedexNumber
  name: string
  imageSrc?: string
  typeIds: TypeId[]
}

const getDefaultVariety = (varieties: GetRawPokemonSpeciesResponse['varieties']) => {
  return varieties.find((variety) => variety.is_default)
}

const getNationalPokedexNumber = (pokemonSpecies: GetRawPokemonSpeciesResponse['pokedex_numbers']) => {
  return pokemonSpecies.find((pokedexNumber) => pokedexNumber.pokedex.name === 'national')?.entry_number
}

const usePokemonSummary = (id: PokemonSpeciesId) => {
  const { data: pokemonSpecies } = useSuspenseQuery(pokemonSpeciesQueryOptions(id))

  const pokemonId = pokemonIdSchema.parse(
    parseNumberFromUrl(getDefaultVariety(pokemonSpecies.varieties)?.pokemon.url ?? '') ?? 1,
  )

  const { data: pokemon, isSuccess } = useSuspenseQuery(pokemonQueryOptions(pokemonId))

  return {
    data: {
      id: pokemonSpeciesIdSchema.parse(pokemonSpecies.id),
      nationalPokedexNumber: pokedexNumberSchema.parse(getNationalPokedexNumber(pokemonSpecies.pokedex_numbers) ?? 1),
      name:
        pokemonSpecies.names.find((name) => name.language.name === 'ja')?.name ??
        pokemonSpecies.names.find((name) => name.language.name === 'ja-Hrkt')?.name ??
        pokemon.name,
      imageSrc: pokemon.sprites.front_default ?? '',
      typeIds: pokemon.types.map((type) => typeIdSchema.parse(parseNumberFromUrl(type.type.url) ?? 1)),
    } satisfies PokemonSummary,
    isSuccess,
  }
}

export { usePokemonSummary }
