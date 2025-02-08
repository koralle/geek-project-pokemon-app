import type { ThemeSemantics } from '@yamada-ui/react'

export const semantics: ThemeSemantics = {
  colors: {
    primary: ['pokedex', 'pokedexDark'],
    black: ['#262626', '#1a1a1a'],
    white: ['#fcfcfc', '#e0e0e0'],
  },
  colorSchemes: {
    primary: ['pokedex', 'pokedexDark'],
    normal: 'pokemonType.normal',
    fire: 'pokemonType.fire',
    water: 'pokemonType.water',
    electric: 'pokemonType.electric',
    grass: 'pokemonType.grass',
    ice: 'pokemonType.ice',
    fighting: 'pokemonType.fighting',
    poison: 'pokemonType.poison',
    ground: 'pokemonType.ground',
    flying: 'pokemonType.flying',
    psychic: 'pokemonType.psychic',
    bug: 'pokemonType.bug',
    rock: 'pokemonType.rock',
    ghost: 'pokemonType.ghost',
    dragon: 'pokemonType.dragon',
    dark: 'pokemonType.dark',
    steel: 'pokemonType.steel',
    fairy: 'pokemonType.fairy',
  },
}
