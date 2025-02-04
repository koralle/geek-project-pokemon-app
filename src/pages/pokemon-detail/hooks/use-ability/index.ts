import { useSuspenseQuery } from '@tanstack/react-query'
import type { AbilityId } from '../../../../entities/ability'
import { getAbility } from '../../../../lib/api/ability'
import { DEFAULT_CACHE_STALE_TIME } from '../../../../lib/constants'

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
