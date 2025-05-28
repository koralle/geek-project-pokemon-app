# Chapter 1 - Yamada UIのセットアップ

## 前提知識

- TypeScriptの基本的な文法
- Gitの基本的な使い方
- Reactの基本的なコンポーネント開発
- npmの基本的な方

## このChapterでやること

1. Node.jsのインストール
2. リポジトリのクローン
3. 依存パッケージのインストール
4. Yamada UIのセットアップ

## 1.1. Node.jsのインストール

今回のハンズオンでは、2025年2月時点でのLTSであるNode.js v22.xを使用します。

Node.jsのインストール方法はいくつかあります。

Windows/MacOS/Linux共通の方法は、[公式サイト](https://nodejs.org/ja)からダウンロードする方法です。
迷った場合はこの方法でインストールしてください。

> [!NOTE]
> 既にNode.js v22.xがインストールされている場合や、[mise](https://mise.jdx.dev/)や[nodenv](https://github.com/nodenv/nodenv)、[Volta](https://volta.sh/)などのツールを使用している場合は、それらのツールの使用方法に従ってください。

## 1.2. リポジトリのクローン

`git` コマンドでクローンする場合は、以下のコマンドを実行してください。

```bash
git clone https://github.com/koralle/geek-project-pokemon-app
```

> [!NOTE]
> GitのGUIクライアントやVSCodeのGit機能を使用しても勿論OKです。

デフォルトのブランチは `main` です。そのままだとアプリケーションは既に完成してしまっています。

リモートの `start-at-this-branch` ブランチをローカルで checkout してください。

```bash
git checkout -b develop origin/start-at-this-branch
```

> [!NOTE]
> 上記の例ではローカルでのブランチ名は `develop` となっていますが、ここは好きなブランチ名をつけて構いません。

## 1.3. 依存パッケージのインストール

```bash
npm i
```

または

```bash
npm install
```

を実行してください。

### Checkpoint

この時点で `npm run dev` を実行してみましょう。  
`http://localhost:5173`にアクセスしてみると、アプリケーションが起動することが確認できます。

## 1.4. Yamada UIのセットアップ

### 1.4.1. 必要パッケージのインストール

Yamada UIのセットアップに必要なパッケージは既にインストールしてありますが、参考程度に紹介します。

```bash
npm i @yamada-ui/react @yamada-ui/lucide
```

### 1.4.2. 設定ファイルの作成

まず、Yamada UIの設定ファイルを作成します。

`src/styles/config.ts` を作成し、以下の内容を記述してください。

```ts
import { extendConfig } from '@yamada-ui/react'

export const customConfig = extendConfig({
  initialColorMode: 'system',
  breakpoint: {
    direction: 'up',
  },
})
```

### 1.4.3. UIProviderの設定

`src/main.tsx` を開き、以下のコードを追加してください。

```diff
  import { QueryClientProvider } from '@tanstack/react-query'
  import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
+ import { UIProvider } from '@yamada-ui/react'
  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import { App } from './app'
  import { queryClient } from './lib/query-client'
+ import { customConfig } from './styles/config'
  
  // biome-ignore lint/style/noNonNullAssertion:
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
+       <UIProvider config={customConfig}>
          <App />
+       </UIProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>,
  )
```

## Checkpoint

ここまでで、Yamada UIのセットアップが完了しました。

試しに `src/app.tsx` を以下のように編集してみると、Yamada UIのセットアップが完了していることがわかります。

> [!NOTE]
> 次のChapterに進む前に元に戻しておいてください。

<img src="./images/chapter_01/start-with-this-screen.webp" alt="start-with-this-screen" width="800">

```diff
  import { QueryClientProvider } from '@tanstack/react-query'
  import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
  import { UIProvider } from '@yamada-ui/react'
  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import { App } from './app'
  import { queryClient } from './lib/query-client'
  import { customConfig } from './styles/config'
+ import { Button } from '@yamada-ui/react'
  
  // biome-ignore lint/style/noNonNullAssertion:
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <UIProvider config={customConfig}>
          <App />
+         <Button>Hello</Button>
        </UIProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>,
  )
```
