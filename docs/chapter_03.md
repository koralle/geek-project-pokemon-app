# Chapter 3 - 詳細ダイアログの実装

## このChapterでやること

1. 詳細ダイアログを実装する
1. 詳細ダイアログをアプリケーションに組み込む

## 3.1. 詳細ダイアログを実装する

### 3.1.1. ポケモンの詳細情報を表示するデータリストの実装

[`src/components/detail/data-list.tsx`](https://github.com/koralle/geek-project-pokemon-app/blob/main/src/components/detail/data-list.tsx) を開き、以下のコードを追加します。

<details>
<summary>コードを見る（長いので省略）</summary>

```diff
+ import { DataList, DataListDescription, DataListItem, DataListTerm, HStack, Tag, Text } from '@yamada-ui/react'
+ import type { ReactNode } from 'react'
+ import type { Ability, EggGroup, PokedexNumber, Type } from '../../entities'
+ import { translateAbility, translateEggGroup, translateType } from '../../lib/translators'
+ 
+ const DataListItemWrapper = ({ termNode, descriptionNode }: { termNode: ReactNode; descriptionNode: ReactNode }) => (
+   <DataListItem>
+     <DataListTerm>{termNode}</DataListTerm>
+     <DataListDescription alignItems="flex-start">{descriptionNode}</DataListDescription>
+   </DataListItem>
+ )
+ 
+ const NationalPokedexNumberItem = ({ nationalPokedexNumber }: { nationalPokedexNumber: PokedexNumber }) => (
+   <DataListItemWrapper
+     termNode={<Text fontWeight="bold">図鑑No.</Text>}
+     descriptionNode={<Text>{nationalPokedexNumber}</Text>}
+   />
+ )
+ 
+ const AbilityItem = ({ abilities }: { abilities: Ability[] }) => (
+   <DataListItemWrapper
+     termNode={<Text fontWeight="bold">特性</Text>}
+     descriptionNode={abilities.map(({ name, hidden }) => (
+       <Text key={name}>
+         {translateAbility(name)} {hidden ? '（隠れ特性）' : ''}
+       </Text>
+     ))}
+   />
+ )
+ 
+ const EggGroupItem = ({ eggGroups }: { eggGroups: EggGroup[] }) => (
+   <DataListItemWrapper
+     termNode={<Text fontWeight="bold">タマゴグループ</Text>}
+     descriptionNode={eggGroups.map((eggGroup) => <Text key={eggGroup}>{translateEggGroup(eggGroup)}</Text>)}
+   />
+ )
+ 
+ const TypeItem = ({ types }: { types: Type[] }) => (
+   <DataListItemWrapper
+     termNode={<Text fontWeight="bold">タイプ</Text>}
+     descriptionNode={
+       <HStack>
+         {types.map((type) => (
+           <Tag
+             key={type}
+             variant="solid"
+           >
+             <Text fontWeight="bold">{translateType(type)}</Text>
+           </Tag>
+         ))}
+       </HStack>
+     }
+   />
+ )
+ 
+ const HeightItem = ({ height }: { height: number }) => {
+   const heightText = (height / 10) % 1 === 0 ? `${height / 10}.0` : `${height / 10}`
+   const unit = 'm'
+ 
+   return (
+     <DataListItemWrapper
+       termNode={<Text fontWeight="bold">高さ</Text>}
+       descriptionNode={
+         <Text>
+           {heightText} {unit}
+         </Text>
+       }
+     />
+   )
+ }
+ 
+ const WeightItem = ({ weight }: { weight: number }) => {
+   const weightText = (weight / 10) % 1 === 0 ? `${weight / 10}.0` : `${weight / 10}`
+   const unit = 'kg'
+ 
+   return (
+     <DataListItemWrapper
+       termNode={<Text fontWeight="bold">重さ</Text>}
+       descriptionNode={
+         <Text>
+           {weightText} {unit}
+         </Text>
+       }
+     />
+   )
+ }
+ 
+ export interface PokemonDataListProps {
+   nationalPokedexNumber: PokedexNumber
+   abilities: Ability[]
+   eggGroups: EggGroup[]
+   types: Type[]
+   height: number
+   weight: number
+ }
+ 
+ export const PokemonDataList = ({
+   abilities,
+   eggGroups,
+   types,
+   height,
+   weight,
+   nationalPokedexNumber,
+ }: PokemonDataListProps) => (
+   <DataList
+     col={2}
+     rowGap="1rem"
+     columnGap="2rem"
+   >
+     <NationalPokedexNumberItem nationalPokedexNumber={nationalPokedexNumber} />
+     <TypeItem types={types} />
+     <HeightItem height={height} />
+     <WeightItem weight={weight} />
+     <AbilityItem abilities={abilities} />
+     <EggGroupItem eggGroups={eggGroups} />
+   </DataList>
+ )
```
</details>

### 3.1.2. 詳細ダイアログの実装

[`src/components/detail/dialog.tsx`](https://github.com/koralle/geek-project-pokemon-app/blob/main/src/components/detail/modal-dialog.tsx) を開き、以下のコードを追加します。

<details>
<summary>コードを見る（長いので省略）</summary>

```diff
+ import {
+   Box,
+   Button,
+   Center,
+   Grid,
+   Heading,
+   Image,
+   Modal,
+   ModalBody,
+   ModalFooter,
+   ModalHeader,
+   ModalOverlay,
+   Text,
+   VStack,
+ } from '@yamada-ui/react'
+ import { memo, useId } from 'react'
+ import type { Pokemon } from '../../entities'
+ import { PokemonDataList } from './data-list'
+ 
+ interface PokemonDetail extends Pokemon {}
+ 
+ interface PokemonModalDialogProps {
+   open: boolean
+   onClose: () => void
+   pokemonDetail: PokemonDetail
+ }
+ 
+ export const PokemonModalDialog = memo(({ open, onClose, pokemonDetail }: PokemonModalDialogProps) => {
+   const modalLabelId = useId()
+   const { name, nationalPokedexNumber, imageSrc, types, eggGroups, abilities, height, weight } = pokemonDetail
+ 
+   return (
+     <Modal
+       open={open}
+       onClose={onClose}
+       size={{ base: 'lg', md: '3xl', lg: '4xl' }}
+       rounded="2xl"
+       animation="bottom"
+       duration={0.4}
+       aria-labelledby={modalLabelId}
+     >
+       <ModalOverlay backdropFilter="blur(10px)" />
+ 
+       <ModalHeader p={6}>
+         <Text
+           textAlign="center"
+           w="100%"
+         >
+           ポケモン詳細
+         </Text>
+       </ModalHeader>
+ 
+       <ModalBody
+         as={VStack}
+         alignItems="center"
+         gap={{ base: 8, lg: 10 }}
+         p={6}
+         pt={0}
+         my={0}
+       >
+         <Heading
+           id={modalLabelId}
+           textAlign="center"
+         >
+           #{nationalPokedexNumber} {name}
+         </Heading>
+         <Grid
+           templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
+           gap={{ base: 8, lg: 10 }}
+         >
+           <Box position="relative">
+             <Center>
+               <Image
+                 src="/monster-ball.svg"
+                 alt=""
+                 w={{ base: 280, lg: 320 }}
+                 h={{ base: 280, lg: 320 }}
+                 position="relative"
+                 aria-hidden
+                 opacity={0.8}
+               />
+               <Image
+                 position="absolute"
+                 src={imageSrc}
+                 alt={name}
+                 w={{ base: 280, lg: 320 }}
+                 h={{ base: 280, lg: 320 }}
+                 decoding="auto"
+               />
+             </Center>
+           </Box>
+           <Box>
+             <PokemonDataList
+               nationalPokedexNumber={nationalPokedexNumber}
+               abilities={abilities}
+               eggGroups={eggGroups}
+               types={types}
+               height={height}
+               weight={weight}
+             />
+           </Box>
+         </Grid>
+       </ModalBody>
+ 
+       <ModalFooter p={6}>
+         <Button onClick={onClose}>戻る</Button>
+       </ModalFooter>
+     </Modal>
+   )
+ })
```
</details>

## 3.2. 詳細ダイアログをアプリケーションに組み込む

実装したコンポーネントをアプリケーションに組み込みます。  
カードをクリックしたときに詳細ダイアログを表示するようにします。

[`src/card.tsx`](https://github.com/koralle/geek-project-pokemon-app/blob/main/src/components/list/card.tsx) に以下のコードを追加します。

<details>
<summary>コードを見る（長いので省略）</summary>

```diff
- import { Card, CardBody, CardHeader, Center, Image, Skeleton, Text, VStack } from '@yamada-ui/react'
+ import { Card, CardBody, CardHeader, Center, Image, Skeleton, Text, VStack, useDisclosure } from '@yamada-ui/react'
  import { memo, useId } from 'react'
  import type { PokemonSpeciesId } from '../../entities'
  import { usePokemon } from '../../hooks/use-pokemon'
+ import { PokemonModalDialog } from '../detail/modal-dialog'
  
  const BackgroundImage = memo(() => (
    <Image
      src="/monster-ball.svg"
      alt=""
      w={{ base: 120, md: 160 }}
      h={{ base: 120, md: 160 }}
      aria-hidden
      decoding="auto"
      opacity={0.8}
    />
  ))
  
  const SkeltonPokemonProfileCard = memo(() => (
    <Card
      w="full"
      rounded="2xl"
      as="button"
      disabled
    >
      <CardHeader>
        <Skeleton w="100%">
          <Text>Skelton</Text>
        </Skeleton>
      </CardHeader>
      <CardBody
        as={VStack}
        alignItems="center"
        gap={6}
        paddingBlockStart={6}
      >
        <Center>
          <BackgroundImage />
  
          <Text
            position="absolute"
            fontWeight="bold"
          >
            Now
            <br />
            Loading...
          </Text>
        </Center>
  
        <Skeleton w="100%">
          <Text textAlign="center">Skelton</Text>
        </Skeleton>
      </CardBody>
    </Card>
  ))
  
  interface PokemonProfileCardProps {
    id: PokemonSpeciesId
  }
  
  export const PokemonProfileCard = ({ id }: PokemonProfileCardProps) => {
    const { data } = usePokemon(id)
    const { name, nationalPokedexNumber, imageSrc } = data
  
+   const { open, onOpen, onClose } = useDisclosure()
+   const cardLabelId = useId()
  
    return (
      <>
        <Card
          as="button"
+         onClick={onOpen}
          rounded="2xl"
          aria-labelledby={cardLabelId}
          w="100%"
        >
          <CardHeader w="100%">
            <Text
              fontWeight="bold"
              textAlign="start"
            >
              #{nationalPokedexNumber}
            </Text>
          </CardHeader>
          <CardBody
            as={VStack}
            alignItems="center"
            gap={6}
            paddingBlockStart={6}
          >
            <Center>
              <BackgroundImage />
  
              {imageSrc ? (
                <Image
                  position="absolute"
                  decoding="auto"
                  w={{ base: 120, md: 160 }}
                  h={{ base: 120, md: 160 }}
                />
              ) : (
                <Text
                  fontSize={{ base: 'lg', md: 'md' }}
                  textAlign="center"
                  fontWeight="bold"
                  position="absolute"
                >
                  Not Found
                </Text>
              )}
            </Center>
            <Text
              id={cardLabelId}
              textAlign="center"
              fontWeight="bold"
            >
              {name}
            </Text>
          </CardBody>
        </Card>
+       <PokemonModalDialog
+         open={open}
+         onClose={onClose}
+         pokemonDetail={data}
+       />
      </>
    )
  }
```
</details>

#### Checkpoint

<video src="./videos/chapter_03/open-pokemon-dialog.webm" controls width="800"></video>
