import { Skeleton, Text } from '@yamada-ui/react'
import type { AbilityId } from '../../../entities'
import { useAbility } from '../hooks'

interface AbilityTextProps {
  abilityId: AbilityId
  isHidden: boolean
}

interface AbilityTextSkeltonProps {
  isHidden: boolean
}

const SkeltonAbilityText = ({ isHidden }: AbilityTextSkeltonProps) => {
  return (
    <Skeleton>
      <Text fontSize="lg">
        特性
        {isHidden ? '（隠れとくせい）' : ''}
      </Text>
    </Skeleton>
  )
}

const AbilityText = ({ abilityId, isHidden }: AbilityTextProps) => {
  const { data } = useAbility(abilityId)

  return (
    <Text fontSize="lg">
      {data.name}
      {isHidden ? '（隠れとくせい）' : ''}
    </Text>
  )
}

export { AbilityText, SkeltonAbilityText }
