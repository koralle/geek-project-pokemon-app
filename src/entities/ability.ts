import { z } from 'zod'

export const abilityIdSchema = z.number().int().nonnegative().brand('AbilityId')

export const abilitySchema = z
  .object({
    id: abilityIdSchema,
    name: z.string(),
    is_hidden: z.boolean(),
  })
  .brand('Ability')

export type AbilityId = z.infer<typeof abilityIdSchema>
export type Ability = z.infer<typeof abilitySchema>
