import { http, HttpResponse, delay } from 'msw'

const PoisonPuppeteer = {
  effect_changes: [],
  effect_entries: [],
  flavor_text_entries: [
    {
      flavor_text:
        "Lorsque Pêchaminus empoisonne un Pokémon grâce\\nà l'une de ses capacités, ce dernier devient également\\nconfus.",
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
      version_group: {
        name: 'the-indigo-disk',
        url: 'https://pokeapi.co/api/v2/version-group/27/',
      },
    },
    {
      flavor_text: "Pokémon poisoned by Pecharunt's moves will also become confused.",
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      version_group: {
        name: 'the-indigo-disk',
        url: 'https://pokeapi.co/api/v2/version-group/27/',
      },
    },
  ],
  generation: {
    name: 'generation-ix',
    url: 'https://pokeapi.co/api/v2/generation/9/',
  },
  id: 307,
  is_main_series: true,
  name: 'poison-puppeteer',
  names: [
    {
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      name: 'どくくぐつ',
    },
    {
      language: {
        name: 'ko',
        url: 'https://pokeapi.co/api/v2/language/3/',
      },
      name: '독조종',
    },
    {
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      name: '毒傀儡',
    },
    {
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
      name: 'Emprise Toxique',
    },
    {
      language: {
        name: 'de',
        url: 'https://pokeapi.co/api/v2/language/6/',
      },
      name: 'Giftpuppenspiel',
    },
    {
      language: {
        name: 'es',
        url: 'https://pokeapi.co/api/v2/language/7/',
      },
      name: 'Títere Tóxico',
    },
    {
      language: {
        name: 'it',
        url: 'https://pokeapi.co/api/v2/language/8/',
      },
      name: 'Malia Tossica',
    },
    {
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      name: 'Poison Puppeteer',
    },
    {
      language: {
        name: 'ja',
        url: 'https://pokeapi.co/api/v2/language/11/',
      },
      name: 'どくくぐつ',
    },
    {
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      name: '毒傀儡',
    },
  ],
  pokemon: [
    {
      is_hidden: false,
      pokemon: {
        name: 'pecharunt',
        url: 'https://pokeapi.co/api/v2/pokemon/1025/',
      },
      slot: 1,
    },
  ],
}

export const fetchPokemonAbilityResolver = http.get('https://pokeapi.co/api/v2/ability/:id', async ({ params }) => {
  const { id } = params

  if (id === '307') {
    return HttpResponse.json(PoisonPuppeteer)
  }
  await delay('infinite')
  return HttpResponse.json({})
})
