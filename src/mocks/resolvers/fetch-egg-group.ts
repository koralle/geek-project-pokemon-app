import { http, HttpResponse, delay } from 'msw'

const Undiscovered = {
  id: 15,
  name: 'no-eggs',
  names: [
    {
      language: {
        name: 'ja-Hrkt',
        url: 'https://pokeapi.co/api/v2/language/1/',
      },
      name: 'タマゴみはっけん',
    },
    {
      language: {
        name: 'ko',
        url: 'https://pokeapi.co/api/v2/language/3/',
      },
      name: '알미발견',
    },
    {
      language: {
        name: 'zh-Hant',
        url: 'https://pokeapi.co/api/v2/language/4/',
      },
      name: '未發現',
    },
    {
      language: {
        name: 'fr',
        url: 'https://pokeapi.co/api/v2/language/5/',
      },
      name: 'Inconnu',
    },
    {
      language: {
        name: 'de',
        url: 'https://pokeapi.co/api/v2/language/6/',
      },
      name: 'Unbekannt',
    },
    {
      language: {
        name: 'es',
        url: 'https://pokeapi.co/api/v2/language/7/',
      },
      name: 'Desconocido',
    },
    {
      language: {
        name: 'it',
        url: 'https://pokeapi.co/api/v2/language/8/',
      },
      name: 'Non ancora scoperto',
    },
    {
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      name: 'Undiscovered',
    },
    {
      language: {
        name: 'zh-Hans',
        url: 'https://pokeapi.co/api/v2/language/12/',
      },
      name: '未发现',
    },
  ],
  pokemon_species: [
    {
      name: 'nidorina',
      url: 'https://pokeapi.co/api/v2/pokemon-species/30/',
    },
    {
      name: 'nidoqueen',
      url: 'https://pokeapi.co/api/v2/pokemon-species/31/',
    },
    {
      name: 'articuno',
      url: 'https://pokeapi.co/api/v2/pokemon-species/144/',
    },
    {
      name: 'zapdos',
      url: 'https://pokeapi.co/api/v2/pokemon-species/145/',
    },
    {
      name: 'moltres',
      url: 'https://pokeapi.co/api/v2/pokemon-species/146/',
    },
    {
      name: 'mewtwo',
      url: 'https://pokeapi.co/api/v2/pokemon-species/150/',
    },
    {
      name: 'mew',
      url: 'https://pokeapi.co/api/v2/pokemon-species/151/',
    },
    {
      name: 'pichu',
      url: 'https://pokeapi.co/api/v2/pokemon-species/172/',
    },
    {
      name: 'cleffa',
      url: 'https://pokeapi.co/api/v2/pokemon-species/173/',
    },
    {
      name: 'igglybuff',
      url: 'https://pokeapi.co/api/v2/pokemon-species/174/',
    },
    {
      name: 'togepi',
      url: 'https://pokeapi.co/api/v2/pokemon-species/175/',
    },
    {
      name: 'unown',
      url: 'https://pokeapi.co/api/v2/pokemon-species/201/',
    },
    {
      name: 'tyrogue',
      url: 'https://pokeapi.co/api/v2/pokemon-species/236/',
    },
    {
      name: 'smoochum',
      url: 'https://pokeapi.co/api/v2/pokemon-species/238/',
    },
    {
      name: 'elekid',
      url: 'https://pokeapi.co/api/v2/pokemon-species/239/',
    },
    {
      name: 'magby',
      url: 'https://pokeapi.co/api/v2/pokemon-species/240/',
    },
    {
      name: 'raikou',
      url: 'https://pokeapi.co/api/v2/pokemon-species/243/',
    },
    {
      name: 'entei',
      url: 'https://pokeapi.co/api/v2/pokemon-species/244/',
    },
    {
      name: 'suicune',
      url: 'https://pokeapi.co/api/v2/pokemon-species/245/',
    },
    {
      name: 'lugia',
      url: 'https://pokeapi.co/api/v2/pokemon-species/249/',
    },
    {
      name: 'ho-oh',
      url: 'https://pokeapi.co/api/v2/pokemon-species/250/',
    },
    {
      name: 'celebi',
      url: 'https://pokeapi.co/api/v2/pokemon-species/251/',
    },
    {
      name: 'azurill',
      url: 'https://pokeapi.co/api/v2/pokemon-species/298/',
    },
    {
      name: 'wynaut',
      url: 'https://pokeapi.co/api/v2/pokemon-species/360/',
    },
    {
      name: 'regirock',
      url: 'https://pokeapi.co/api/v2/pokemon-species/377/',
    },
    {
      name: 'regice',
      url: 'https://pokeapi.co/api/v2/pokemon-species/378/',
    },
    {
      name: 'registeel',
      url: 'https://pokeapi.co/api/v2/pokemon-species/379/',
    },
    {
      name: 'latias',
      url: 'https://pokeapi.co/api/v2/pokemon-species/380/',
    },
    {
      name: 'latios',
      url: 'https://pokeapi.co/api/v2/pokemon-species/381/',
    },
    {
      name: 'kyogre',
      url: 'https://pokeapi.co/api/v2/pokemon-species/382/',
    },
    {
      name: 'groudon',
      url: 'https://pokeapi.co/api/v2/pokemon-species/383/',
    },
    {
      name: 'rayquaza',
      url: 'https://pokeapi.co/api/v2/pokemon-species/384/',
    },
    {
      name: 'jirachi',
      url: 'https://pokeapi.co/api/v2/pokemon-species/385/',
    },
    {
      name: 'deoxys',
      url: 'https://pokeapi.co/api/v2/pokemon-species/386/',
    },
    {
      name: 'budew',
      url: 'https://pokeapi.co/api/v2/pokemon-species/406/',
    },
    {
      name: 'chingling',
      url: 'https://pokeapi.co/api/v2/pokemon-species/433/',
    },
    {
      name: 'bonsly',
      url: 'https://pokeapi.co/api/v2/pokemon-species/438/',
    },
    {
      name: 'mime-jr',
      url: 'https://pokeapi.co/api/v2/pokemon-species/439/',
    },
    {
      name: 'happiny',
      url: 'https://pokeapi.co/api/v2/pokemon-species/440/',
    },
    {
      name: 'munchlax',
      url: 'https://pokeapi.co/api/v2/pokemon-species/446/',
    },
    {
      name: 'riolu',
      url: 'https://pokeapi.co/api/v2/pokemon-species/447/',
    },
    {
      name: 'mantyke',
      url: 'https://pokeapi.co/api/v2/pokemon-species/458/',
    },
    {
      name: 'uxie',
      url: 'https://pokeapi.co/api/v2/pokemon-species/480/',
    },
    {
      name: 'mesprit',
      url: 'https://pokeapi.co/api/v2/pokemon-species/481/',
    },
    {
      name: 'azelf',
      url: 'https://pokeapi.co/api/v2/pokemon-species/482/',
    },
    {
      name: 'dialga',
      url: 'https://pokeapi.co/api/v2/pokemon-species/483/',
    },
    {
      name: 'palkia',
      url: 'https://pokeapi.co/api/v2/pokemon-species/484/',
    },
    {
      name: 'heatran',
      url: 'https://pokeapi.co/api/v2/pokemon-species/485/',
    },
    {
      name: 'regigigas',
      url: 'https://pokeapi.co/api/v2/pokemon-species/486/',
    },
    {
      name: 'giratina',
      url: 'https://pokeapi.co/api/v2/pokemon-species/487/',
    },
    {
      name: 'cresselia',
      url: 'https://pokeapi.co/api/v2/pokemon-species/488/',
    },
    {
      name: 'darkrai',
      url: 'https://pokeapi.co/api/v2/pokemon-species/491/',
    },
    {
      name: 'shaymin',
      url: 'https://pokeapi.co/api/v2/pokemon-species/492/',
    },
    {
      name: 'arceus',
      url: 'https://pokeapi.co/api/v2/pokemon-species/493/',
    },
    {
      name: 'victini',
      url: 'https://pokeapi.co/api/v2/pokemon-species/494/',
    },
    {
      name: 'cobalion',
      url: 'https://pokeapi.co/api/v2/pokemon-species/638/',
    },
    {
      name: 'terrakion',
      url: 'https://pokeapi.co/api/v2/pokemon-species/639/',
    },
    {
      name: 'virizion',
      url: 'https://pokeapi.co/api/v2/pokemon-species/640/',
    },
    {
      name: 'tornadus',
      url: 'https://pokeapi.co/api/v2/pokemon-species/641/',
    },
    {
      name: 'thundurus',
      url: 'https://pokeapi.co/api/v2/pokemon-species/642/',
    },
    {
      name: 'reshiram',
      url: 'https://pokeapi.co/api/v2/pokemon-species/643/',
    },
    {
      name: 'zekrom',
      url: 'https://pokeapi.co/api/v2/pokemon-species/644/',
    },
    {
      name: 'landorus',
      url: 'https://pokeapi.co/api/v2/pokemon-species/645/',
    },
    {
      name: 'kyurem',
      url: 'https://pokeapi.co/api/v2/pokemon-species/646/',
    },
    {
      name: 'keldeo',
      url: 'https://pokeapi.co/api/v2/pokemon-species/647/',
    },
    {
      name: 'meloetta',
      url: 'https://pokeapi.co/api/v2/pokemon-species/648/',
    },
    {
      name: 'genesect',
      url: 'https://pokeapi.co/api/v2/pokemon-species/649/',
    },
    {
      name: 'xerneas',
      url: 'https://pokeapi.co/api/v2/pokemon-species/716/',
    },
    {
      name: 'yveltal',
      url: 'https://pokeapi.co/api/v2/pokemon-species/717/',
    },
    {
      name: 'zygarde',
      url: 'https://pokeapi.co/api/v2/pokemon-species/718/',
    },
    {
      name: 'diancie',
      url: 'https://pokeapi.co/api/v2/pokemon-species/719/',
    },
    {
      name: 'hoopa',
      url: 'https://pokeapi.co/api/v2/pokemon-species/720/',
    },
    {
      name: 'volcanion',
      url: 'https://pokeapi.co/api/v2/pokemon-species/721/',
    },
    {
      name: 'type-null',
      url: 'https://pokeapi.co/api/v2/pokemon-species/772/',
    },
    {
      name: 'silvally',
      url: 'https://pokeapi.co/api/v2/pokemon-species/773/',
    },
    {
      name: 'tapu-koko',
      url: 'https://pokeapi.co/api/v2/pokemon-species/785/',
    },
    {
      name: 'tapu-lele',
      url: 'https://pokeapi.co/api/v2/pokemon-species/786/',
    },
    {
      name: 'tapu-bulu',
      url: 'https://pokeapi.co/api/v2/pokemon-species/787/',
    },
    {
      name: 'tapu-fini',
      url: 'https://pokeapi.co/api/v2/pokemon-species/788/',
    },
    {
      name: 'cosmog',
      url: 'https://pokeapi.co/api/v2/pokemon-species/789/',
    },
    {
      name: 'cosmoem',
      url: 'https://pokeapi.co/api/v2/pokemon-species/790/',
    },
    {
      name: 'solgaleo',
      url: 'https://pokeapi.co/api/v2/pokemon-species/791/',
    },
    {
      name: 'lunala',
      url: 'https://pokeapi.co/api/v2/pokemon-species/792/',
    },
    {
      name: 'nihilego',
      url: 'https://pokeapi.co/api/v2/pokemon-species/793/',
    },
    {
      name: 'buzzwole',
      url: 'https://pokeapi.co/api/v2/pokemon-species/794/',
    },
    {
      name: 'pheromosa',
      url: 'https://pokeapi.co/api/v2/pokemon-species/795/',
    },
    {
      name: 'xurkitree',
      url: 'https://pokeapi.co/api/v2/pokemon-species/796/',
    },
    {
      name: 'celesteela',
      url: 'https://pokeapi.co/api/v2/pokemon-species/797/',
    },
    {
      name: 'kartana',
      url: 'https://pokeapi.co/api/v2/pokemon-species/798/',
    },
    {
      name: 'guzzlord',
      url: 'https://pokeapi.co/api/v2/pokemon-species/799/',
    },
    {
      name: 'necrozma',
      url: 'https://pokeapi.co/api/v2/pokemon-species/800/',
    },
    {
      name: 'magearna',
      url: 'https://pokeapi.co/api/v2/pokemon-species/801/',
    },
    {
      name: 'marshadow',
      url: 'https://pokeapi.co/api/v2/pokemon-species/802/',
    },
    {
      name: 'poipole',
      url: 'https://pokeapi.co/api/v2/pokemon-species/803/',
    },
    {
      name: 'naganadel',
      url: 'https://pokeapi.co/api/v2/pokemon-species/804/',
    },
    {
      name: 'stakataka',
      url: 'https://pokeapi.co/api/v2/pokemon-species/805/',
    },
    {
      name: 'blacephalon',
      url: 'https://pokeapi.co/api/v2/pokemon-species/806/',
    },
    {
      name: 'zeraora',
      url: 'https://pokeapi.co/api/v2/pokemon-species/807/',
    },
    {
      name: 'meltan',
      url: 'https://pokeapi.co/api/v2/pokemon-species/808/',
    },
    {
      name: 'melmetal',
      url: 'https://pokeapi.co/api/v2/pokemon-species/809/',
    },
    {
      name: 'toxel',
      url: 'https://pokeapi.co/api/v2/pokemon-species/848/',
    },
    {
      name: 'dracozolt',
      url: 'https://pokeapi.co/api/v2/pokemon-species/880/',
    },
    {
      name: 'arctozolt',
      url: 'https://pokeapi.co/api/v2/pokemon-species/881/',
    },
    {
      name: 'dracovish',
      url: 'https://pokeapi.co/api/v2/pokemon-species/882/',
    },
    {
      name: 'arctovish',
      url: 'https://pokeapi.co/api/v2/pokemon-species/883/',
    },
    {
      name: 'zacian',
      url: 'https://pokeapi.co/api/v2/pokemon-species/888/',
    },
    {
      name: 'zamazenta',
      url: 'https://pokeapi.co/api/v2/pokemon-species/889/',
    },
    {
      name: 'eternatus',
      url: 'https://pokeapi.co/api/v2/pokemon-species/890/',
    },
    {
      name: 'kubfu',
      url: 'https://pokeapi.co/api/v2/pokemon-species/891/',
    },
    {
      name: 'urshifu',
      url: 'https://pokeapi.co/api/v2/pokemon-species/892/',
    },
    {
      name: 'zarude',
      url: 'https://pokeapi.co/api/v2/pokemon-species/893/',
    },
    {
      name: 'regieleki',
      url: 'https://pokeapi.co/api/v2/pokemon-species/894/',
    },
    {
      name: 'regidrago',
      url: 'https://pokeapi.co/api/v2/pokemon-species/895/',
    },
    {
      name: 'glastrier',
      url: 'https://pokeapi.co/api/v2/pokemon-species/896/',
    },
    {
      name: 'spectrier',
      url: 'https://pokeapi.co/api/v2/pokemon-species/897/',
    },
    {
      name: 'calyrex',
      url: 'https://pokeapi.co/api/v2/pokemon-species/898/',
    },
    {
      name: 'enamorus',
      url: 'https://pokeapi.co/api/v2/pokemon-species/905/',
    },
    {
      name: 'great-tusk',
      url: 'https://pokeapi.co/api/v2/pokemon-species/984/',
    },
    {
      name: 'scream-tail',
      url: 'https://pokeapi.co/api/v2/pokemon-species/985/',
    },
    {
      name: 'brute-bonnet',
      url: 'https://pokeapi.co/api/v2/pokemon-species/986/',
    },
    {
      name: 'flutter-mane',
      url: 'https://pokeapi.co/api/v2/pokemon-species/987/',
    },
    {
      name: 'slither-wing',
      url: 'https://pokeapi.co/api/v2/pokemon-species/988/',
    },
    {
      name: 'sandy-shocks',
      url: 'https://pokeapi.co/api/v2/pokemon-species/989/',
    },
    {
      name: 'iron-treads',
      url: 'https://pokeapi.co/api/v2/pokemon-species/990/',
    },
    {
      name: 'iron-bundle',
      url: 'https://pokeapi.co/api/v2/pokemon-species/991/',
    },
    {
      name: 'iron-hands',
      url: 'https://pokeapi.co/api/v2/pokemon-species/992/',
    },
    {
      name: 'iron-jugulis',
      url: 'https://pokeapi.co/api/v2/pokemon-species/993/',
    },
    {
      name: 'iron-moth',
      url: 'https://pokeapi.co/api/v2/pokemon-species/994/',
    },
    {
      name: 'iron-thorns',
      url: 'https://pokeapi.co/api/v2/pokemon-species/995/',
    },
    {
      name: 'gimmighoul',
      url: 'https://pokeapi.co/api/v2/pokemon-species/999/',
    },
    {
      name: 'gholdengo',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1000/',
    },
    {
      name: 'wo-chien',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1001/',
    },
    {
      name: 'chien-pao',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1002/',
    },
    {
      name: 'ting-lu',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1003/',
    },
    {
      name: 'chi-yu',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1004/',
    },
    {
      name: 'roaring-moon',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1005/',
    },
    {
      name: 'iron-valiant',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1006/',
    },
    {
      name: 'koraidon',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1007/',
    },
    {
      name: 'miraidon',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1008/',
    },
    {
      name: 'walking-wake',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1009/',
    },
    {
      name: 'iron-leaves',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1010/',
    },
    {
      name: 'okidogi',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1014/',
    },
    {
      name: 'munkidori',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1015/',
    },
    {
      name: 'fezandipiti',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1016/',
    },
    {
      name: 'ogerpon',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1017/',
    },
    {
      name: 'gouging-fire',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1020/',
    },
    {
      name: 'raging-bolt',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1021/',
    },
    {
      name: 'iron-boulder',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1022/',
    },
    {
      name: 'iron-crown',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1023/',
    },
    {
      name: 'terapagos',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1024/',
    },
    {
      name: 'pecharunt',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1025/',
    },
  ],
}

export const fetchPokemonEggGroupResolver = http.get('https://pokeapi.co/api/v2/egg-group/:id', async ({ params }) => {
  const { id } = params

  if (id === '15') {
    return HttpResponse.json(Undiscovered)
  }

  await delay('infinite')
  return HttpResponse.json({})
})
