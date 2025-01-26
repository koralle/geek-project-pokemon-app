import { getAbility } from './fetcher'
import type { GetRawAbilityResponse } from './schema'

describe('getAbility', () => {
  test('when pass 307, should return `poison-puppeteer`', async () => {
    const result = await getAbility(307)

    expectTypeOf(result).toEqualTypeOf<GetRawAbilityResponse>()
    expect(result.name).toBe('poison-puppeteer')
  })

  test('should cancel after 1 second', async () => {
    await expect(getAbility(1, { signal: AbortSignal.timeout(1000) })).rejects.toThrow(
      'Request timed out while fetching pokemon ability (ID: 1)',
    )
  })
})
