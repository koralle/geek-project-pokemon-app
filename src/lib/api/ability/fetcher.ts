import { POKEAPI_BASE_URL } from '../../constants'
import { getRawAbilityResponseSchema } from './schema'
import type { GetRawAbilityResponse } from './schema'

const getAbility = async (id: number, { signal }: { signal?: AbortSignal } = {}): Promise<GetRawAbilityResponse> => {
  try {
    const response = await fetch(`${POKEAPI_BASE_URL}/ability/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: signal ?? null,
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch pokemon ability: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    const parseResult = getRawAbilityResponseSchema.safeParse(data)

    if (!parseResult.success) {
      throw new Error('Invalid pokemon ability data format', { cause: parseResult.error })
    }

    return parseResult.data
  } catch (e: unknown) {
    if (e instanceof Error) {
      if (e.name === 'AbortError') {
        throw new Error(`Pokemon ability fetch aborted for ID: ${id}`)
      }
      if (e.name === 'TimeoutError') {
        throw new Error(`Request timed out while fetching pokemon ability (ID: ${id})`)
      }

      throw new Error(`Failed to fetch pokemon ability (ID: ${id}): ${e.message}`, { cause: e })
    }

    throw new Error('Failed to fetch pokemon ability')
  }
}

export { getAbility }
