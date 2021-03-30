import styled, { css, DefaultTheme } from 'styled-components'
import { darken, lighten } from 'polished'

import { PokemonCardProps } from '.'

const wrapperModifiers = {
  bug: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.bug)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.bug)};
    }
    background: ${theme.colors.bug};
  `,
  dark: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.dark)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.dark)};
    }
    background: ${theme.colors.dark};
  `,
  dragon: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.dragon)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.dragon)};
    }
    background: ${theme.colors.dragon};
  `,
  eletric: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.eletric)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.eletric)};
    }
    background: ${theme.colors.eletric};
  `,
  fairy: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.fairy)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.fairy)};
    }
    background: ${theme.colors.fairy};
  `,
  fighting: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.fighting)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.fighting)};
    }
    background: ${theme.colors.fighting};
  `,
  fire: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.fire)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.fire)};
    }
    background: ${theme.colors.fire};
  `,
  flying: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.flying)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.flying)};
    }
    background: ${theme.colors.flying};
  `,
  ghost: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.ghost)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.ghost)};
    }
    background: ${theme.colors.ghost};
  `,
  grass: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.grass)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.grass)};
    }
    background: ${theme.colors.grass};
  `,
  ground: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.ground)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.ground)};
    }
    background: ${theme.colors.ground};
  `,
  ice: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.ice)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.ice)};
    }
    background: ${theme.colors.ice};
  `,
  normal: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.normal)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.normal)};
    }
    background: ${theme.colors.normal};
  `,
  poison: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.poison)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.poison)};
    }
    background: ${theme.colors.poison};
  `,
  psychic: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.psychic)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.psychic)};
    }
    background: ${theme.colors.psychic};
  `,
  rock: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.rock)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.rock)};
    }
    background: ${theme.colors.rock};
  `,
  steel: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.steel)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.steel)};
    }
    background: ${theme.colors.steel};
  `,
  water: (theme: DefaultTheme) => css`
    ${PokemonID},
    ${PokemonName},
    ${PokemonType},
    ${PokemonType2} {
      color: ${darken(0.2, theme.colors.water)};
    }
    ${WrapperType} {
      background-color: ${lighten(0.1, theme.colors.water)};
    }
    background: ${theme.colors.water};
  `,
}

type BackgroundColorProps = Pick<PokemonCardProps, 'pokemonType'>

export const CardWrapper = styled.div<BackgroundColorProps>`
  ${({ theme, pokemonType }) => css`
    cursor: pointer;
    box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2);
    background: ${theme.colors.normal};
    position: relative;
    padding: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 201px;
    max-width: 350px;
    border-radius: ${theme.border.radius};

    ${!!pokemonType && wrapperModifiers[pokemonType](theme)}
  `}
`

export const Image = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 110px;
  height: 110px;
`

export const WrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const PokemonName = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxlarge};
    text-transform: capitalize;
  `}
`

export const PokemonID = styled.h4`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xlarge};
    font-style: italic;
  `}
`

export const WrapperType = styled.div`
  ${({ theme }) => css`
    display: inline-block;
    max-width: fit-content;
    display: flex;
    padding: ${theme.spacings.xxsmall};
    border-radius: ${theme.border.radius};
  `}
`

export const PokemonType = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    text-transform: capitalize;
  `}
`

export const PokemonType2 = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.large};
    text-transform: capitalize;
  `}
`
