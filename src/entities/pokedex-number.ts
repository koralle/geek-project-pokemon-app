import { z } from 'zod'

export const pokedexNumberSchema = z.number().int().positive().brand('PokedexNumber')
export type PokedexNumber = z.infer<typeof pokedexNumberSchema>
