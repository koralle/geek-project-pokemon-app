import { z } from 'zod'

export const typeIdSchema = z.number().int().positive().brand('TypeId')

export const typeSchema = z
  .object({
    id: typeIdSchema,
    name: z.string(),
  })
  .brand('Type')

export type TypeId = z.infer<typeof typeIdSchema>
export type Type = z.infer<typeof typeSchema>
