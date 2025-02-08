import { DataList, DataListDescription, DataListItem, DataListTerm, HStack, Tag, Text } from '@yamada-ui/react'
import type { Ability, EggGroup, Type } from '../../entities'
import type { PokedexNumber } from '../../entities/pokedex-number'
import { translateAbility, translateEggGroup, translateType } from '../../lib/translaters'

const NationalPokedexNumberItem = ({ nationalPokedexNumber }: { nationalPokedexNumber: PokedexNumber }) => {
  return (
    <DataListItem>
      <DataListTerm>
        <Text fontWeight="bold">図鑑No.</Text>
      </DataListTerm>
      <DataListDescription>
        <Text>{nationalPokedexNumber}</Text>
      </DataListDescription>
    </DataListItem>
  )
}

interface AbilityProps {
  abilities: Ability[]
}

const AbilityItem = ({ abilities }: AbilityProps) => {
  return (
    <DataListItem>
      <DataListTerm>
        <Text fontWeight="bold">特性</Text>
      </DataListTerm>
      <DataListDescription>
        {abilities.map(({ name, hidden }) => (
          <Text key={name}>
            {translateAbility(name)} {hidden ? '（隠れとくせい）' : ''}
          </Text>
        ))}
      </DataListDescription>
    </DataListItem>
  )
}

const EggGroupItem = ({ eggGroups }: { eggGroups: EggGroup[] }) => {
  return (
    <DataListItem>
      <DataListTerm>
        <Text fontWeight="bold">タマゴグループ</Text>
      </DataListTerm>
      <DataListDescription>
        {eggGroups.map((eggGroup) => (
          <Text key={eggGroup}>{translateEggGroup(eggGroup)}</Text>
        ))}
      </DataListDescription>
    </DataListItem>
  )
}

const TypeItem = ({ types }: { types: Type[] }) => {
  return (
    <DataListItem>
      <DataListTerm>
        <Text fontWeight="bold">タイプ</Text>
      </DataListTerm>
      <DataListDescription>
        <HStack>
          {types.map((type) => (
            <Tag key={type} variant="solid">
              {translateType(type)}
            </Tag>
          ))}
        </HStack>
      </DataListDescription>
    </DataListItem>
  )
}

const HeightItem = ({ height }: { height: number }) => {
  const heightText = (height / 10) % 1 === 0 ? `${height / 10}.0` : `${height / 10}`
  const unit = 'm'
  return (
    <DataListItem>
      <DataListTerm>
        <Text fontWeight="bold">高さ</Text>
      </DataListTerm>
      <DataListDescription>
        <Text>
          {heightText} {unit}
        </Text>
      </DataListDescription>
    </DataListItem>
  )
}

const WeightItem = ({ weight }: { weight: number }) => {
  const weightText = (weight / 10) % 1 === 0 ? `${weight / 10}.0` : `${weight / 10}`
  const unit = 'kg'
  return (
    <DataListItem>
      <DataListTerm>
        <Text fontWeight="bold">重さ</Text>
      </DataListTerm>
      <DataListDescription>
        <Text>
          {weightText} {unit}
        </Text>
      </DataListDescription>
    </DataListItem>
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
}: PokemonDataListProps) => {
  return (
    <DataList col={2} rowGap="1rem" columnGap="2rem">
      <NationalPokedexNumberItem nationalPokedexNumber={nationalPokedexNumber} />
      <TypeItem types={types} />
      <HeightItem height={height} />
      <WeightItem weight={weight} />
      <AbilityItem abilities={abilities} />
      <EggGroupItem eggGroups={eggGroups} />
    </DataList>
  )
}
