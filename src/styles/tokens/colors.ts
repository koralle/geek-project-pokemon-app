import { type ThemeTokens, generate } from '@yamada-ui/react'

export const colors: ThemeTokens = {
  pokedex: generate.tones('#b94646'),
  pokedexDark: generate.tones('#c56767'),
  pokemonType: {
    normal: generate.tones('#949495'),
    fire: generate.tones('#e56c3e'),
    water: generate.tones('#5185c5'),
    grass: generate.tones('#66a945'),
    electric: generate.tones('#f6d851'),
    ice: generate.tones('#6dc8eb'),
    fighting: generate.tones('#e09c40'),
    poison: generate.tones('#735198'),
    ground: generate.tones('#9c7743'),
    flying: generate.tones('#a2c3e7'),
    psychic: generate.tones('#dd6b7b'),
    bug: generate.tones('#9fa244'),
    rock: generate.tones('#bfb889'),
    ghost: generate.tones('#684870'),
    dragon: generate.tones('#535ca8'),
    dark: generate.tones('#4c4948'),
    steel: generate.tones('#69a9c7'),
    fairy: generate.tones('#dab4d4'),
  },
}
