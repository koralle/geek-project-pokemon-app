import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import type { ReactNode } from 'react'
import { usePokemon } from '.'
import { pokemonSchema, pokemonSpeciesIdSchema } from '../../entities/pokemon'
import type { Pokemon } from '../../entities/pokemon'

describe('usePokemonDetail', () => {
  test('should return a detail of Pecharunt', async () => {
    const queryClient = new QueryClient({})
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const expected = pokemonSchema.parse({
      id: 1025,
      nationalPokedexNumber: 1025,
      name: 'モモワロウ',
      imageSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1025.png',
      types: ['poison', 'ghost'],
      height: 3,
      weight: 3,
      abilities: [{ name: 'poison-puppeteer', hidden: false }],
      eggGroups: ['no-eggs'],
    }) satisfies Pokemon

    const id = pokemonSpeciesIdSchema.parse(1025)
    const { result } = renderHook(() => usePokemon(id), { wrapper })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toStrictEqual(expected)
  })
})
