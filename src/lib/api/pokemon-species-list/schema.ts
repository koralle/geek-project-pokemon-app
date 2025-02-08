import { z } from 'zod'

const getRawPokemonSpeciesListResponseSchema = z.object({
  count: z.number().int().positive(),
  next: z.string().url().nullable(),
  previous: z.string().url().nullable(),
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string().url(),
    }),
  ),
})

export { getRawPokemonSpeciesListResponseSchema }
export type GetRawPokemonSpeciesListResponse = z.infer<typeof getRawPokemonSpeciesListResponseSchema>
