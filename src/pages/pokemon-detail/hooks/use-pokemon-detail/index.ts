import { useSuspenseQuery } from '@tanstack/react-query'
import { z } from 'zod'
import type { PokemonId, PokemonSpeciesId } from '../../../../entities/pokemon'
import type { GetRawPokemonSpeciesResponse } from '../../../../lib/api/pokemon-species'
import { pokemonQueryOptions } from '../../../../lib/query-options/pokemon'
import { pokemonSpeciesQueryOptions } from '../../../../lib/query-options/pokemon-species'

import { abilityIdSchema } from '../../../../entities/ability'
import { eggGroupIdSchema } from '../../../../entities/egg-group'
import { pokedexNumberSchema } from '../../../../entities/pokedex-number'
import { pokemonIdSchema, pokemonSpeciesIdSchema } from '../../../../entities/pokemon'
import { typeIdSchema } from '../../../../entities/type'
import { parseNumberFromUrl } from '../../../../lib/utils/parse'

const pokemonDetailSchema = z.object({
  id: pokemonSpeciesIdSchema,
  nationalPokedexNumber: pokedexNumberSchema,
  name: z.string(),
  typeIds: z.array(typeIdSchema),
  imageSrc: z.string(),
  height: z.number(),
  weight: z.number(),
  eggGroupIds: z.array(eggGroupIdSchema),
  abilityIds: z.array(
    z.object({
      id: abilityIdSchema,
      is_hidden: z.boolean(),
    }),
  ),
  genera: z.string(),
})

export type PokemonDetail = z.infer<typeof pokemonDetailSchema>

const getDefaultVariety = (varieties: GetRawPokemonSpeciesResponse['varieties']) => {
  return varieties.find((variety) => variety.is_default)
}

const parsePokemonIdFromVariety = (variety?: GetRawPokemonSpeciesResponse['varieties'][number]): PokemonId => {
  if (!variety) {
    return pokemonIdSchema.parse(1)
  }

  const url = new URL(variety.pokemon.url)
  const paths = url.pathname.split('/')
  const id = paths.filter(Boolean).pop()

  return pokemonIdSchema.parse(Number.parseInt(id ?? '1', 10))
}

const usePokemonDetail = (id: PokemonSpeciesId) => {
  const { data: pokemonSpecies } = useSuspenseQuery(pokemonSpeciesQueryOptions(id))

  const pokemonId = parsePokemonIdFromVariety(getDefaultVariety(pokemonSpecies.varieties))

  const { data: pokemon, isSuccess } = useSuspenseQuery(pokemonQueryOptions(pokemonId))

  return {
    data: {
      id: pokemonSpeciesIdSchema.parse(pokemonSpecies.id),
      nationalPokedexNumber: pokedexNumberSchema.parse(
        pokemonSpecies.pokedex_numbers.find((pokedexNumber) => pokedexNumber.pokedex.name === 'national')
          ?.entry_number ?? 0,
      ),
      name:
        pokemonSpecies.names.find((name) => name.language.name === 'ja')?.name ??
        pokemonSpecies.names.find((name) => name.language.name === 'ja-Hrkt')?.name ??
        pokemon.name,
      imageSrc: pokemon.sprites.front_default ?? '',
      typeIds: pokemon.types.map((type) => typeIdSchema.parse(parseNumberFromUrl(type.type.url) ?? 1)),
      height: pokemon.height,
      weight: pokemon.weight,
      abilityIds: pokemon.abilities.map((ability) => ({
        id: abilityIdSchema.parse(parseNumberFromUrl(ability.ability.url) ?? 1),
        is_hidden: ability.is_hidden,
      })),
      genera:
        pokemonSpecies.genera.find((genera) => genera.language.name === 'ja')?.genus ??
        pokemonSpecies.genera.find((genera) => genera.language.name === 'ja-Hrkt')?.genus ??
        pokemonSpecies.name,
      eggGroupIds: pokemonSpecies.egg_groups.map((eggGroup) =>
        eggGroupIdSchema.parse(parseNumberFromUrl(eggGroup.url) ?? 1),
      ),
    } satisfies PokemonDetail,
    isSuccess,
  }
}

export { usePokemonDetail }
