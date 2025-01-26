import { useSuspenseQuery } from '@tanstack/react-query'
import type { TypeId } from '../../../../entities'
import { DEFAULT_CACHE_STALE_TIME, getPokemonType } from '../../../../lib'

const usePokemonType = (typeId: TypeId) => {
  const typeQuery = useSuspenseQuery({
    queryKey: ['type', typeId],
    queryFn: () => getPokemonType(typeId),
    select: (data) => ({
      type:
        data.names.find((name) => name.language.name === 'ja')?.name ??
        data.names.find((name) => name.language.name === 'ja-Hrkt')?.name ??
        data.name,
    }),
    staleTime: DEFAULT_CACHE_STALE_TIME,
  })

  return { ...typeQuery }
}

export { usePokemonType }
