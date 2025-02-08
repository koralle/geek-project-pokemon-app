import { z } from 'zod'
import { abilitySchema } from './ability'
import { eggGroupSchema } from './egg-group'
import { pokedexNumberSchema } from './pokedex-number'
import { typeSchema } from './type'

export const pokemonIdSchema = z.number().int().positive().brand('PokemonId')
export const pokemonSpeciesIdSchema = z.number().int().positive().brand('PokemonSpeciesId')

export const pokemonSchema = z
  .object({
    id: pokemonSpeciesIdSchema,
    name: z.string(),
    nationalPokedexNumber: pokedexNumberSchema,
    imageSrc: z.string(),
    types: z.array(typeSchema),
    abilities: z.array(abilitySchema),
    eggGroups: z.array(eggGroupSchema),
    height: z.number().int().positive(),
    weight: z.number().int().positive(),
  })
  .brand('Pokemon')

export type PokemonId = z.infer<typeof pokemonIdSchema>
export type PokemonSpeciesId = z.infer<typeof pokemonSpeciesIdSchema>
export type Pokemon = z.infer<typeof pokemonSchema>
