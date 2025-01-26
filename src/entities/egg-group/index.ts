import { z } from 'zod'

export const eggGroupIdSchema = z.number().int().positive().brand('EggGroupId')

export const eggGroupSchema = z
  .object({
    id: eggGroupIdSchema,
    name: z.string(),
  })
  .brand('EggGroup')

export type EggGroupId = z.infer<typeof eggGroupIdSchema>
export type EggGroup = z.infer<typeof eggGroupSchema>
