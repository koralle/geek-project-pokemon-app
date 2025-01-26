import type { HttpHandler } from 'msw'
import {
  fetchPokemonAbilityResolver,
  fetchPokemonEggGroupResolver,
  fetchPokemonResolver,
  fetchPokemonSpeciesResolver,
} from './resolvers'

export const httpHandlers: HttpHandler[] = [
  fetchPokemonSpeciesResolver,
  fetchPokemonResolver,
  fetchPokemonAbilityResolver,
  fetchPokemonEggGroupResolver,
]
