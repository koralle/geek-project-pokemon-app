import { z } from 'zod'

const colorSchema = z.object({
  name: z.string(),
  url: z.string().url(),
})

const eggGroupSchema = z.object({
  name: z.string(),
  url: z.string().url(),
})

const evolutionChainSchema = z.object({
  url: z.string().url(),
})

const flavorTextEntrySchema = z.object({
  flavor_text: z.string(),
  language: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  version: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
})

const generaSchema = z.object({
  genus: z.string(),
  language: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
})

const generationSchema = z.object({
  name: z.string(),
  url: z.string().url(),
})

const growthRateSchema = z.object({
  name: z.string(),
  url: z.string().url(),
})

const habitatSchema = z.object({
  name: z.string(),
  url: z.string().url(),
})

const palParkEncounterSchema = z.object({
  area: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  base_score: z.number().int(),
  rate: z.number().int(),
})

const pokedexNumbersSchema = z.object({
  entry_number: z.number().int().positive(),
  pokedex: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
})

const nameSchema = z.object({
  language: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  name: z.string(),
})

const shapeSchema = z.object({
  name: z.string(),
  url: z.string().url(),
})

const varietySchema = z.object({
  is_default: z.boolean(),
  pokemon: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
})

export const getRawPokemonSpeciesResponseSchema = z.object({
  base_happiness: z.number().int().nullable(),
  capture_rate: z.number().int(),
  color: colorSchema,
  egg_groups: z.array(eggGroupSchema),
  evolution_chain: evolutionChainSchema,
  flavor_text_entries: z.array(flavorTextEntrySchema),
  form_descriptions: z.array(z.any()),
  forms_switchable: z.boolean(),
  gender_rate: z.number().int(),
  genera: z.array(generaSchema),
  generation: generationSchema,
  growth_rate: growthRateSchema,
  habitat: habitatSchema.nullable(),
  has_gender_differences: z.boolean(),
  hatch_counter: z.number().int().nullable(),
  id: z.number().int().positive(),
  is_baby: z.boolean(),
  is_legendary: z.boolean(),
  is_mythical: z.boolean(),
  name: z.string(),
  names: z.array(nameSchema),
  order: z.number().int(),
  pal_park_encounters: z.array(palParkEncounterSchema),
  pokedex_numbers: z.array(pokedexNumbersSchema),
  shape: shapeSchema,
  varieties: z.array(varietySchema),
})

export type GetRawPokemonSpeciesResponse = z.infer<typeof getRawPokemonSpeciesResponseSchema>
