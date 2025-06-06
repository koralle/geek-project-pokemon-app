import { http, HttpResponse } from 'msw'

const mockResult = {
  count: 1025,
  next: 'https://pokeapi.co/api/v2/pokemon-species?offset=20&limit=20',
  previous: null,
  results: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/3/',
    },
    {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon-species/4/',
    },
    {
      name: 'charmeleon',
      url: 'https://pokeapi.co/api/v2/pokemon-species/5/',
    },
    {
      name: 'charizard',
      url: 'https://pokeapi.co/api/v2/pokemon-species/6/',
    },
    {
      name: 'squirtle',
      url: 'https://pokeapi.co/api/v2/pokemon-species/7/',
    },
    {
      name: 'wartortle',
      url: 'https://pokeapi.co/api/v2/pokemon-species/8/',
    },
    {
      name: 'blastoise',
      url: 'https://pokeapi.co/api/v2/pokemon-species/9/',
    },
    {
      name: 'caterpie',
      url: 'https://pokeapi.co/api/v2/pokemon-species/10/',
    },
    {
      name: 'metapod',
      url: 'https://pokeapi.co/api/v2/pokemon-species/11/',
    },
    {
      name: 'butterfree',
      url: 'https://pokeapi.co/api/v2/pokemon-species/12/',
    },
    {
      name: 'weedle',
      url: 'https://pokeapi.co/api/v2/pokemon-species/13/',
    },
    {
      name: 'kakuna',
      url: 'https://pokeapi.co/api/v2/pokemon-species/14/',
    },
    {
      name: 'beedrill',
      url: 'https://pokeapi.co/api/v2/pokemon-species/15/',
    },
    {
      name: 'pidgey',
      url: 'https://pokeapi.co/api/v2/pokemon-species/16/',
    },
    {
      name: 'pidgeotto',
      url: 'https://pokeapi.co/api/v2/pokemon-species/17/',
    },
    {
      name: 'pidgeot',
      url: 'https://pokeapi.co/api/v2/pokemon-species/18/',
    },
    {
      name: 'rattata',
      url: 'https://pokeapi.co/api/v2/pokemon-species/19/',
    },
    {
      name: 'raticate',
      url: 'https://pokeapi.co/api/v2/pokemon-species/20/',
    },
  ],
}

export const fetchPokemonSpeciesListResolver = http.get('https://pokeapi.co/api/v2/pokemon-species', async () => {
  return HttpResponse.json(mockResult)
})
