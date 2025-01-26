import { POKEAPI_BASE_URL } from '../../'
import { getRawEggGroupResponseSchema } from './schema'
import type { GetRawEggGroupResponse } from './schema'

const getEggGroup = async (id: number, { signal }: { signal?: AbortSignal } = {}): Promise<GetRawEggGroupResponse> => {
  try {
    const response = await fetch(`${POKEAPI_BASE_URL}/egg-group/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: signal ?? null,
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch pokemon egg group: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    const parseResult = getRawEggGroupResponseSchema.safeParse(data)

    if (!parseResult.success) {
      throw new Error('Invalid pokemon egg group data format', { cause: parseResult.error })
    }

    return parseResult.data
  } catch (e: unknown) {
    if (e instanceof Error) {
      if (e.name === 'AbortError') {
        throw new Error(`Pokemon egg group fetch aborted for ID: ${id}`)
      }
      if (e.name === 'TimeoutError') {
        throw new Error(`Request timed out while fetching pokemon egg group (ID: ${id})`)
      }

      throw new Error(`Failed to fetch pokemon egg group (ID: ${id}): ${e.message}`, { cause: e })
    }

    throw new Error('Failed to fetch pokemon egg group')
  }
}

export { getEggGroup }
