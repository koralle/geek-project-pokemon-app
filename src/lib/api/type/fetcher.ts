import type { TypeId } from '../../../entities'
import { POKEAPI_BASE_URL } from '../../../lib'
import { getRawTypeResponseSchema } from './schema'
import type { GetRawTypeResponse } from './schema'

const getPokemonType = async (id: TypeId, { signal }: { signal?: AbortSignal } = {}): Promise<GetRawTypeResponse> => {
  try {
    const response = await fetch(`${POKEAPI_BASE_URL}/type/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: signal ?? null,
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch pokemon type: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    const parseResult = getRawTypeResponseSchema.safeParse(data)

    if (!parseResult.success) {
      throw new Error('Invalid pokemon type data format', { cause: parseResult.error })
    }

    return parseResult.data
  } catch (e: unknown) {
    if (e instanceof Error) {
      if (e.name === 'AbortError') {
        throw new Error(`Pokemon type fetch aborted for ID: ${id}`)
      }
      if (e.name === 'TimeoutError') {
        throw new Error(`Request timed out while fetching pokemon type (ID: ${id})`)
      }

      throw new Error(`Failed to fetch pokemon type (ID: ${id}): ${e.message}`, { cause: e })
    }

    throw new Error('Failed to fetch pokemon type')
  }
}

export { getPokemonType }
