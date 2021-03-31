import PokemonCard from 'components/PokemonCard'
import * as S from './styles'

type PokemonAtributes = {
  atk: number
  def: number
  sta: number
}
export type PokemonTemplateProps = {
  pokemonInfo: PokemonAtributes
}

const Pokemon = ({ pokemonInfo }: PokemonTemplateProps) => {
  return (
    <>
      <PokemonCard {...pokemonInfo} onStats />
      <S.Main>
        {pokemonInfo.atk}
        {pokemonInfo.def}
        {pokemonInfo.sta}
      </S.Main>
    </>
  )
}

export default Pokemon
