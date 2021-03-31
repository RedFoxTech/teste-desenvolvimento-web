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
  id: number
  name: string
  image: string
  pokemonType: PokemonTypes
  pokemonType2?: PokemonTypes | ''
  onStats: boolean
}

const PokemonCard = ({
  id,
  name,
  image,
  pokemonType = 'normal',
  pokemonType2 = '',
  onStats = false,
}: PokemonCardProps) => {
  return (
    <S.CardWrapper onStats={onStats} pokemonType={pokemonType}>
      <S.WrapperTop>
        <S.PokemonName>{name}</S.PokemonName>
        <S.PokemonID>#{id}</S.PokemonID>
      </S.WrapperTop>
      <S.TypesContainer>
        {!!pokemonType2 && (
          <S.WrapperType>
            <S.PokemonType2>{pokemonType2}</S.PokemonType2>
          </S.WrapperType>
        )}
        <S.WrapperType>
          <S.PokemonType>{pokemonType}</S.PokemonType>
        </S.WrapperType>
      </S.TypesContainer>

      <S.Image src={image} alt={name} role="img" />
    </S.CardWrapper>
  )
}

export default PokemonCard
