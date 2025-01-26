import { getPokemon } from './fetcher'
import type { GetRawPokemonResponse } from './schema'

describe('fetchPokemonSpecies', () => {
  test('when pass 1025, should return Pecharunt', async () => {
    const result = await getPokemon(1025)

    expectTypeOf(result).toEqualTypeOf<GetRawPokemonResponse>()
  })

  test('should cancel after 1 second', async () => {
    await expect(getPokemon(25, { signal: AbortSignal.timeout(1000) })).rejects.toThrow(
      'Request timed out while fetching pokemon (ID: 25)',
    )
  })
})
