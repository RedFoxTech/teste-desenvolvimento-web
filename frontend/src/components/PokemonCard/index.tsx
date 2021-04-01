import { useRouter } from 'next/router'

import Button from 'components/Button'
import ModalConfirmation from 'components/ModalConfirmation'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Link from 'next/link'
import { useState } from 'react'
import * as S from './styles'

type PokemonTypes =
  | 'bug'
  | 'dark'
  | 'dragon'
  | 'electric'
  | 'fairy'
  | 'fighting'
  | 'fire'
  | 'flying'
  | 'ghost'
  | 'grass'
  | 'ground'
  | 'ice'
  | 'normal'
  | 'poison'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'water'

export type PokemonCardProps = {
  id: string
  pokedexNumber: number
  name: string
  image: string
  pokemonType: PokemonTypes
  pokemonType2?: PokemonTypes | '' | null
  onStats: boolean
}

const PokemonCard = ({
  id,
  pokedexNumber,
  name,
  image,
  pokemonType = 'normal',
  pokemonType2 = '',
  onStats = false,
}: PokemonCardProps) => {
  const [displayConfirmationModal, setDisplayConfirmationModal] = useState(
    false,
  )
  const router = useRouter()
  async function handleDeletePokemon(id: string) {
    await fetch(`http://localhost:3333/pokemons/${id}`, {
      method: 'DELETE',
    })

    toast.info('Pokemon removido')

    setDisplayConfirmationModal(false)
    router.push('/pokemons')
  }

  const showConfirmationModal = () => {
    setDisplayConfirmationModal(true)
  }

  const hideConfirmationModal = () => {
    setDisplayConfirmationModal(false)
  }

  return (
    <>
      <ModalConfirmation
        visible={displayConfirmationModal}
        hideModal={hideConfirmationModal}
        pokemonId={id}
        handleDelete={() => handleDeletePokemon(id)}
      />

      <S.CardWrapper onStats={onStats} pokemonType={pokemonType}>
        <S.WrapperTop>
          <Link href={`pokemon/${name}`} passHref>
            <S.PokemonName>{name}</S.PokemonName>
          </Link>
          <S.PokemonID>#{pokedexNumber}</S.PokemonID>
        </S.WrapperTop>
        <S.TypesContainer>
          {pokemonType2 && (
            <S.WrapperType>
              <S.PokemonType2>{pokemonType2}</S.PokemonType2>
            </S.WrapperType>
          )}
          <S.WrapperType>
            <S.PokemonType>{pokemonType}</S.PokemonType>
          </S.WrapperType>
        </S.TypesContainer>

        <S.Image src={image} alt={name} role="img" />
        <S.RemoveWrapper>
          <Button onClick={showConfirmationModal} onlyText>
            remover
          </Button>
        </S.RemoveWrapper>
      </S.CardWrapper>
    </>
  )
}

export default PokemonCard
