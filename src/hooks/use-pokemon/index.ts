import { useSuspenseQuery } from '@tanstack/react-query'
import type { Pokemon, PokemonSpeciesId } from '../../entities'
import { abilitySchema, eggGroupSchema, pokedexNumberSchema, typeSchema } from '../../entities'
import { pokemonIdSchema, pokemonSchema, pokemonSpeciesIdSchema } from '../../entities/pokemon'
import { getPokemon } from '../../lib/api/pokemon'
import { getPokemonSpecies } from '../../lib/api/pokemon-species'
import type { GetRawPokemonSpeciesResponse } from '../../lib/api/pokemon-species'
import { parseNumberFromUrl } from '../../lib/utils/parse'

const getDefaultVariety = (varieties: GetRawPokemonSpeciesResponse['varieties']) => {
  return varieties.find((variety) => variety.is_default)
}

const getNationalPokedexNumber = (pokemonSpecies: GetRawPokemonSpeciesResponse['pokedex_numbers']) => {
  return pokemonSpecies.find((pokedexNumber) => pokedexNumber.pokedex.name === 'national')?.entry_number
}

export const usePokemon = (id: PokemonSpeciesId) => {
  const { data: pokemonSpecies, isSuccess: isPokemonSpeciesSuccess } = useSuspenseQuery({
    queryKey: ['pokemon-species', id],
    queryFn: () => getPokemonSpecies(id),
  })

  const pokemonId = pokemonIdSchema.parse(
    parseNumberFromUrl(getDefaultVariety(pokemonSpecies.varieties)?.pokemon.url ?? '') ?? 1,
  )

  const { data: pokemon, isSuccess: isPokemonSuccess } = useSuspenseQuery({
    queryKey: ['pokemon', pokemonId],
    queryFn: () => getPokemon(pokemonId),
  })

  return {
    data: pokemonSchema.parse({
      id: pokemonSpeciesIdSchema.parse(pokemonSpecies.id),
      nationalPokedexNumber: pokedexNumberSchema.parse(getNationalPokedexNumber(pokemonSpecies.pokedex_numbers)),
      name:
        pokemonSpecies.names.find((name) => name.language.name === 'ja')?.name ??
        pokemonSpecies.names.find((name) => name.language.name === 'ja-Hrkt')?.name ??
        pokemon.name,
      imageSrc: pokemon.sprites.front_default ?? '',
      types: pokemon.types.map((type) => typeSchema.parse(type.type.name)),
      abilities: pokemon.abilities.map((ability) =>
        abilitySchema.parse({ name: ability.ability.name, hidden: ability.is_hidden }),
      ),
      eggGroups: pokemonSpecies.egg_groups.map((eggGroup) => eggGroupSchema.parse(eggGroup.name)),
      height: pokemon.height,
      weight: pokemon.weight,
    }) satisfies Pokemon,
    isSuccess: isPokemonSpeciesSuccess && isPokemonSuccess,
  }
}
