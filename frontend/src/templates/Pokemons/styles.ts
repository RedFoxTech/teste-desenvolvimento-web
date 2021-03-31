import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #fff;
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  //text-align: center;
  align-items: center;
  //justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const WrapperCards = styled.main`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.medium};
    display: grid;
    grid-gap: ${theme.grid.gap};
    grid-template-columns: 2fr 2fr;
    align-items: flex-end;
  `}
`

export const WrapperHeading = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 100%;
    background-color: ${theme.colors.white};
    border-bottom-left-radius: ${theme.border.radius};
    border-bottom-right-radius: ${theme.border.radius};
  `}
`
