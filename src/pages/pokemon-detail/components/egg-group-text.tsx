import { Skeleton, Text } from '@yamada-ui/react'
import type { EggGroupId } from '../../../entities'
import { useEggGroup } from '../hooks'

interface EggGroupTextProps {
  eggGroupId: EggGroupId
}

const SkeltonEggGroupText = () => {
  return (
    <Skeleton>
      <Text fontSize="lg">タマゴグループ</Text>
    </Skeleton>
  )
}

const EggGroupText = ({ eggGroupId }: EggGroupTextProps) => {
  const { data } = useEggGroup(eggGroupId)

  return <Text fontSize="lg">{data.name}</Text>
}

export { EggGroupText, SkeltonEggGroupText }
