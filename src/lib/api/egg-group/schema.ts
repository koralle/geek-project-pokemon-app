import { z } from 'zod'

export const getRawEggGroupResponseSchema = z.object({
  id: z.number().int().positive(),
  name: z.string(),
  names: z.array(
    z.object({
      language: z.object({
        name: z.string(),
        url: z.string(),
      }),
      name: z.string(),
    }),
  ),
  pokemon_species: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    }),
  ),
})

export type GetRawEggGroupResponse = z.infer<typeof getRawEggGroupResponseSchema>
