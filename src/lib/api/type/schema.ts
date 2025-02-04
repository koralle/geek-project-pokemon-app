import { z } from 'zod'
import { typeIdSchema } from '../../../entities/type'

const getRawTypeResponseSchema = z.object({
  damage_relations: z.object({
    double_damage_from: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
      }),
    ),
    double_damage_to: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
      }),
    ),
    half_damage_from: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
      }),
    ),
    half_damage_to: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
      }),
    ),
    no_damage_from: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
      }),
    ),
    no_damage_to: z.array(
      z.object({
        name: z.string(),
        url: z.string(),
      }),
    ),
  }),
  game_indices: z.array(
    z.object({
      game_index: z.number(),
      generation: z.object({
        name: z.string(),
        url: z.string(),
      }),
    }),
  ),
  generation: z.object({
    name: z.string(),
    url: z.string(),
  }),
  id: typeIdSchema,
  move_damage_class: z
    .object({
      name: z.string(),
      url: z.string(),
    })
    .nullable(),
  moves: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    }),
  ),
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
  past_damage_relations: z.array(
    z.object({
      damage_relations: z.object({
        double_damage_from: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
          }),
        ),
        double_damage_to: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
          }),
        ),
        half_damage_from: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
          }),
        ),
        half_damage_to: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
          }),
        ),
        no_damage_from: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
          }),
        ),
        no_damage_to: z.array(
          z.object({
            name: z.string(),
            url: z.string(),
          }),
        ),
      }),
      generation: z.object({
        name: z.string(),
        url: z.string(),
      }),
    }),
  ),
  pokemon: z.array(
    z.object({
      pokemon: z.object({
        name: z.string(),
        url: z.string(),
      }),
      slot: z.number(),
    }),
  ),
  sprites: z.object({
    'generation-iii': z.object({
      colosseum: z.object({
        name_icon: z.string().nullable(),
      }),
      emerald: z.object({
        name_icon: z.string().nullable(),
      }),
      'firered-leafgreen': z.object({
        name_icon: z.string().nullable(),
      }),
      'ruby-saphire': z.object({
        name_icon: z.string().nullable(),
      }),
      xd: z.object({
        name_icon: z.string().nullable(),
      }),
    }),
    'generation-iv': z.object({
      'diamond-pearl': z.object({
        name_icon: z.string().nullable(),
      }),
      'heartgold-soulsilver': z.object({
        name_icon: z.string().nullable(),
      }),
      platinum: z.object({
        name_icon: z.string().nullable(),
      }),
    }),
    'generation-v': z.object({
      'black-2-white-2': z.object({
        name_icon: z.string().nullable(),
      }),
      'black-white': z.object({
        name_icon: z.string().nullable(),
      }),
    }),
    'generation-vi': z.object({
      'omegaruby-alphasapphire': z
        .object({
          name_icon: z.string().nullable(),
        })
        .nullish(),
      'x-y': z.object({
        name_icon: z.string().nullable(),
      }),
    }),
    'generation-vii': z.object({
      'lets-go-pikachu-lets-go-eevee': z.object({
        name_icon: z.string().nullable(),
      }),
      'sun-moon': z.object({
        name_icon: z.string().nullable(),
      }),
      'ultra-sun-ultra-moon': z.object({
        name_icon: z.string().nullable(),
      }),
    }),
    'generation-viii': z.object({
      'brilliant-diamond-and-shining-pearl': z.object({
        name_icon: z.string().nullable(),
      }),
      'legends-arceus': z.object({
        name_icon: z.string().nullable(),
      }),
      'sword-shield': z.object({
        name_icon: z.string().nullable(),
      }),
    }),
    'generation-ix': z.object({
      'scarlet-violet': z.object({
        name_icon: z.string().nullable(),
      }),
    }),
  }),
})

export { getRawTypeResponseSchema }
export type GetRawTypeResponse = z.infer<typeof getRawTypeResponseSchema>
