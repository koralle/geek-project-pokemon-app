import { useSuspenseQuery } from '@tanstack/react-query'
import type { AbilityId } from '../../../../entities'
import { DEFAULT_CACHE_STALE_TIME, getAbility } from '../../../../lib'

const useAbility = (abilityId: AbilityId) => {
  const abilityQuery = useSuspenseQuery({
    queryKey: ['ability', abilityId],
    queryFn: () => getAbility(abilityId),
    select: (data) => ({
      name:
        data.names.find((name) => name.language.name === 'ja')?.name ??
        data.names.find((name) => name.language.name === 'ja-Hrkt')?.name ??
        data.name,
    }),
    staleTime: DEFAULT_CACHE_STALE_TIME,
  })

  return abilityQuery
}

export { useAbility }
