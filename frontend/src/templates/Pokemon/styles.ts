import styled, { css } from 'styled-components'

type CoverProps = {
  src: string
}

export const PageWrapper = styled.main`
  margin-top: 5rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
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
