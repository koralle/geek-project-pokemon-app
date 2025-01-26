import { POKEAPI_BASE_URL } from '../../'
import { getRawPokemonResponseSchema } from './schema'
import type { GetRawPokemonResponse } from './schema'

const getPokemon = async (id: number, { signal }: { signal?: AbortSignal } = {}): Promise<GetRawPokemonResponse> => {
  try {
    const response = await fetch(`${POKEAPI_BASE_URL}/pokemon/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: signal ?? null,
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch pokemon: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    const parseResult = getRawPokemonResponseSchema.safeParse(data)

    if (!parseResult.success) {
      throw new Error('Invalid pokemon data format', { cause: parseResult.error })
    }

    return parseResult.data
  } catch (e: unknown) {
    if (e instanceof Error) {
      if (e.name === 'AbortError') {
        throw new Error(`Pokemon fetch aborted for ID: ${id}`)
      }
      if (e.name === 'TimeoutError') {
        throw new Error(`Request timed out while fetching pokemon (ID: ${id})`)
      }

      throw new Error(`Failed to fetch pokemon (ID: ${id}): ${e.message}`, { cause: e })
    }

    throw new Error('Failed to fetch pokemon')
  }
}

export { getPokemon }
