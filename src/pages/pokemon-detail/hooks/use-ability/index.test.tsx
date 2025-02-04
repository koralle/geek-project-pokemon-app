import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import type { ReactNode } from 'react'
import { useAbility } from '.'
import { abilityIdSchema } from '../../../../entities/ability'

describe('usePokemonAbility', () => {
  test('should return a ability name in Japanese', async () => {
    const queryClient = new QueryClient({})
    const wrapper = ({ children }: { children: ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const expected = {
      name: 'どくくぐつ',
    }

    const abilityId = abilityIdSchema.parse(307)
    const { result } = renderHook(() => useAbility(abilityId), { wrapper })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toStrictEqual(expected)
  })
})
