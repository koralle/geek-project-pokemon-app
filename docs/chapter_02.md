# Chapter 2 - ポケモン一覧画面の作成

## このChapterでやること

1. 画面で管理する状態を実装する
1. ポケモンを表示するカードを実装する
1. カードをGrid状に表示するビューを実装する
1. ページネーションを実装する
1. 実装したコンポーネントをアプリケーションに組み込んで一覧画面を完成させる

## 2.1. 画面で管理する状態を実装する

このアプリケーションでは、ページの表示位置とポケモンの総数を画面で管理します。

### 2.1.1. `PageContext` / `SetPageContext` を実装する

#### 2.1.1.1. `PageContext` / `SetPageContext` を定義する

まずはページ番号を管理する `PageContext` と、その値を更新する `SetPageContext` を作成します。

[`src/lib/contexts/page-context.ts`](https://github.com/koralle/geek-project-pokemon-app/blob/main/src/lib/contexts/page-context.ts) を作成し、以下のコードを追加してください。

<details>
  <summary>コードを見る（長いので省略）</summary>

```diff
+ import { createContext, useContext } from 'react'
+ import type { Dispatch, SetStateAction } from 'react'
+ 
+ export interface PageContextState {
+   page: number
+ }
+ 
+ export interface SetPageContextState {
+   setPage: Dispatch<SetStateAction<number>>
+ }
+ 
+ const createPageContext = () => {
+   const PageContext = createContext<PageContextState | undefined>(undefined)
+   PageContext.displayName = 'PageContext'
+ 
+   const usePageContext = () => {
+     const pageContext = useContext(PageContext)
+     if (!pageContext) {
+       const error = new Error('usePageContext must be used within a PageContext')
+       error.name = 'PageContextError'
+       throw error
+     }
+ 
+     return pageContext
+   }
+ 
+   return { PageContext, usePageContext }
+ }
+ 
+ const createSetPageContext = () => {
+   const SetPageContext = createContext<SetPageContextState | undefined>(undefined)
+   SetPageContext.displayName = 'SetPageContext'
+ 
+   const useSetPageContext = () => {
+     const setPageContext = useContext(SetPageContext)
+     if (!setPageContext) {
+       const error = new Error('useSetPageContext must be used within a SetPageContext')
+       error.name = 'SetPageContextError'
+       throw error
+     }
+ 
+     return setPageContext
+   }
+ 
+   return { SetPageContext, useSetPageContext }
+ }
+ 
+ export const { PageContext, usePageContext } = createPageContext()
+ export const { SetPageContext, useSetPageContext } = createSetPageContext()
```
</details>

#### 2.1.1.2. 定義したContextをアプリケーションに組み込む

次に、作成した `PageContext` / `SetPageContext` をアプリケーションに組み込みます。

[`src/app.tsx`](https://github.com/koralle/geek-project-pokemon-app/blob/main/src/app.tsx) に以下のコードを追加してください。

```diff
+ import { useState } from 'react'
+ import type { ReactNode } from 'react'
+ import { PageContext, SetPageContext } from './lib/contexts/page-context'
+
+ const Providers = ({ children }: { children: ReactNode }) => {
+   const [page, setPage] = useState(1)
+   return (
+     <SetPageContext.Provider value={{ setPage }}>
+       <PageContext.Provider value={{ page }}>{children}</PageContext.Provider>
+     </SetPageContext.Provider>
+   )
+ }
  
  export const App = () => {
-   return <h1>Hello, world!</h1>
+   return (
+     <Providers>
+       <h1>Hello, world!</h1>
+     </Providers>
+   )
  }
```

### 2.1.2. `TotalContext` / `SetTotalContext` を実装する

#### 2.1.2.1. `TotalContext` / `SetTotalContext` を定義する

アプリケーションの設計の都合上、ポケモンの総数をGlobal Stateとして管理する必要があります。
ポケモンの総数を管理する `TotalContext` と、その値を更新する `SetTotalContext` を作成します。

[`src/lib/contexts/total-context.ts`](https://github.com/koralle/geek-project-pokemon-app/blob/main/src/lib/contexts/total-context.ts) を作成し、以下のコードを追加してください。

<details>
  <summary>コードを見る（長いので省略）</summary>

```diff
+ import { createContext, useContext } from 'react'
+ import type { Dispatch, SetStateAction } from 'react'
+ 
+ export interface TotalContextState {
+   total: number
+ }
+ 
+ export interface SetTotalContextState {
+   setTotal: Dispatch<SetStateAction<number>>
+ }
+ 
+ const createTotalContext = () => {
+   const TotalContext = createContext<TotalContextState | undefined>(undefined)
+   TotalContext.displayName = 'TotalContext'
+ 
+   const useTotalContext = () => {
+     const totalContext = useContext(TotalContext)
+     if (!totalContext) {
+       const error = new Error('useTotalContext must be used within a TotalContext')
+       error.name = 'TotalContextError'
+       throw error
+     }
+ 
+     return totalContext
+   }
+ 
+   return { TotalContext, useTotalContext }
+ }
+ 
+ const createSetTotalContext = () => {
+   const SetTotalContext = createContext<SetTotalContextState | undefined>(undefined)
+   SetTotalContext.displayName = 'SetTotalContext'
+ 
+   const useSetTotalContext = () => {
+     const setTotalContext = useContext(SetTotalContext)
+     if (!setTotalContext) {
+       const error = new Error('useSetTotalContext must be used within a SetTotalContext')
+       error.name = 'SetTotalContextError'
+       throw error
+     }
+ 
+     return setTotalContext
+   }
+ 
+   return { SetTotalContext, useSetTotalContext }
+ }
+ 
+ export const { TotalContext, useTotalContext } = createTotalContext()
+ export const { SetTotalContext, useSetTotalContext } = createSetTotalContext()
```
</details>

#### 2.1.2.2. 定義したContextをアプリケーションに組み込む

次に、作成した `TotalContext` / `SetTotalContext` をアプリケーションに組み込みます。

[`src/app.tsx`](https://github.com/koralle/geek-project-pokemon-app/blob/main/src/app.tsx) に以下のコードを追加してください。

```diff
  import { useState } from 'react'
  import type { ReactNode } from 'react'
  import { PageContext, SetPageContext } from './lib/contexts/page-context'
+ import { SetTotalContext, TotalContext } from './lib/contexts/total-context'
  
  const Providers = ({ children }: { children: ReactNode }) => {
    const [page, setPage] = useState(1)
+   const [total, setTotal] = useState(1000)
  
    return (
      <SetPageContext.Provider value={{ setPage }}>
-       <PageContext.Provider value={{ page }}>{children}</PageContext.Provider>
+       <SetTotalContext.Provider value={{ setTotal }}>
+         <TotalContext.Provider value={{ total }}>
+           <PageContext.Provider value={{ page }}>{children}</PageContext.Provider>
+         </TotalContext.Provider>
+       </SetTotalContext.Provider>
      </SetPageContext.Provider>
    )
  }
```

## 2.2. ポケモンを表示するカードを作成する

ポケモンの名前や画像を表示するカードを実装します。

カードに表示する情報は、[`usePokemon` フック](https://github.com/koralle/geek-project-pokemon-app/blob/main/src/hooks/use-pokemon/index.ts) を使って取得します。

[`src/components/list/card.tsx`](https://github.com/koralle/geek-project-pokemon-app/blob/main/src/components/list/card.tsx) を作成し、以下のコードを追加してください。

<details>

<summary>コードを見る（長いので省略）</summary>

```diff
+ import { Card, CardBody, CardHeader, Center, Image, Skeleton, Text, VStack } from '@yamada-ui/react'
+ import { memo, useId } from 'react'
+ import type { PokemonSpeciesId } from '../../entities'
+ import { usePokemon } from '../../hooks/use-pokemon'
+ 
+ const BackgroundImage = memo(() => (
+   <Image
+     src="/monster-ball.svg"
+     alt=""
+     w={{ base: 120, md: 160 }}
+     h={{ base: 120, md: 160 }}
+     aria-hidden
+     decoding="auto"
+     opacity={0.8}
+   />
+ ))
+ 
+ const SkeltonPokemonProfileCard = memo(() => (
+   <Card
+     w="full"
+     rounded="2xl"
+     as="button"
+     disabled
+   >
+     <CardHeader>
+       <Skeleton w="100%">
+         <Text>Skelton</Text>
+       </Skeleton>
+     </CardHeader>
+     <CardBody
+       as={VStack}
+       alignItems="center"
+       gap={6}
+       paddingBlockStart={6}
+     >
+       <Center>
+         <BackgroundImage />
+ 
+         <Text
+           position="absolute"
+           fontWeight="bold"
+         >
+           Now
+           <br />
+           Loading...
+         </Text>
+       </Center>
+ 
+       <Skeleton w="100%">
+         <Text textAlign="center">Skelton</Text>
+       </Skeleton>
+     </CardBody>
+   </Card>
+ ))
+ 
+ interface PokemonProfileCardProps {
+   id: PokemonSpeciesId
+ }
+ 
+ export const PokemonProfileCard = ({ id }: PokemonProfileCardProps) => {
+   const { data } = usePokemon(id)
+   const { name, nationalPokedexNumber, imageSrc } = data
+ 
+   const cardLabelId = useId()
+ 
+   return (
+     <>
+       <Card
+         as="button"
+         rounded="2xl"
+         aria-labelledby={cardLabelId}
+         w="100%"
+       >
+         <CardHeader w="100%">
+           <Text
+             fontWeight="bold"
+             textAlign="start"
+           >
+             #{nationalPokedexNumber}
+           </Text>
+         </CardHeader>
+         <CardBody
+           as={VStack}
+           alignItems="center"
+           gap={6}
+           paddingBlockStart={6}
+         >
+           <Center>
+             <BackgroundImage />
+ 
+             {imageSrc ? (
+               <Image
+                 position="absolute"
+                 src={imageSrc}
+                 alt={name}
+                 decoding="auto"
+                 w={{ base: 120, md: 160 }}
+                 h={{ base: 120, md: 160 }}
+               />
+             ) : (
+               <Text
+                 fontSize={{ base: 'lg', md: 'md' }}
+                 textAlign="center"
+                 fontWeight="bold"
+                 position="absolute"
+               >
+                 Not Found
+               </Text>
+             )}
+           </Center>
+           <Text
+             id={cardLabelId}
+             textAlign="center"
+             fontWeight="bold"
+           >
+             {name}
+           </Text>
+         </CardBody>
+       </Card>
+     </>
+   )
+ }
+ 
+ PokemonProfileCard.Loading = SkeltonPokemonProfileCard
```

</details>

## 2.3. カードをGrid状に表示するビューを作成する

[`src/components/list/collection.tsx`](https://github.com/koralle/geek-project-pokemon-app/blob/main/src/components/list/collection.tsx) を作成し、以下のコードを追加してください。

<details>
  <summary>コードを見る（長いので省略）</summary>

```diff
+ import { Box, Center, Grid, Image, Text } from '@yamada-ui/react'
+ import type { GridProps } from '@yamada-ui/react'
+ import { Suspense, memo, useEffect } from 'react'
+ import type { ReactNode } from 'react'
+ import { usePokemonSpeciesList } from '../../hooks/use-pokemon-species-list'
+ import { DEFAULT_LIMIT } from '../../lib/constants'
+ import { usePageContext } from '../../lib/contexts/page-context'
+ import { useSetTotalContext, useTotalContext } from '../../lib/contexts/total-context'
+ import { PokemonProfileCard } from './card'
+ 
+ const SkeltonPokemonCollection = memo(() => (
+   <Grid
+     w="100%"
+     h="100%"
+     placeContent="center"
+   >
+     <Center>
+       <Image
+         src="/monster-ball.svg"
+         alt=""
+         w={{ base: 240, md: 480 }}
+         h={{ base: 240, md: 480 }}
+         aria-hidden
+         decoding="auto"
+         opacity={0.8}
+       />
+       <Text
+         position="absolute"
+         fontSize={{ base: '2xl', md: '4xl' }}
+         fontWeight="bold"
+       >
+         Now Loading...
+       </Text>
+     </Center>
+   </Grid>
+ ))
+ 
+ export const useLastPage = () => {
+   const { total } = useTotalContext()
+   const { page } = usePageContext()
+ 
+   const isLastPage = Math.ceil(total / DEFAULT_LIMIT) === page
+ 
+   return {
+     isLastPage,
+   }
+ }
+ 
+ const Layout = ({ children }: { children: ReactNode }) => {
+   const { isLastPage } = useLastPage()
+ 
+   const gridStyles = {
+     w: '100%',
+     templateColumns: { base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' },
+     gap: { base: 4, sm: 4, md: 6 },
+   } as const satisfies Pick<Required<GridProps>, 'templateColumns' | 'gap' | 'w'>
+ 
+   return isLastPage ? (
+     <Box
+       w="100%"
+       h="100%"
+     >
+       <Grid {...gridStyles}>{children}</Grid>
+     </Box>
+   ) : (
+     <Grid
+       {...gridStyles}
+       h="100%"
+     >
+       {children}
+     </Grid>
+   )
+ }
+ 
+ export const PokemonCollection = () => {
+   const { page } = usePageContext()
+   const { setTotal } = useSetTotalContext()
+ 
+   const { data } = usePokemonSpeciesList({ page, limit: DEFAULT_LIMIT })
+   const { count, results } = data
+ 
+   useEffect(() => {
+     setTotal(() => count)
+   }, [count, setTotal])
+ 
+   return (
+     <Layout>
+       {results.map((result) => (
+         <Suspense
+           key={result.id}
+           fallback={<PokemonProfileCard.Loading />}
+         >
+           <PokemonProfileCard id={result.id} />
+         </Suspense>
+       ))}
+     </Layout>
+   )
+ }
+ 
+ PokemonCollection.Loading = SkeltonPokemonCollection
```
</details>

### Checkpoint 

<video src="./videos/chapter_03/fetch-pokemon-list.webm" controls width="800"></video>

## 2.4. ページネーションを作成する

ページを切り替えることで画面に表示するポケモンを変更できるようにします。

[`src/components/pagination.tsx`](https://github.com/koralle/geek-project-pokemon-app/blob/main/src/components/pagination.tsx) を作成し、以下のコードを追加してください。

<details>
  <summary>コードを見る（長いので省略）</summary>

```diff
+ import { Pagination, useBreakpoint } from '@yamada-ui/react'
+ import { DEFAULT_LIMIT, DEFAULT_PAGE } from '../../lib/constants'
+ import { usePageContext, useSetPageContext } from '../../lib/contexts/page-context'
+ import { useTotalContext } from '../../lib/contexts/total-context'
+ 
+ const useMobile = () => {
+   const breakpoint = useBreakpoint()
+   const isMobile = breakpoint === 'base' || ['xs', 'sm'].includes(breakpoint)
+ 
+   return {
+     isMobile,
+   }
+ }
+ 
+ export const PokemonCollectionPagination = () => {
+   const { page } = usePageContext()
+   const { setPage } = useSetPageContext()
+   const { total } = useTotalContext()
+   const { isMobile } = useMobile()
+ 
+   const handlePageChange = (newPage: number) => {
+     setPage(() => newPage)
+   }
+ 
+   return (
+     <Pagination
+       variant="solid"
+       page={page ?? DEFAULT_PAGE}
+       total={Math.ceil(total / DEFAULT_LIMIT)}
+       onChange={handlePageChange}
+       size={{ base: 'md', md: 'lg' }}
+       siblings={isMobile ? 0 : 1}
+       withEdges={!isMobile}
+     />
+   )
+ }
```
</details>

## 2.5. 作成したコンポーネントをアプリケーションに組み込んで一覧画面を完成させる

[`src/app.tsx`](https://github.com/koralle/geek-project-pokemon-app/blob/main/src/app.tsx) を作成し、以下のコードを追加してください。

<details>
  <summary>コードを見る（長いので省略）</summary>

```diff
- import { useState } from 'react'
+ import { Box, Center, Container, Heading, Text, VStack } from '@yamada-ui/react'
+ import { Suspense, useId, useState } from 'react'
  import type { ReactNode } from 'react'
+ import { PokemonCollection } from './components/list/collection'
+ import { PokemonCollectionPagination } from './components/list/pagination'
  import { PageContext, SetPageContext } from './lib/contexts/page-context'
  import { SetTotalContext, TotalContext } from './lib/contexts/total-context'
  
  const Providers = ({ children }: { children: ReactNode }) => {
    const [page, setPage] = useState(1)
    const [total, setTotal] = useState(1000)

    return (
      <SetPageContext.Provider value={{ setPage }}>
        <SetTotalContext.Provider value={{ setTotal }}>
          <PageContext.Provider value={{ page }}>
            <TotalContext.Provider value={{ total }}>
              {children}
            </TotalContext.Provider>
          </PageContext.Provider>
        </SetTotalContext.Provider>
      </SetPageContext.Provider>
    )
  }

  export const App = () => {
+   const headingId = useId()
+
    return (
      <Providers>
-       <h1>Hello, world!</h1>
+       <Center h="100%">
+         <Container
+           p={0}
+           h="100%"
+         >
+           <VStack
+             gap={10}
+             aria-labelledby={headingId}
+             h="100%"
+           >
+             <Box as="header">
+               <VStack
+                 id={headingId}
+                 as="hgroup"
+                 gap={{ base: 6, lg: 4 }}
+               >
+                 <Heading
+                   as="h1"
+                   w="full"
+                   textAlign="center"
+                 >
+                   ポケモン一覧
+                 </Heading>
+                 <Text
+                   w="full"
+                   textAlign="center"
+                   fontSize={{ base: 'xl', sm: 'md' }}
+                 >
+                   好きなポケモンを探そう！
+                 </Text>
+               </VStack>
+             </Box>
+             <Suspense fallback={<PokemonCollection.Loading />}>
+               <PokemonCollection />
+             </Suspense>
+             <Center>
+               <PokemonCollectionPagination />
+             </Center>
+           </VStack>
+         </Container>
+       </Center>
      </Providers>
    )
  }
```
</details>

#### Checkpoint

ページネーションでページを切り替えると、画面に表示されるポケモンが変化します。

<video src="./videos/chapter_02/pagination.webm" controls width="800"></video>
