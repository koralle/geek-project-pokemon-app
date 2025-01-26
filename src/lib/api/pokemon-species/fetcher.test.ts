import { getPokemonSpecies } from './fetcher'
import type { GetRawPokemonSpeciesResponse } from './schema'

describe('fetchPokemonSpecies', () => {
  test('when pass 1025, should return Pecharunt', async () => {
    const result = await getPokemonSpecies(1025)

    expectTypeOf(result).toEqualTypeOf<GetRawPokemonSpeciesResponse>()
  })

  test('should cancel after 1 second', async () => {
    await expect(getPokemonSpecies(25, { signal: AbortSignal.timeout(1000) })).rejects.toThrow(
      'Request timed out while fetching pokemon species (ID: 25)',
    )
  })
})
