import { POKEAPI_BASE_URL } from '../../../../../lib/constants'
import { getRawPokemonSpeciesListResponseSchema } from './schema'
import type { GetRawPokemonSpeciesListResponse } from './schema'

interface GetPokemonSpeciesListOptions {
  limit?: number
  page?: number
}

const getRawPokemonSpeciesList = async (
  { limit = 20, page = 1 }: GetPokemonSpeciesListOptions = { limit: 20, page: 1 },
  { signal }: { signal?: AbortSignal } = {},
): Promise<GetRawPokemonSpeciesListResponse> => {
  try {
    const offset = (page - 1) * limit
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon-species?limit=${limit}&offset=${offset}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: signal ?? null,
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch pokemon species: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    const parseResult = getRawPokemonSpeciesListResponseSchema.safeParse(data)

    if (!parseResult.success) {
      throw new Error('Invalid pokemon species data format', { cause: parseResult.error })
    }

    return parseResult.data
  } catch (e: unknown) {
    if (e instanceof Error) {
      if (e.name === 'AbortError') {
        throw new Error('Pokemon species list fetch aborted')
      }
      if (e.name === 'TimeoutError') {
        throw new Error('Request timed out while fetching pokemon species list')
      }

      throw new Error(`Failed to fetch pokemon species list: ${e.message}`, { cause: e })
    }

    throw new Error('Failed to fetch pokemon species list')
  }
}

export { getRawPokemonSpeciesList }
