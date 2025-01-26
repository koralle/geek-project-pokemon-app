import { useSuspenseQuery } from '@tanstack/react-query'
import { type PokemonSpeciesId, pokemonSpeciesIdSchema } from '../../../../entities'
import { DEFAULT_CACHE_STALE_TIME, parseNumberFromUrl } from '../../../../lib'
import { type GetRawPokemonSpeciesListResponse, getRawPokemonSpeciesList } from '../../lib'

export interface PokemonSpeciesList {
  count: GetRawPokemonSpeciesListResponse['count']
  results: Array<Pick<GetRawPokemonSpeciesListResponse['results'][number], 'name' | 'url'> & { id: PokemonSpeciesId }>
}

const pokemonSpeciesListQueryOptions = (
  { limit = 20, page = 1 }: { limit?: number; page?: number } = { limit: 20, page: 1 },
) => ({
  queryKey: ['pokemon-species-list', { page, limit }],
  queryFn: () => getRawPokemonSpeciesList({ page, limit }),
  staleTime: DEFAULT_CACHE_STALE_TIME,
})

const usePokemonSpeciesList = (
  { limit = 20, page = 1 }: { limit?: number; page?: number } = { limit: 20, page: 1 },
) => {
  const usePokemonSpeciesListQuery = useSuspenseQuery(pokemonSpeciesListQueryOptions({ page, limit }))

  const pokemonList = usePokemonSpeciesListQuery.data.results.map((result) => ({
    id: pokemonSpeciesIdSchema.parse(parseNumberFromUrl(result.url) ?? 1),
    ...result,
  }))

  return {
    ...usePokemonSpeciesListQuery,
    data: {
      count: usePokemonSpeciesListQuery.data.count,
      results: pokemonList,
    } satisfies PokemonSpeciesList,
  }
}

export { pokemonSpeciesListQueryOptions, usePokemonSpeciesList }
