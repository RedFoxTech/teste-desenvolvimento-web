import styled, { css } from 'styled-components'

type CoverProps = {
  src: string
}

export const Main = styled.main`
  margin-top: 20rem;
`

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 39.5rem;
    background-image: url(${src});
    background-size: cover;
    background-position: top;
    opacity: 0.4;
  `}
`
