import { DataList, DataListDescription, DataListItem, DataListTerm, HStack, Tag, Text } from '@yamada-ui/react'
import type { ReactNode } from 'react'
import type { Ability, EggGroup, PokedexNumber, Type } from '../../entities'
import { translateAbility, translateEggGroup, translateType } from '../../lib/translators'

const DataListItemWrapper = ({ termNode, descriptionNode }: { termNode: ReactNode; descriptionNode: ReactNode }) => (
  <DataListItem>
    <DataListTerm>{termNode}</DataListTerm>
    <DataListDescription alignItems="flex-start">{descriptionNode}</DataListDescription>
  </DataListItem>
)

const NationalPokedexNumberItem = ({ nationalPokedexNumber }: { nationalPokedexNumber: PokedexNumber }) => (
  <DataListItemWrapper
    termNode={<Text fontWeight="bold">図鑑No.</Text>}
    descriptionNode={<Text>{nationalPokedexNumber}</Text>}
  />
)

const AbilityItem = ({ abilities }: { abilities: Ability[] }) => (
  <DataListItemWrapper
    termNode={<Text fontWeight="bold">特性</Text>}
    descriptionNode={abilities.map(({ name, hidden }) => (
      <Text key={name}>
        {translateAbility(name)} {hidden ? '（隠れ特性）' : ''}
      </Text>
    ))}
  />
)

const EggGroupItem = ({ eggGroups }: { eggGroups: EggGroup[] }) => (
  <DataListItemWrapper
    termNode={<Text fontWeight="bold">タマゴグループ</Text>}
    descriptionNode={eggGroups.map((eggGroup) => <Text key={eggGroup}>{translateEggGroup(eggGroup)}</Text>)}
  />
)

const TypeItem = ({ types }: { types: Type[] }) => (
  <DataListItemWrapper
    termNode={<Text fontWeight="bold">タイプ</Text>}
    descriptionNode={
      <HStack>
        {types.map((type) => (
          <Tag key={type} variant="solid" colorScheme={type}>
            <Text fontWeight="bold">{translateType(type)}</Text>
          </Tag>
        ))}
      </HStack>
    }
  />
)

const HeightItem = ({ height }: { height: number }) => {
  const heightText = (height / 10) % 1 === 0 ? `${height / 10}.0` : `${height / 10}`
  const unit = 'm'

  return (
    <DataListItemWrapper
      termNode={<Text fontWeight="bold">高さ</Text>}
      descriptionNode={
        <Text>
          {heightText} {unit}
        </Text>
      }
    />
  )
}

const WeightItem = ({ weight }: { weight: number }) => {
  const weightText = (weight / 10) % 1 === 0 ? `${weight / 10}.0` : `${weight / 10}`
  const unit = 'kg'

  return (
    <DataListItemWrapper
      termNode={<Text fontWeight="bold">重さ</Text>}
      descriptionNode={
        <Text>
          {weightText} {unit}
        </Text>
      }
    />
  )
}

export interface PokemonDataListProps {
  nationalPokedexNumber: PokedexNumber
  abilities: Ability[]
  eggGroups: EggGroup[]
  types: Type[]
  height: number
  weight: number
}

export const PokemonDataList = ({
  abilities,
  eggGroups,
  types,
  height,
  weight,
  nationalPokedexNumber,
}: PokemonDataListProps) => (
  <DataList col={2} rowGap="1rem" columnGap="2rem">
    <NationalPokedexNumberItem nationalPokedexNumber={nationalPokedexNumber} />
    <TypeItem types={types} />
    <HeightItem height={height} />
    <WeightItem weight={weight} />
    <AbilityItem abilities={abilities} />
    <EggGroupItem eggGroups={eggGroups} />
  </DataList>
)
