import styled, { css } from 'styled-components'

type OpenedlProps = {
  isOpen: boolean
}

export const Wrapper = styled.main<OpenedlProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
    z-index: ${theme.layers.modal};
    justify-content: center;
    align-items: center;
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
    background: rgba(0, 0, 0, 0.49);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    transition: opacity ${theme.transition.default};
  `}
`

export const ModalWrapper = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    z-index: ${theme.layers.modal};
    position: relative;
    width: 695px;
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

export const TitleWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-self: flex-start;
    align-items: center;
    margin-left: ${theme.spacings.small};
    margin-top: ${theme.spacings.small};
    h1 {
      color: ${theme.colors.primary};
    }
    > svg {
      margin-right: ${theme.spacings.xxsmall};
      color: ${theme.colors.primary};
    }
  `}
`
