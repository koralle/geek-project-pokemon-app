import { extendTheme } from '@yamada-ui/react'
import type { UsageTheme } from '@yamada-ui/react'
import { breakpoints } from './breakpoints'
import { semantics } from './semantics'
import { tokens } from './tokens'

const customTheme: UsageTheme = {
  breakpoints,
  ...tokens,
  semantics,
}

export const theme = extendTheme(customTheme)({ omit: ['breakpoints'] })
