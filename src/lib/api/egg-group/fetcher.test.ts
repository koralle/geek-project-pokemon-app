import { getEggGroup } from './fetcher'
import type { GetRawEggGroupResponse } from './schema'

describe('getPokemonEggGroup', () => {
  test('when pass 15, should return たまごみはっけん', async () => {
    const result = await getEggGroup(15)

    expectTypeOf(result).toEqualTypeOf<GetRawEggGroupResponse>()
  })

  test('should cancel after 1 second', async () => {
    await expect(getEggGroup(1, { signal: AbortSignal.timeout(1000) })).rejects.toThrow(
      'Request timed out while fetching pokemon egg group (ID: 1)',
    )
  })
})
