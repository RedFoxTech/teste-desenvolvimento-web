import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'onlyText'>

const wrapperModifiers = {
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  onlyText: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};
    text-decoration: underline;
  `,
}

export const Icon = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
`

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, hasIcon, onlyText }) => css`
    height: 5.3rem;
    padding: ${theme.spacings.small};
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.xsmall};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 0;
    outline: none;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    cursor: pointer;
    text-decoration: none;

    span {
      font-size: ${theme.font.sizes.medium};
    }

    }

    ${!!hasIcon && wrapperModifiers.withIcon(theme)}
    ${!!onlyText && wrapperModifiers.onlyText(theme)}
  `}
`
