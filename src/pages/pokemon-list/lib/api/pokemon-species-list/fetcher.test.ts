import { getRawPokemonSpeciesList } from './fetcher'
import type { GetRawPokemonSpeciesListResponse } from './schema'

describe('getRawPokemonSpeciesList', () => {
  test('should return 20 pokemon species', async () => {
    const result = await getRawPokemonSpeciesList()

    expectTypeOf(result).toEqualTypeOf<GetRawPokemonSpeciesListResponse>()
    expect(result.results.length).toBe(20)
  })
})
