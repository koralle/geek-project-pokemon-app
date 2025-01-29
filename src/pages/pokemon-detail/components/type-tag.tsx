import { Skeleton, Tag } from '@yamada-ui/react'
import type { TypeId } from '../../../entities'
import { usePokemonType } from '../hooks'

interface TypeTagProps {
  typeId: TypeId
}

const SkeltonTypeTag = () => {
  return (
    <>
      <Skeleton>
        <Tag>タイプ</Tag>
      </Skeleton>
    </>
  )
}

const TypeTag = ({ typeId }: TypeTagProps) => {
  const { data } = usePokemonType(typeId)

  return <Tag>{data.type}</Tag>
}
export { TypeTag, SkeltonTypeTag }
