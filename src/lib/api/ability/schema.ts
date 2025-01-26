import { z } from 'zod'

const effectChangeSchema = z.object({
  effect_entries: z.array(
    z.object({
      effect: z.string(),
      language: z.object({
        name: z.string(),
        url: z.string().url(),
      }),
    }),
  ),
  version_group: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
})

const effectEntrySchema = z.object({
  effect: z.string(),
  language: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  short_effect: z.string(),
})

const namesSchema = z.array(
  z.object({
    language: z.object({
      name: z.string(),
      url: z.string().url(),
    }),
    name: z.string(),
  }),
)

const pokemonSchema = z.object({
  is_hidden: z.boolean(),
  pokemon: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  slot: z.number().int().positive(),
})

const flavorTextEntrySchema = z.object({
  flavor_text: z.string(),
  language: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  version_group: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
})

export const getRawAbilityResponseSchema = z.object({
  effect_changes: z.array(effectChangeSchema),
  effect_entries: z.array(effectEntrySchema),
  flavor_text_entries: z.array(flavorTextEntrySchema),
  id: z.number().int().positive(),
  is_main_series: z.boolean(),
  name: z.string(),
  names: namesSchema,
  generation: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  pokemon: z.array(pokemonSchema),
})

export type GetRawAbilityResponse = z.infer<typeof getRawAbilityResponseSchema>
