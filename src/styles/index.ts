import { extendTheme } from '@yamada-ui/react'
import type { UsageTheme } from '@yamada-ui/react'
import { breakpoints } from './breakpoints'
import { tokens } from './tokens'

const customTheme: UsageTheme = {
  breakpoints,
  ...tokens,
}

export const theme = extendTheme(customTheme)({ omit: ['breakpoints'] })
