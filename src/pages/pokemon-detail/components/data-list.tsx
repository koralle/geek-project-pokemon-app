import { DataList, DataListDescription, DataListItem, DataListTerm, HStack, Text } from '@yamada-ui/react'
import { Suspense } from 'react'
import type { PokemonDetail } from '../hooks'
import { AbilityText, SkeltonAbilityText } from './ability-text'
import { EggGroupText, SkeltonEggGroupText } from './egg-group-text'
import { HeightText } from './height-text'
import { SkeltonTypeTag, TypeTag } from './type-tag'
import { WeightText } from './weight-text'

interface PokemonDataListProps {
  pokemonDetail: PokemonDetail
}

const PokemonDataList = ({ pokemonDetail }: PokemonDataListProps) => {
  const { nationalPokedexNumber, genera, height, weight, typeIds, abilityIds, eggGroupIds } = pokemonDetail

  return (
    <DataList col={2} rowGap="1rem" columnGap="2rem">
      <DataListItem>
        <DataListTerm>
          <Text fontSize={{ base: 'lg', sm: 'md' }} fontWeight="bold">
            図鑑No.
          </Text>
        </DataListTerm>
        <DataListDescription>
          <Text fontSize={{ base: 'lg', sm: 'md' }}>{nationalPokedexNumber}</Text>
        </DataListDescription>
      </DataListItem>
      <DataListItem>
        <DataListTerm>
          <Text fontSize={{ base: 'lg', sm: 'md' }} fontWeight="bold">
            タイプ
          </Text>
        </DataListTerm>
        <DataListDescription>
          <HStack>
            {typeIds.map((typeId) => (
              <Suspense key={typeId} fallback={<SkeltonTypeTag />}>
                <TypeTag typeId={typeId} />
              </Suspense>
            ))}
          </HStack>
        </DataListDescription>
      </DataListItem>
      <DataListItem>
        <DataListTerm>
          <Text fontSize={{ base: 'lg', sm: 'md' }} fontWeight="bold">
            分類
          </Text>
        </DataListTerm>
        <DataListDescription>
          <Text fontSize={{ base: 'lg', sm: 'md' }}>{genera}</Text>
        </DataListDescription>
      </DataListItem>
      <DataListItem>
        <DataListTerm>
          <Text fontSize={{ base: 'lg', sm: 'md' }} fontWeight="bold">
            高さ
          </Text>
        </DataListTerm>
        <DataListDescription>
          <HeightText height={height} />
        </DataListDescription>
      </DataListItem>
      <DataListItem>
        <DataListTerm>
          <Text fontSize={{ base: 'lg', sm: 'md' }} fontWeight="bold">
            重さ
          </Text>
        </DataListTerm>
        <DataListDescription>
          <WeightText weight={weight} />
        </DataListDescription>
      </DataListItem>
      <DataListItem>
        <DataListTerm>
          <Text fontSize={{ base: 'lg', sm: 'md' }} fontWeight="bold">
            特性
          </Text>
        </DataListTerm>
        <DataListDescription>
          {abilityIds.map((ability) => (
            <Suspense key={ability.id} fallback={<SkeltonAbilityText isHidden={ability.is_hidden} />}>
              <AbilityText abilityId={ability.id} isHidden={ability.is_hidden} />
            </Suspense>
          ))}
        </DataListDescription>
      </DataListItem>
      <DataListItem>
        <DataListTerm>
          <Text fontSize={{ base: 'lg', sm: 'md' }} fontWeight="bold">
            タマゴグループ
          </Text>
        </DataListTerm>
        <DataListDescription>
          {eggGroupIds.map((eggGroupId) => (
            <Suspense key={eggGroupId} fallback={<SkeltonEggGroupText />}>
              <EggGroupText eggGroupId={eggGroupId} />
            </Suspense>
          ))}
        </DataListDescription>
      </DataListItem>
    </DataList>
  )
}

export { PokemonDataList }
