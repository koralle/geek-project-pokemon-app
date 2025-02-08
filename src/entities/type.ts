import { z } from 'zod'

export const typeSchema = z
  .union([
    z.literal('normal'),
    z.literal('fire'),
    z.literal('water'),
    z.literal('electric'),
    z.literal('grass'),
    z.literal('ice'),
    z.literal('fighting'),
    z.literal('poison'),
    z.literal('ground'),
    z.literal('flying'),
    z.literal('psychic'),
    z.literal('bug'),
    z.literal('rock'),
    z.literal('ghost'),
    z.literal('dragon'),
    z.literal('dark'),
    z.literal('steel'),
    z.literal('fairy'),
  ])
  .brand('Type')

export type Type = z.infer<typeof typeSchema>
