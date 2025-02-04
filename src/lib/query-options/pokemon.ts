import { queryOptions } from '@tanstack/react-query'
import type { PokemonId } from '../../entities/pokemon'
import { getPokemon } from '../../lib/api/pokemon'
import { DEFAULT_CACHE_STALE_TIME } from '../../lib/constants'

export const pokemonQueryOptions = (pokemonId: PokemonId) =>
  queryOptions({
    queryKey: ['pokemon', pokemonId],
    queryFn: ({ signal }) => getPokemon(pokemonId, { signal }),
    staleTime: DEFAULT_CACHE_STALE_TIME,
  })
