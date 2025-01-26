import { queryOptions } from '@tanstack/react-query'
import type { PokemonSpeciesId } from '../../entities'
import { DEFAULT_CACHE_STALE_TIME, getPokemonSpecies } from '../../lib'

export const pokemonSpeciesQueryOptions = (pokemonSpeciesId: PokemonSpeciesId) =>
  queryOptions({
    queryKey: ['pokemon-species', pokemonSpeciesId],
    queryFn: ({ signal }) => getPokemonSpecies(pokemonSpeciesId, { signal }),
    staleTime: DEFAULT_CACHE_STALE_TIME,
  })
