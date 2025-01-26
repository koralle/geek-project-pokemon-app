import { useSuspenseQuery } from '@tanstack/react-query'
import type { EggGroupId } from '../../../../entities'
import { DEFAULT_CACHE_STALE_TIME, getEggGroup } from '../../../../lib'

const useEggGroup = (eggGroupId: EggGroupId) => {
  const eggGroupQuery = useSuspenseQuery({
    queryKey: ['egg-group', eggGroupId],
    queryFn: () => getEggGroup(eggGroupId),
    select: (data) => ({
      name:
        data.names.find((name) => name.language.name === 'ja')?.name ??
        data.names.find((name) => name.language.name === 'ja-Hrkt')?.name ??
        data.name,
    }),
    staleTime: DEFAULT_CACHE_STALE_TIME,
  })

  return eggGroupQuery
}

export { useEggGroup }
