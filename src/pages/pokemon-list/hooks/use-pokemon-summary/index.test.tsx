import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import type { ReactNode } from 'react'
import { usePokemonSummary } from '.'
import type { PokemonSummary } from '.'
import { pokedexNumberSchema } from '../../../../entities/pokedex-number'
import { pokemonSpeciesIdSchema } from '../../../../entities/pokemon'
import { typeIdSchema } from '../../../../entities/type'

describe('usePokemonSummary', () => {
  test('should return a summary of Pecharunt', async () => {
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
      id: pokemonSpeciesIdSchema.parse(1025),
      nationalPokedexNumber: pokedexNumberSchema.parse(1025),
      name: 'モモワロウ',
      imageSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1025.png',
      typeIds: [typeIdSchema.parse(4), typeIdSchema.parse(8)],
    } satisfies PokemonSummary

    const id = pokemonSpeciesIdSchema.parse(1025)
    const { result } = renderHook(() => usePokemonSummary(id), { wrapper })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toStrictEqual(expected)
  })
})
