import React, { useState } from 'react'

import TextInputField from 'components/TextInputField'

import { FiSearch } from 'react-icons/fi'

import * as S from './styles'

import PokemonCard, { PokemonCardProps } from 'components/PokemonCard'

export type PokemonsTemplateProps = { pokemons: PokemonCardProps[] }

const Pokemons = ({ pokemons }: PokemonsTemplateProps) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearchInputChanges = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    e.preventDefault()
    setSearchValue(e.currentTarget.value)
  }

  if (searchValue.length > 0) {
    pokemons = pokemons.filter((pokemonsfiltered) => {
      return (
        pokemonsfiltered.name.toLowerCase().match(searchValue.toLowerCase()) ||
        pokemonsfiltered.pokemonType
          .toLowerCase()
          .match(searchValue.toLowerCase()) ||
        pokemonsfiltered.id.toString() === searchValue.toString()
      )
    })
  }

  return (
    <S.Wrapper>
      <S.WrapperHeading>
        <S.Logo src="/img/redfox.svg" alt="logomarca da empresa" />
        <TextInputField
          placeholder={'Procure o Pokemon, tipo, movimento, habilidade ...'}
          fullWidth
          name="search"
          icon={<FiSearch size={45} />}
          value={searchValue}
          onChange={handleSearchInputChanges}
        />
      </S.WrapperHeading>

      <S.WrapperCards>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            id={pokemon.id}
            name={pokemon.name}
            pokemonType={pokemon.pokemonType}
            pokemonType2={pokemon.pokemonType2}
            image={pokemon.image}
          />
        ))}
      </S.WrapperCards>
    </S.Wrapper>
  )
}

export default Pokemons
