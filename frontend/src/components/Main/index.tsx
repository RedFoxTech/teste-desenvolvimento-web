import * as S from './styles'

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
  </S.Wrapper>
)

export default Main
