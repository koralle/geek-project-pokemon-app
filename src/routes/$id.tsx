import { createFileRoute, notFound } from '@tanstack/react-router'
import { pokemonIdSchema, pokemonSpeciesIdSchema } from '../entities'
import { DEFAULT_CACHE_STALE_TIME, parseNumberFromUrl, pokemonQueryOptions, pokemonSpeciesQueryOptions } from '../lib'
import { PokemonDetailPage } from '../pages'

export const Route = createFileRoute('/$id')({
  component: PokemonDetailPage,
  loader: async ({ params, context: { queryClient } }) => {
    const { id } = params

    const pokemonSpeciesIdSchemaParseResult = pokemonSpeciesIdSchema.safeParse(Number.parseInt(id))
    if (!pokemonSpeciesIdSchemaParseResult.success) {
      throw notFound()
    }

    const pokemonSpeciesId = pokemonSpeciesIdSchemaParseResult.data
    const pokemonSpecies = await queryClient.ensureQueryData(pokemonSpeciesQueryOptions(pokemonSpeciesId))

    const pokemonId = pokemonIdSchema.parse(
      parseNumberFromUrl(pokemonSpecies.varieties.find((variety) => variety.is_default)?.pokemon.url ?? '') ?? 1,
    )

    await queryClient.ensureQueryData(pokemonQueryOptions(pokemonId))
  },
  staleTime: DEFAULT_CACHE_STALE_TIME,
})
