import { QueryClient } from '@tanstack/react-query'
import { DEFAULT_CACHE_STALE_TIME } from './constants'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: DEFAULT_CACHE_STALE_TIME, // 24時間キャッシュを保持
      refetchOnWindowFocus: false, // ウィンドウフォーカス時に自動リフェッチしない
      retry: 3, // エラー発生時のリトライ回数
      retryDelay: (attempt) => {
        const delay = Math.min(1000 * 60 * 5 * 2 ** attempt, 1000 * 60 * 60) // 最大1時間
        const jitter = Math.random() * delay * 0.1 // 最大10%のJitter
        return delay + jitter
      },
    },
  },
})
