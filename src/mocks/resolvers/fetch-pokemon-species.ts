import { http, HttpResponse, delay } from 'msw'

const Pecharunt = {
  base_happiness: 0,
  capture_rate: 3,
  color: {
    name: 'purple',
    url: 'https://pokeapi.co/api/v2/pokemon-color/7/',
  },
  egg_groups: [
    {
      name: 'no-eggs',
      url: 'https://pokeapi.co/api/v2/egg-group/15/',
    },
  ],
  evolution_chain: {
    url: 'https://pokeapi.co/api/v2/evolution-chain/549/',
  },
  evolves_from_species: null,
  flavor_text_entries: [
    {
      flavor_text:
        "It feeds others toxic mochi that draw out desires and capabilities. Those who eat the mochi fall under Pecharunt's control, chained to its will.",
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'scarlet',
        url: 'https://pokeapi.co/api/v2/version/40/',
      },
    },
    {
      flavor_text:
        'Its peach-shaped shell serves as storage for a potent poison. It makes poisonous mochi and serves them to people and Pokémon.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version: {
        name: 'violet',
        url: 'https://pokeapi.co/api/v2/version/41/',
      },
    },
  ],
  form_descriptions: [],
  forms_switchable: false,
  gender_rate: -1,
  genera: [
    {
      genus: 'しはいポケモン',
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
    },
    {
      genus: '지배포켓몬',
      language: {
        name: 'ko',
        url: 'https://pokeapi.co/api/v2/language/3/',
      },
    },
    {
      genus: 'Emprise',
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
    },
    {
      genus: 'Subjugation Pokémon',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
    },
    {
      genus: 'しはいポケモン',
      language: {
        name: 'ja',
        url: 'https://pokeapi.co/api/v2/language/11/',
      },
    },
  ],
  generation: {
    name: 'generation-ix',
    url: 'https://pokeapi.co/api/v2/generation/9/',
  },
  growth_rate: {
    name: 'slow',
    url: 'https://pokeapi.co/api/v2/growth-rate/1/',
  },
  habitat: null,
  has_gender_differences: false,
  hatch_counter: 20,
  id: 1025,
  is_baby: false,
  is_legendary: false,
  is_mythical: true,
  name: 'pecharunt',
  names: [
    {
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      name: 'モモワロウ',
    },
    {
      language: {
        name: 'ko',
        url: 'https://pokeapi.co/api/v2/language/3/',
      },
      name: '복숭악동',
    },
    {
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      name: '桃歹郎',
    },
    {
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
      name: 'Pêchaminus',
    },
    {
      language: {
        name: 'de',
        url: 'https://pokeapi.co/api/v2/language/6/',
      },
      name: 'Infamomo',
    },
    {
      language: {
        name: 'es',
        url: 'https://pokeapi.co/api/v2/language/7/',
      },
      name: 'Pecharunt',
    },
    {
      language: {
        name: 'it',
        url: 'https://pokeapi.co/api/v2/language/8/',
      },
      name: 'Pecharunt',
    },
    {
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      name: 'Pecharunt',
    },
    {
      language: {
        name: 'ja',
        url: 'https://pokeapi.co/api/v2/language/11/',
      },
      name: 'モモワロウ',
    },
    {
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      name: '桃歹郎',
    },
  ],
  order: 1027,
  pal_park_encounters: [],
  pokedex_numbers: [
    {
      entry_number: 1025,
      pokedex: {
        name: 'national',
        url: 'https://pokeapi.co/api/v2/pokedex/1/',
      },
    },
    {
      entry_number: 243,
      pokedex: {
        name: 'blueberry',
        url: 'https://pokeapi.co/api/v2/pokedex/33/',
      },
    },
  ],
  shape: {
    name: 'ball',
    url: 'https://pokeapi.co/api/v2/pokemon-shape/1/',
  },
  varieties: [
    {
      is_default: true,
      pokemon: {
        name: 'pecharunt',
        url: 'https://pokeapi.co/api/v2/pokemon/1025/',
      },
    },
  ],
}

export const fetchPokemonSpeciesResolver = http.get(
  'https://pokeapi.co/api/v2/pokemon-species/:id',
  async ({ params }) => {
    const { id } = params

    if (id === '1025') {
      return HttpResponse.json(Pecharunt)
    }
    await delay('infinite')
    return HttpResponse.json({})
  },
)
