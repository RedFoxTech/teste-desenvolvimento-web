import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'

type OpenedlProps = {
  isOpen: boolean
}

export const Wrapper = styled.main<OpenedlProps>`
  ${({ theme, isOpen }) => css`
    display: flex;
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
    width: 516px;
    height: 244px;
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  `}
`

export const ButtonsWrapper = styled.label`
  ${ButtonStyles.Wrapper} {
    width: 116px;
    height: 42px;
    margin: 0px 10px 0px 10px;
  }
`
