import * as S from './styles'
import Link from 'next/link'

const Main = ({
  title = 'RedFox - Desafio Frontend',
  description = ' Wesley M. Oliveira',
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/redfox.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    <Link href="/pokemons">
      <a>Clique aqui e navegue para rota /pokemons</a>
    </Link>
  </S.Wrapper>
)

export default Main
