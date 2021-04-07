import styled, { css, DefaultTheme } from 'styled-components'

import { SelectProps } from '.'

export const wrapperModifiers = {
  WithLabel: (theme: DefaultTheme) => css`
    border: 0.1rem solid ${theme.colors.primary};
  `,

  fullWidth: () => css`
    ${Wrapper} {
      width: 100%;
    }
  `,
}

export const InputWrapper = styled.div<SelectProps>`
  ${({ theme, label, fullWidth }) => css`
    display: flex;
    background: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xsmall};
    border-left: 0.1rem solid;
    border-right: 0.1rem solid;
    border-bottom: 0.3rem solid;
    border-color: ${theme.colors.lightGray};
    height: 5rem;

    ${!!label && wrapperModifiers.WithLabel(theme)};

    ${fullWidth && wrapperModifiers.fullWidth()};
  `}
`

export const Error = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.primary};
  `}
`

export const Input = styled.select`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall};
    padding-right: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
    &::placeholder {
      color: ${theme.colors.primary};
    }
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.primary};

    & > svg {
      width: 100%;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin: ${theme.spacings.medium} ${theme.spacings.medium}
      ${theme.spacings.medium} 0;
  `}
`
