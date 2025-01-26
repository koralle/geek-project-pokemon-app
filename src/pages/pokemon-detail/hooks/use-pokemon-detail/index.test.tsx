import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import type { ReactNode } from 'react'
import type { PokemonDetail } from '.'
import { usePokemonDetail } from '.'
import {
  abilityIdSchema,
  eggGroupIdSchema,
  pokedexNumberSchema,
  pokemonSpeciesIdSchema,
  typeIdSchema,
} from '../../../../entities'

describe('usePokemonDetail', () => {
  test('should return a detail of Pecharunt', async () => {
    const queryClient = new QueryClient({})
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const expected = {
      id: pokemonSpeciesIdSchema.parse(1025),
      nationalPokedexNumber: pokedexNumberSchema.parse(1025),
      name: 'モモワロウ',
      imageSrc: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1025.png',
      typeIds: [typeIdSchema.parse(4), typeIdSchema.parse(8)],
      height: 3,
      weight: 3,
      abilityIds: [
        {
          id: abilityIdSchema.parse(307),
          is_hidden: false,
        },
      ],
      genera: 'しはいポケモン',
      eggGroupIds: [eggGroupIdSchema.parse(15)],
    } satisfies PokemonDetail

    const id = pokemonSpeciesIdSchema.parse(1025)
    const { result } = renderHook(() => usePokemonDetail(id), { wrapper })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toStrictEqual(expected)
  })
})
