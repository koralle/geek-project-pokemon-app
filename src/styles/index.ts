import { extendTheme } from '@yamada-ui/react'
import type { UsageTheme } from '@yamada-ui/react'
import { breakpoints } from './breakpoints'

const customTheme: UsageTheme = {
  breakpoints,
}

export const theme = extendTheme(customTheme)({ omit: ['breakpoints'] })
