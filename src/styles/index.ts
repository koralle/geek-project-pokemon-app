import { extendTheme } from '@yamada-ui/react'
import type { UsageTheme } from '@yamada-ui/react'

const customTheme: UsageTheme = {}

export const theme = extendTheme(customTheme)()
