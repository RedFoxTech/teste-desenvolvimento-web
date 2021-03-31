import PokemonCard, { PokemonCardProps } from 'components/PokemonCard'
import PokemonStats, { PokemonStatsProps } from 'components/PokemonStats'
import * as S from './styles'

export type PokemonTemplateProps = {
  pokemonInfo: PokemonStatsProps & PokemonCardProps
}

const Pokemon = ({ pokemonInfo }: PokemonTemplateProps) => {
  return (
    <S.PageWrapper>
      <PokemonCard {...pokemonInfo} onStats />
      <PokemonStats {...pokemonInfo} />
    </S.PageWrapper>
  )
}

export default Pokemon
