import { createFileRoute } from '@tanstack/react-router'
import { zodValidator } from '@tanstack/zod-adapter'
import { z } from 'zod'
import { pokemonSpeciesIdSchema } from '../entities'
import { DEFAULT_CACHE_STALE_TIME } from '../lib'
import { PokemonListPage } from '../pages'
import { pokemonSpeciesListQueryOptions } from '../pages'

const paginationSchema = z.object({
  page: pokemonSpeciesIdSchema.catch(pokemonSpeciesIdSchema.parse(1)),
})

export const Route = createFileRoute('/')({
  component: PokemonListPage,
  validateSearch: zodValidator(paginationSchema),
  loaderDeps: ({ search: { page } }) => ({ page }),
  loader: async ({ context: { queryClient }, deps: { page } }) => {
    queryClient.ensureQueryData(pokemonSpeciesListQueryOptions({ page }))
  },
  staleTime: DEFAULT_CACHE_STALE_TIME,
})
