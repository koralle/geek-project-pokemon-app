import { POKEAPI_BASE_URL } from '../../'
import { getRawPokemonSpeciesResponseSchema } from './schema'
import type { GetRawPokemonSpeciesResponse } from './schema'

const getPokemonSpecies = async (
  id: number,
  { signal }: { signal?: AbortSignal } = {},
): Promise<GetRawPokemonSpeciesResponse> => {
  try {
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon-species/${id}`, {
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
    const parseResult = getRawPokemonSpeciesResponseSchema.safeParse(data)

    if (!parseResult.success) {
      throw new Error('Invalid pokemon species data format', { cause: parseResult.error })
    }

    return parseResult.data
  } catch (e: unknown) {
    if (e instanceof Error) {
      if (e.name === 'AbortError') {
        throw new Error(`Pokemon species fetch aborted for ID: ${id}`)
      }
      if (e.name === 'TimeoutError') {
        throw new Error(`Request timed out while fetching pokemon species (ID: ${id})`)
      }

      throw new Error(`Failed to fetch pokemon species (ID: ${id}): ${e.message}`, { cause: e })
    }

    throw new Error('Failed to fetch pokemon species')
  }
}

export { getPokemonSpecies }
