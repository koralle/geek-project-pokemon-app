import { z } from 'zod'

export const eggGroupSchema = z.union([
  z.literal('monster'),
  z.literal('water1'),
  z.literal('bug'),
  z.literal('flying'),
  z.literal('ground'),
  z.literal('fairy'),
  z.literal('plant'),
  z.literal('humanshape'),
  z.literal('water3'),
  z.literal('mineral'),
  z.literal('indeterminate'),
  z.literal('water2'),
  z.literal('ditto'),
  z.literal('dragon'),
  z.literal('no-eggs'),
])

export type EggGroup = z.infer<typeof eggGroupSchema>
