import type { HttpHandler } from 'msw'
import { fetchPokemonResolver } from './resolvers/fetch-pokemon'
import { fetchPokemonSpeciesResolver } from './resolvers/fetch-pokemon-species'
import { fetchPokemonSpeciesListResolver } from './resolvers/fetch-pokemon-species-list'

export const httpHandlers: HttpHandler[] = [
  fetchPokemonSpeciesResolver,
  fetchPokemonResolver,
  fetchPokemonSpeciesListResolver,
]
