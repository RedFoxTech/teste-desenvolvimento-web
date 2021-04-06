import React, { useEffect, useState } from 'react'

import TextInputField from 'components/TextInputField'

import { FiPlus, FiSearch } from 'react-icons/fi'

import * as S from './styles'

import PokemonCard, { PokemonCardProps } from 'components/PokemonCard'
import Button from 'components/Button'
import { useModal } from 'context/ModalContext'
import ModalAddPokemon from 'components/ModalAddPokemon'

export type PokemonsTemplateProps = { pokemons: PokemonCardProps[] }

const Pokemons = ({ pokemons }: PokemonsTemplateProps) => {
  const { modalVisible, changeModalView } = useModal()
  const [searchValue, setSearchValue] = useState('')

  //quit with ESC and prevent scroll on modal
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'ESC' || (event.code === 'Escape' && modalVisible)) {
        changeModalView()
      }
    }
    modalVisible
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset')
    document.addEventListener('keydown', onKeyDown, false)
    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
    }
  }, [modalVisible, changeModalView])

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
    <>
      <S.Wrapper>
        <S.WrapperHeading>
          <S.Logo src="/img/redfox.svg" alt="logomarca da empresa" />
        </S.WrapperHeading>
        <S.WrapperSearch>
          <TextInputField
            placeholder={'Procure o Pokemon ou tipo ...'}
            name="search"
            icon={<FiSearch size={45} />}
            value={searchValue}
            onChange={handleSearchInputChanges}
          />
          <Button icon={<FiPlus size={45} />} onClick={changeModalView}>
            Adicionar
          </Button>
        </S.WrapperSearch>

        <S.WrapperCards>
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              pokedexNumber={pokemon.pokedexNumber}
              name={pokemon.name}
              pokemonType={pokemon.pokemonType}
              pokemonType2={pokemon.pokemonType2}
              image={pokemon.image}
              onStats={pokemon.onStats}
            />
          ))}
        </S.WrapperCards>
      </S.Wrapper>
      <ModalAddPokemon />
    </>
  )
}

export default Pokemons
