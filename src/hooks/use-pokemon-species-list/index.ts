import { useSuspenseQuery } from '@tanstack/react-query'
import { pokemonSpeciesIdSchema } from '../../entities'
import type { PokemonSpeciesId } from '../../entities'
import type { GetRawPokemonSpeciesListResponse } from '../../lib/api/pokemon-species-list'
import { getRawPokemonSpeciesList } from '../../lib/api/pokemon-species-list'
import { parseNumberFromUrl } from '../../lib/utils/parse'

export interface PokemonSpeciesList {
  count: GetRawPokemonSpeciesListResponse['count']
  results: Array<Pick<GetRawPokemonSpeciesListResponse['results'][number], 'name' | 'url'> & { id: PokemonSpeciesId }>
}

const pokemonSpeciesListQueryOptions = (
  { limit = 20, page = 1 }: { limit?: number; page?: number } = { limit: 20, page: 1 },
) => ({
  queryKey: ['pokemon-species-list', { page, limit }],
  queryFn: () => getRawPokemonSpeciesList({ page, limit }),
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
