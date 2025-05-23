import { http, HttpResponse, delay } from 'msw'

const Pecharunt = {
  abilities: [
    {
      ability: {
        name: 'poison-puppeteer',
        url: 'https://pokeapi.co/api/v2/ability/307/',
      },
      is_hidden: false,
      slot: 1,
    },
  ],
  base_experience: 300,
  cries: {
    latest: 'https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/1025.ogg',
    legacy: null,
  },
  forms: [
    {
      name: 'pecharunt',
      url: 'https://pokeapi.co/api/v2/pokemon-form/1025/',
    },
  ],
  game_indices: [],
  height: 3,
  held_items: [],
  id: 1025,
  is_default: true,
  location_area_encounters: 'https://pokeapi.co/api/v2/pokemon/1025/encounters',
  moves: [
    {
      move: {
        name: 'toxic',
        url: 'https://pokeapi.co/api/v2/move/92/',
      },
      version_group_details: [
        {
          level_learned_at: 56,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'night-shade',
        url: 'https://pokeapi.co/api/v2/move/101/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'recover',
        url: 'https://pokeapi.co/api/v2/move/105/',
      },
      version_group_details: [
        {
          level_learned_at: 72,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'withdraw',
        url: 'https://pokeapi.co/api/v2/move/110/',
      },
      version_group_details: [
        {
          level_learned_at: 8,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'defense-curl',
        url: 'https://pokeapi.co/api/v2/move/111/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'smog',
        url: 'https://pokeapi.co/api/v2/move/123/',
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'poison-gas',
        url: 'https://pokeapi.co/api/v2/move/139/',
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rest',
        url: 'https://pokeapi.co/api/v2/move/156/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'substitute',
        url: 'https://pokeapi.co/api/v2/move/164/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'curse',
        url: 'https://pokeapi.co/api/v2/move/174/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'spite',
        url: 'https://pokeapi.co/api/v2/move/180/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'protect',
        url: 'https://pokeapi.co/api/v2/move/182/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sludge-bomb',
        url: 'https://pokeapi.co/api/v2/move/188/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'destiny-bond',
        url: 'https://pokeapi.co/api/v2/move/194/',
      },
      version_group_details: [
        {
          level_learned_at: 16,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'endure',
        url: 'https://pokeapi.co/api/v2/move/203/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'rollout',
        url: 'https://pokeapi.co/api/v2/move/205/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'mean-look',
        url: 'https://pokeapi.co/api/v2/move/212/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'egg',
            url: 'https://pokeapi.co/api/v2/move-learn-method/2/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sleep-talk',
        url: 'https://pokeapi.co/api/v2/move/214/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'shadow-ball',
        url: 'https://pokeapi.co/api/v2/move/247/',
      },
      version_group_details: [
        {
          level_learned_at: 40,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'memento',
        url: 'https://pokeapi.co/api/v2/move/262/',
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'imprison',
        url: 'https://pokeapi.co/api/v2/move/286/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'astonish',
        url: 'https://pokeapi.co/api/v2/move/310/',
      },
      version_group_details: [
        {
          level_learned_at: 1,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'fake-tears',
        url: 'https://pokeapi.co/api/v2/move/313/',
      },
      version_group_details: [
        {
          level_learned_at: 24,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'nasty-plot',
        url: 'https://pokeapi.co/api/v2/move/417/',
      },
      version_group_details: [
        {
          level_learned_at: 64,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'gunk-shot',
        url: 'https://pokeapi.co/api/v2/move/441/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'venoshock',
        url: 'https://pokeapi.co/api/v2/move/474/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'sludge-wave',
        url: 'https://pokeapi.co/api/v2/move/482/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'acid-spray',
        url: 'https://pokeapi.co/api/v2/move/491/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'foul-play',
        url: 'https://pokeapi.co/api/v2/move/492/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'hex',
        url: 'https://pokeapi.co/api/v2/move/506/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'phantom-force',
        url: 'https://pokeapi.co/api/v2/move/566/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'parting-shot',
        url: 'https://pokeapi.co/api/v2/move/575/',
      },
      version_group_details: [
        {
          level_learned_at: 32,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'poltergeist',
        url: 'https://pokeapi.co/api/v2/move/809/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'tera-blast',
        url: 'https://pokeapi.co/api/v2/move/851/',
      },
      version_group_details: [
        {
          level_learned_at: 0,
          move_learn_method: {
            name: 'machine',
            url: 'https://pokeapi.co/api/v2/move-learn-method/4/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
    {
      move: {
        name: 'malignant-chain',
        url: 'https://pokeapi.co/api/v2/move/919/',
      },
      version_group_details: [
        {
          level_learned_at: 48,
          move_learn_method: {
            name: 'level-up',
            url: 'https://pokeapi.co/api/v2/move-learn-method/1/',
          },
          version_group: {
            name: 'scarlet-violet',
            url: 'https://pokeapi.co/api/v2/version-group/25/',
          },
        },
      ],
    },
  ],
  name: 'pecharunt',
  order: 1109,
  past_abilities: [],
  past_types: [],
  species: {
    name: 'pecharunt',
    url: 'https://pokeapi.co/api/v2/pokemon-species/1025/',
  },
  sprites: {
    back_default: null,
    back_female: null,
    back_shiny: null,
    back_shiny_female: null,
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1025.png',
    front_female: null,
    front_shiny: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1025.png',
    front_shiny_female: null,
    other: {
      dream_world: {
        front_default: null,
        front_female: null,
      },
      home: {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1025.png',
        front_female: null,
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1025.png',
        front_shiny_female: null,
      },
      'official-artwork': {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1025.png',
        front_shiny:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/1025.png',
      },
      showdown: {
        back_default: null,
        back_female: null,
        back_shiny: null,
        back_shiny_female: null,
        front_default: null,
        front_female: null,
        front_shiny: null,
        front_shiny_female: null,
      },
    },
    versions: {
      'generation-i': {
        'red-blue': {
          back_default: null,
          back_gray: null,
          back_transparent: null,
          front_default: null,
          front_gray: null,
          front_transparent: null,
        },
        yellow: {
          back_default: null,
          back_gray: null,
          back_transparent: null,
          front_default: null,
          front_gray: null,
          front_transparent: null,
        },
      },
      'generation-ii': {
        crystal: {
          back_default: null,
          back_shiny: null,
          back_shiny_transparent: null,
          back_transparent: null,
          front_default: null,
          front_shiny: null,
          front_shiny_transparent: null,
          front_transparent: null,
        },
        gold: {
          back_default: null,
          back_shiny: null,
          front_default: null,
          front_shiny: null,
          front_transparent: null,
        },
        silver: {
          back_default: null,
          back_shiny: null,
          front_default: null,
          front_shiny: null,
          front_transparent: null,
        },
      },
      'generation-iii': {
        emerald: {
          front_default: null,
          front_shiny: null,
        },
        'firered-leafgreen': {
          back_default: null,
          back_shiny: null,
          front_default: null,
          front_shiny: null,
        },
        'ruby-sapphire': {
          back_default: null,
          back_shiny: null,
          front_default: null,
          front_shiny: null,
        },
      },
      'generation-iv': {
        'diamond-pearl': {
          back_default: null,
          back_female: null,
          back_shiny: null,
          back_shiny_female: null,
          front_default: null,
          front_female: null,
          front_shiny: null,
          front_shiny_female: null,
        },
        'heartgold-soulsilver': {
          back_default: null,
          back_female: null,
          back_shiny: null,
          back_shiny_female: null,
          front_default: null,
          front_female: null,
          front_shiny: null,
          front_shiny_female: null,
        },
        platinum: {
          back_default: null,
          back_female: null,
          back_shiny: null,
          back_shiny_female: null,
          front_default: null,
          front_female: null,
          front_shiny: null,
          front_shiny_female: null,
        },
      },
      'generation-v': {
        'black-white': {
          animated: {
            back_default: null,
            back_female: null,
            back_shiny: null,
            back_shiny_female: null,
            front_default: null,
            front_female: null,
            front_shiny: null,
            front_shiny_female: null,
          },
          back_default: null,
          back_female: null,
          back_shiny: null,
          back_shiny_female: null,
          front_default: null,
          front_female: null,
          front_shiny: null,
          front_shiny_female: null,
        },
      },
      'generation-vi': {
        'omegaruby-alphasapphire': {
          front_default: null,
          front_female: null,
          front_shiny: null,
          front_shiny_female: null,
        },
        'x-y': {
          front_default: null,
          front_female: null,
          front_shiny: null,
          front_shiny_female: null,
        },
      },
      'generation-vii': {
        icons: {
          front_default: null,
          front_female: null,
        },
        'ultra-sun-ultra-moon': {
          front_default: null,
          front_female: null,
          front_shiny: null,
          front_shiny_female: null,
        },
      },
      'generation-viii': {
        icons: {
          front_default: null,
          front_female: null,
        },
      },
    },
  },
  stats: [
    {
      base_stat: 88,
      effort: 0,
      stat: {
        name: 'hp',
        url: 'https://pokeapi.co/api/v2/stat/1/',
      },
    },
    {
      base_stat: 88,
      effort: 0,
      stat: {
        name: 'attack',
        url: 'https://pokeapi.co/api/v2/stat/2/',
      },
    },
    {
      base_stat: 160,
      effort: 3,
      stat: {
        name: 'defense',
        url: 'https://pokeapi.co/api/v2/stat/3/',
      },
    },
    {
      base_stat: 88,
      effort: 0,
      stat: {
        name: 'special-attack',
        url: 'https://pokeapi.co/api/v2/stat/4/',
      },
    },
    {
      base_stat: 88,
      effort: 0,
      stat: {
        name: 'special-defense',
        url: 'https://pokeapi.co/api/v2/stat/5/',
      },
    },
    {
      base_stat: 88,
      effort: 0,
      stat: {
        name: 'speed',
        url: 'https://pokeapi.co/api/v2/stat/6/',
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: 'poison',
        url: 'https://pokeapi.co/api/v2/type/4/',
      },
    },
    {
      slot: 2,
      type: {
        name: 'ghost',
        url: 'https://pokeapi.co/api/v2/type/8/',
      },
    },
  ],
  weight: 3,
}

export const fetchPokemonResolver = http.get('https://pokeapi.co/api/v2/pokemon/:id', async ({ params }) => {
  const { id } = params

  if (id === '1025') {
    return HttpResponse.json(Pecharunt)
  }
  await delay('infinite')
  return HttpResponse.json({})
})
