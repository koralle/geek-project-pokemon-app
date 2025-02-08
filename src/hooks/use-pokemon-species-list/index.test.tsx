import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import type { ReactNode } from 'react'
import type { PokemonSpeciesList } from '.'
import { usePokemonSpeciesList } from '.'
import { pokemonSpeciesIdSchema } from '../../entities/pokemon'

describe('usePokemonSpeciesList', () => {
  test('should return the pokemon species list', async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const expected = {
      count: 1025,
      results: [
        {
          id: pokemonSpeciesIdSchema.parse(1),
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(2),
          name: 'ivysaur',
          url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(3),
          name: 'venusaur',
          url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(4),
          name: 'charmander',
          url: 'https://pokeapi.co/api/v2/pokemon-species/4/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(5),
          name: 'charmeleon',
          url: 'https://pokeapi.co/api/v2/pokemon-species/5/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(6),
          name: 'charizard',
          url: 'https://pokeapi.co/api/v2/pokemon-species/6/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(7),
          name: 'squirtle',
          url: 'https://pokeapi.co/api/v2/pokemon-species/7/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(8),
          name: 'wartortle',
          url: 'https://pokeapi.co/api/v2/pokemon-species/8/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(9),
          name: 'blastoise',
          url: 'https://pokeapi.co/api/v2/pokemon-species/9/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(10),
          name: 'caterpie',
          url: 'https://pokeapi.co/api/v2/pokemon-species/10/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(11),
          name: 'metapod',
          url: 'https://pokeapi.co/api/v2/pokemon-species/11/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(12),
          name: 'butterfree',
          url: 'https://pokeapi.co/api/v2/pokemon-species/12/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(13),
          name: 'weedle',
          url: 'https://pokeapi.co/api/v2/pokemon-species/13/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(14),
          name: 'kakuna',
          url: 'https://pokeapi.co/api/v2/pokemon-species/14/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(15),
          name: 'beedrill',
          url: 'https://pokeapi.co/api/v2/pokemon-species/15/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(16),
          name: 'pidgey',
          url: 'https://pokeapi.co/api/v2/pokemon-species/16/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(17),
          name: 'pidgeotto',
          url: 'https://pokeapi.co/api/v2/pokemon-species/17/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(18),
          name: 'pidgeot',
          url: 'https://pokeapi.co/api/v2/pokemon-species/18/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(19),
          name: 'rattata',
          url: 'https://pokeapi.co/api/v2/pokemon-species/19/',
        },
        {
          id: pokemonSpeciesIdSchema.parse(20),
          name: 'raticate',
          url: 'https://pokeapi.co/api/v2/pokemon-species/20/',
        },
      ],
    } satisfies PokemonSpeciesList

    const { result } = renderHook(() => usePokemonSpeciesList(), { wrapper })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toStrictEqual(expected)
  })
})
