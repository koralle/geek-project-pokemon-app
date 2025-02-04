import { queryOptions } from '@tanstack/react-query'
import type { PokemonSpeciesId } from '../../entities/pokemon'
import { getPokemonSpecies } from '../../lib/api/pokemon-species'
import { DEFAULT_CACHE_STALE_TIME } from '../../lib/constants'

export const pokemonSpeciesQueryOptions = (pokemonSpeciesId: PokemonSpeciesId) =>
  queryOptions({
    queryKey: ['pokemon-species', pokemonSpeciesId],
    queryFn: ({ signal }) => getPokemonSpecies(pokemonSpeciesId, { signal }),
    staleTime: DEFAULT_CACHE_STALE_TIME,
  })
