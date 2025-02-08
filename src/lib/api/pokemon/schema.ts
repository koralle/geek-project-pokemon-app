import { z } from 'zod'

const abilitySchema = z.object({
  ability: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  is_hidden: z.boolean(),
  slot: z.number().int().positive(),
})

const criesSchema = z.object({
  latest: z.string().url(),
  legacy: z.string().url().nullable(),
})

const formSchema = z.object({
  name: z.string(),
  url: z.string().url(),
})

const typeSchema = z.object({
  slot: z.number().int().positive(),
  type: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
})

const statSchema = z.object({
  base_stat: z.number().int(),
  effort: z.number().int(),
  stat: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
})

const speciesSchema = z.object({
  name: z.string(),
  url: z.string().url(),
})

const gameIndexSchema = z.object({
  game_index: z.number().int().positive(),
  version: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
})

const versionGroupSchema = z.object({
  name: z.string(),
  url: z.string().url(),
})

const moveLearnMethodSchema = z.object({
  name: z.string(),
  url: z.string().url(),
})

const versionGroupDetailSchema = z.object({
  level_learned_at: z.number().int(),
  move_learn_method: moveLearnMethodSchema,
  version_group: versionGroupSchema,
})

const moveSchema = z.object({
  move: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  version_group_details: z.array(versionGroupDetailSchema),
})

const heldItemSchema = z.object({
  item: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  version_details: z.array(
    z.object({
      rarity: z.number().int(),
      version: z.object({
        name: z.string(),
        url: z.string().url(),
      }),
    }),
  ),
})

const pastTypeSchema = z.object({
  generation: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
  types: z.array(typeSchema),
})

const pastAbilitySchema = z.object({
  abilities: z.array(abilitySchema),
  generation: z.object({
    name: z.string(),
    url: z.string().url(),
  }),
})

const pokemonSpriteSchema = z.object({
  back_default: z.string().url().nullable(),
  back_female: z.string().url().nullable(),
  back_shiny: z.string().url().nullable(),
  back_shiny_female: z.string().url().nullable(),
  front_default: z.string().url().nullable(),
  front_female: z.string().url().nullable(),
  front_shiny: z.string().url().nullable(),
  front_shiny_female: z.string().url().nullable(),
  other: z.object({
    dream_world: z.object({
      front_default: z.string().url().nullable(),
      front_female: z.string().url().nullable(),
    }),
    home: z.object({
      front_default: z.string().url().nullable(),
      front_female: z.string().url().nullable(),
      front_shiny: z.string().url().nullable(),
      front_shiny_female: z.string().url().nullable(),
    }),
    'official-artwork': z.object({
      front_default: z.string().url().nullable(),
      front_shiny: z.string().url().nullable(),
    }),
    showdown: z.object({
      back_default: z.string().url().nullable(),
      back_female: z.string().url().nullable(),
      back_shiny: z.string().url().nullable(),
      back_shiny_female: z.string().url().nullable(),
      front_default: z.string().url().nullable(),
      front_female: z.string().url().nullable(),
      front_shiny: z.string().url().nullable(),
      front_shiny_female: z.string().url().nullable(),
    }),
  }),
  versions: z.object({
    'generation-i': z.object({
      'red-blue': z.object({
        back_default: z.string().url().nullable(),
        back_gray: z.string().url().nullable(),
        back_transparent: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_gray: z.string().url().nullable(),
        front_transparent: z.string().url().nullable(),
      }),
      yellow: z.object({
        back_default: z.string().url().nullable(),
        back_gray: z.string().url().nullable(),
        back_transparent: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_gray: z.string().url().nullable(),
        front_transparent: z.string().url().nullable(),
      }),
    }),
    'generation-ii': z.object({
      crystal: z.object({
        back_default: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        back_shiny_transparent: z.string().url().nullable(),
        back_transparent: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_transparent: z.string().url().nullable(),
        front_transparent: z.string().url().nullable(),
      }),
      gold: z.object({
        back_default: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_transparent: z.string().url().nullable(),
      }),
      silver: z.object({
        back_default: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_transparent: z.string().url().nullable(),
      }),
    }),
    'generation-iii': z.object({
      emerald: z.object({
        front_default: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
      }),
      'firered-leafgreen': z.object({
        back_default: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
      }),
      'ruby-sapphire': z.object({
        back_default: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
      }),
    }),
    'generation-iv': z.object({
      'diamond-pearl': z.object({
        back_default: z.string().url().nullable(),
        back_female: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        back_shiny_female: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      }),
      'heartgold-soulsilver': z.object({
        back_default: z.string().url().nullable(),
        back_female: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        back_shiny_female: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      }),
      platinum: z.object({
        back_default: z.string().url().nullable(),
        back_female: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        back_shiny_female: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      }),
    }),
    'generation-v': z.object({
      'black-white': z.object({
        animated: z.object({
          back_default: z.string().url().nullable(),
          back_female: z.string().url().nullable(),
          back_shiny: z.string().url().nullable(),
          back_shiny_female: z.string().url().nullable(),
          front_default: z.string().url().nullable(),
          front_female: z.string().url().nullable(),
          front_shiny: z.string().url().nullable(),
          front_shiny_female: z.string().url().nullable(),
        }),
        back_default: z.string().url().nullable(),
        back_female: z.string().url().nullable(),
        back_shiny: z.string().url().nullable(),
        back_shiny_female: z.string().url().nullable(),
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      }),
    }),
    'generation-vi': z.object({
      'omegaruby-alphasapphire': z.object({
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      }),
      'x-y': z.object({
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      }),
    }),
    'generation-vii': z.object({
      icons: z.object({
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
      }),
      'ultra-sun-ultra-moon': z.object({
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
        front_shiny: z.string().url().nullable(),
        front_shiny_female: z.string().url().nullable(),
      }),
    }),
    'generation-viii': z.object({
      icons: z.object({
        front_default: z.string().url().nullable(),
        front_female: z.string().url().nullable(),
      }),
    }),
  }),
})

export const getRawPokemonResponseSchema = z.object({
  // The identifier for this resource.
  id: z.number().int().positive(),

  // The name for this resource.
  name: z.string(),

  // The base experience gained for defeating this Pokémon.
  base_experience: z.number().int().positive(),

  // The height of this Pokémon in decimetres.
  height: z.number().int().positive(),

  // Set for exactly one Pokémon used as the default for each species.
  is_default: z.boolean(),

  // Order for sorting. Almost national order, except families are grouped together.
  order: z.number().int(),

  // The weight of this Pokémon in hectograms.
  weight: z.number().nonnegative(),

  // A list of abilities this Pokémon could potentially have.
  abilities: z.array(abilitySchema),

  // A list of forms this Pokémon can take on.
  forms: z.array(formSchema),

  // A list of game indices relevent to Pokémon item by generation.
  game_indices: z.array(gameIndexSchema),

  // A list of items this Pokémon may be holding when encountered.
  held_items: z.array(heldItemSchema),

  // A link to a list of location areas, as well as encounter details pertaining to specific versions.
  location_area_encounters: z.string().url(),

  // A list of moves along with learn methods and level details pertaining to specific version groups.
  moves: z.array(moveSchema),

  past_abilities: z.array(pastAbilitySchema),

  // A list of details showing types this pokémon had in previous generations
  past_types: z.array(pastTypeSchema),

  // A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at PokeAPI/sprites
  sprites: pokemonSpriteSchema,

  // A set of cries used to depict this Pokémon in the game. A visual representation of the various cries can be found at PokeAPI/cries
  cries: criesSchema,

  // The species this Pokémon belongs to.
  species: speciesSchema,

  // A list of base stat values for this Pokémon.
  stats: z.array(statSchema),

  // A list of details showing types this Pokémon has.
  types: z.array(typeSchema),
})

export type GetRawPokemonResponse = z.infer<typeof getRawPokemonResponseSchema>
